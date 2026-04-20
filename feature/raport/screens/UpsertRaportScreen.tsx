import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RaportParamList } from "../../../navigation/RootParamList";
import { UpsertRaportTemplate, UpsertRaportTemplateType } from "../../../components/template/UpsertRaportTemplate";

type Props = NativeStackScreenProps<RaportParamList, 'RaportRUpsert'>;

export const UpsertRaportScreen = ({ navigation, route }: Props) => {
    const { raportId } = route.params;
    const addNewFlag = (raportId === undefined) ? true : false;

    const dummyData: UpsertRaportTemplateType = {
        pageInfo: {
            pageTitle: addNewFlag ? "Dodaj raport" : "Edytuj raport",
            type: addNewFlag ? "create" : "update"
        },
        handlers: {
            closeFn: () => navigation.goBack(),
            confirmFn: () => {},
            deleteFn: addNewFlag ? undefined : () => {}
        }
    };

    return (
        <UpsertRaportTemplate pageInfo={dummyData.pageInfo} handlers={dummyData.handlers} />
    );
};