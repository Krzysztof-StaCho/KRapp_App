import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootParamList } from "../../../navigation/RootParamList";
import { ThemeProvider } from "../../../utils/ThemeContext";
import { RaportTheme } from "../Theme";
import { UpsertRaportTemplate } from "../../../components/template/UpsertRaportTemplate";

type Props = NativeStackScreenProps<RootParamList, 'RaportRUpsert'>;

export const UpsertRaportScreen = ({ navigation }: Props) => {
    return (
        <ThemeProvider theme={RaportTheme}>
            <UpsertRaportTemplate />
        </ThemeProvider>
    );
};