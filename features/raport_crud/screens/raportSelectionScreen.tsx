import { RaportParamList } from "@/app/navigation/paramList";
import { SimpleButton } from "@/components/atoms/button/simpleButton";
import { StoreId } from "@/entities/base/storeModel";
import { useAppTheme } from "@/theme/themeProvider";
import {
    NativeStackNavigationOptions,
    NativeStackScreenProps,
} from "@react-navigation/native-stack";
import { useEffect } from "react";
import {
    PageProps,
    RaportSelectionTemplate,
} from "../components/template/raportSelectionTemplate";
import { useInventory } from "../hooks/useInventory";
import { SelectSchemaHeaders } from "../selectors/selectSchemaHeaders";

type Props = NativeStackScreenProps<RaportParamList, "RaportSelection">;

export const RaportSelectionScreen = ({ navigation }: Props) => {
  const theme = useAppTheme();
  const { state } = useInventory();

  const navigateHandler = (id: StoreId) => {
    navigation.navigate("RaportOverview", { raportId: id });
  };
  const upsertHandler = (id?: StoreId) => {
    navigation.navigate("RaportRUpsert", { raportId: id });
  };

  useEffect(() => {
    const navHeaderOptions: NativeStackNavigationOptions = {
      headerRight: () => (
        <SimpleButton
          text="Utwórz"
          color={theme.primaryText}
          onPressFn={() => upsertHandler()}
        />
      ),
    };
    navigation.setOptions(navHeaderOptions);
  }, [navigation]);

  const schemaHeaders = SelectSchemaHeaders(state.schemas);

  const screenData: PageProps = {
    data: schemaHeaders,
    navigateFn: navigateHandler,
    moreActionFn: upsertHandler,
  };

  return <RaportSelectionTemplate {...screenData} />;
};
