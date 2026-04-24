import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RaportParamList } from "../../../navigation/RootParamList";
import { UpsertRaportTemplate, UpsertRaportTemplateType } from "../../../components/template/UpsertRaportTemplate";
import { useContext } from "react";
import { RaportContext } from "../../../store/RaportContext";
import { validateHandlers } from "../../shared/hooks/useInput";
import { Alert } from "react-native";

type Props = NativeStackScreenProps<RaportParamList, 'RaportRUpsert'>;

export const UpsertRaportScreen = ({ navigation, route }: Props) => {
    const { raportId } = route.params;
    const raportCtx = useContext(RaportContext);
    const selectedRaport = raportId ? raportCtx.raports.find((item) => item.id === raportId) : undefined;

    const confirmFormHandler = (title: string) => {
        if (raportId === undefined) {
            raportCtx.addRaportH({id: 0, title});
        } else {
            raportCtx.updateRaportH(raportId, {id: raportId, title});
        }

        navigation.goBack();
    };

    const deleteHandler = () => {
        if (raportId === undefined)
            return;

        Alert.alert(`Czy na pewno chcesz usunąć ${selectedRaport?.title}?`,
            "Stracisz dane bezpowrotnie",
            [
                { text: 'Cofnij', style: 'cancel' },
                {
                    text: 'Potwierdź',
                    style: 'destructive',
                    onPress: () => {
                        raportCtx.deleteRaportH(raportId);
                        navigation.goBack();
                    }
                }
            ],
            { cancelable: true }
        );
    };

    const dummyData: UpsertRaportTemplateType = {
        pageInfo: {
            pageTitle: selectedRaport ? "Edytuj raport" : "Dodaj raport",
            type: selectedRaport ? "update" : "create"
        },
        handlers: {
            closeFn: () => navigation.goBack(),
            confirmFn: confirmFormHandler,
            deleteFn: selectedRaport ? deleteHandler : undefined
        },
        initData: selectedRaport,
        validations: {
            title: validateHandlers.basicStringHandler
        }
    };

    return (
        <UpsertRaportTemplate pageInfo={dummyData.pageInfo} handlers={dummyData.handlers}
        initData={dummyData.initData} validations={dummyData.validations} />
    );
};