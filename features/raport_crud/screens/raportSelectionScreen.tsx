import { NativeStackNavigationOptions, NativeStackScreenProps } from "@react-navigation/native-stack";
import { RaportParamList } from "@/app/navigation/paramList";
import { useAppTheme } from "@/theme/themeProvider";
import { useInventory } from "../hooks/useInventory";
import { SchemaId } from "@/entities/schema/model/schema.types";
import { useEffect } from "react";
import { SimpleButton } from "@/components/atoms/button/simpleButton";
import { PageProps, RaportSelectionTemplate } from "../components/template/raportSelectionTemplate";
import { SelectSchemaHeaders } from "../selectors/selectSchemaHeaders";

type Props = NativeStackScreenProps<RaportParamList, 'RaportSelection'>;

export const RaportSelectionScreen = ({ navigation }: Props) => {
    const theme = useAppTheme();
    const { state } = useInventory();

    const navigateHandler = (id: SchemaId) => {
        navigation.navigate("RaportOverview", { raportId: id });
    };
    const upsertHandler = (id?: SchemaId) => {
        navigation.navigate("RaportRUpsert", { raportId: id });
    };

    useEffect(() => {
        const navHeaderOptions: NativeStackNavigationOptions = {
            headerRight: () => (
                <SimpleButton text="Utwórz" color={theme.primaryText}
                onPressFn={() => upsertHandler()} />
            )
        };
        navigation.setOptions(navHeaderOptions);
    }, [navigation]);

    const schemaHeaders = SelectSchemaHeaders(state.schemas);

    const screenData: PageProps = {
        data: schemaHeaders,
        navigateFn: navigateHandler,
        moreActionFn: upsertHandler
    };

    return (
        <RaportSelectionTemplate {...screenData} />
    );
};