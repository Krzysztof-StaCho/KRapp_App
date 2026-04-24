import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RaportParamList } from "../../../navigation/RootParamList";
import { useContext } from "react";
import { RaportContext } from "../../../store/RaportContext";
import RaportItemType from "../../../data/types/RaportItem.types";
import { UpsertRaportItemTemplate, UpsertRaportItemTemplateProps } from "../../../components/template/UpsertRaportItemTemplate";
import { Alert } from "react-native";
import { validateHandlers } from "../../shared/hooks/useInput";

type Props = NativeStackScreenProps<RaportParamList, "RaportRItemUpsert">;

export const UpsertRaportItemScreen = ({navigation, route}: Props) => {
    const { raportId, itemId } = route.params;
    const raportCtx = useContext(RaportContext);
    
    let selectedItem: RaportItemType | undefined = undefined;
    if (raportId !== undefined && itemId !== undefined) {
        const selectedRaport = raportCtx.raports.find((item) => item.id === raportId);
        selectedItem = selectedRaport ? selectedRaport.data.find((item) => item.id === itemId) : undefined;
    };

    const confirmFormHandler = (item: RaportItemType) => {
        if (raportId === undefined)
            return;

        if (itemId !== undefined) {
            raportCtx.updateRaportI(raportId, itemId, item);
        } else {
            raportCtx.addRaportI(raportId, item);
        }

        navigation.goBack();
    };

    const deleteHandler = () => {
        if (raportId === undefined || itemId === undefined)
            return;

        Alert.alert(`Czy na pewno chcesz usunąć ${selectedItem?.name}?`,
            "Stracisz dane bezpowrotnie",
            [
                { text: 'Cofnij', style: 'cancel' },
                {
                    text: 'Potwierdź',
                    style: 'destructive',
                    onPress: () => {
                        raportCtx.deleteRaportI(raportId, itemId);
                        navigation.goBack();
                    }
                }
            ],
            { cancelable: true }
        );
    };

    const dummyData: UpsertRaportItemTemplateProps = {
        pageInfo: {
            pageTitle: selectedItem ? "Edytuj wpis" : "Dodaj wpis",
            type: selectedItem ? "update" : "create"
        },
        handlers: {
            closeFn: () => navigation.goBack(),
            deleteFn: selectedItem ? deleteHandler : undefined,
            confirmFn: confirmFormHandler
        },
        initData: selectedItem,
        validations: {
            name: validateHandlers.basicStringHandler,
            amount: validateHandlers.basicNumberHandler,
            quantity: validateHandlers.basicStringHandler
        }
    };

    return (
        <UpsertRaportItemTemplate {...dummyData} />
    );
};