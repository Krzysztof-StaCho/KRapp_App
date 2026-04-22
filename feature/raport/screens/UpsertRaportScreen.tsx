import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RaportParamList } from "../../../navigation/RootParamList";
import { UpsertRaportTemplate, UpsertRaportTemplateType } from "../../../components/template/UpsertRaportTemplate";
import { useContext } from "react";
import { RaportContext } from "../../../store/RaportContext";

type Props = NativeStackScreenProps<RaportParamList, 'RaportRUpsert'>;

export const UpsertRaportScreen = ({ navigation, route }: Props) => {
    const { raportId } = route.params;
    const raportCtx = useContext(RaportContext);
    const addNewFlag = (raportId === undefined) ? true : false;

    const confirmFormHandler = (title: string) => {
        if (raportId === undefined) {
            raportCtx.addRaportH({id: 0, title});
        } else {
            raportCtx.updateRaportH(raportId, {id: raportId, title});
        }

        navigation.goBack();
    };

    const dummyData: UpsertRaportTemplateType = {
        pageInfo: {
            pageTitle: addNewFlag ? "Dodaj raport" : "Edytuj raport",
            type: addNewFlag ? "create" : "update"
        },
        handlers: {
            closeFn: () => navigation.goBack(),
            confirmFn: confirmFormHandler,
            deleteFn: addNewFlag ? undefined : () => {}
        },
        initData: raportId ? raportCtx.raports.find((item) => item.id === raportId) : undefined
    };

    return (
        <UpsertRaportTemplate pageInfo={dummyData.pageInfo} handlers={dummyData.handlers}
        initData={dummyData.initData} />
    );
};