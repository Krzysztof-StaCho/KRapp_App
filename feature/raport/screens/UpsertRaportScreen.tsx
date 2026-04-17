import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootParamList } from "../../../navigation/RootParamList";
import { ThemeProvider } from "../../../utils/ThemeContext";
import { RaportTheme } from "../Theme";
import { UpsertRaportTemplate } from "../../../components/template/UpsertRaportTemplate";

type Props = NativeStackScreenProps<RootParamList, 'RaportRUpsert'>;

export const UpsertRaportScreen = ({ route }: Props) => {
    const { raportId } = route.params;
    const addNewFlag = (raportId === undefined) ? true : false;

    return (
        <ThemeProvider theme={RaportTheme}>
            <UpsertRaportTemplate />
        </ThemeProvider>
    );
};