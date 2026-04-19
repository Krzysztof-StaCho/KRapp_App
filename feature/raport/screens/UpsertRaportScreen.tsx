import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootParamList } from "../../../navigation/RootParamList";
import { ThemeProvider } from "../../../utils/ThemeContext";
import { RaportTheme } from "../Theme";
import { UpsertRaportTemplate, UpsertRaportTemplateType } from "../../../components/template/UpsertRaportTemplate";

type Props = NativeStackScreenProps<RootParamList, 'RaportRUpsert'>;

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
        <ThemeProvider theme={RaportTheme}>
            <UpsertRaportTemplate pageInfo={dummyData.pageInfo} handlers={dummyData.handlers} />
        </ThemeProvider>
    );
};