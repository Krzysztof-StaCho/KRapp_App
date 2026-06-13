import { LoadingScreen } from "@/components/atoms/container/loadingScreen";
import { RaportOverviewScreen } from "@/features/raport_crud/screens/raportOverviewScreen";
import { RaportSelectionScreen } from "@/features/raport_crud/screens/raportSelectionScreen";
import { RaportTableScreen } from "@/features/raport_crud/screens/raportTableScreen";
import { UpsertRaportItemScreen } from "@/features/raport_crud/screens/upsertRaportItemScreen";
import { UpsertRaportScreen } from "@/features/raport_crud/screens/upsertRaportScreen";
import {
  initializeStorageStore,
  StoreType,
} from "@/services/storage/storageStore";
import { RaportTheme } from "@/theme/theme";
import { ThemeProvider } from "@/theme/themeProvider";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useEffect, useState } from "react";
import { InventoryProvider } from "../providers/inventoryProvider";
import { RaportParamList } from "./paramList";

const Stack = createNativeStackNavigator<RaportParamList>();

export const RaportStack = () => {
  const [repositories, setRepositories] = useState<StoreType | null>(null);

  useEffect(() => {
    initializeStorageStore().then(setRepositories);
  }, []);

  if (!repositories) {
    return <LoadingScreen />;
  }

  return (
    <ThemeProvider theme={RaportTheme}>
      <InventoryProvider repositories={repositories}>
        <Stack.Navigator
          screenOptions={{
            headerStyle: { backgroundColor: RaportTheme.primary.toString() },
            headerTintColor: RaportTheme.primaryText.toString(),
          }}
        >
          <Stack.Screen
            name="RaportSelection"
            component={RaportSelectionScreen}
            options={{
              title: "Wybierz raport",
            }}
          />
          <Stack.Screen
            name="RaportOverview"
            component={RaportOverviewScreen}
          />
          <Stack.Screen name="RaportRTable" component={RaportTableScreen} />

          <Stack.Screen
            name="RaportRUpsert"
            component={UpsertRaportScreen}
            options={{
              presentation: "formSheet",
            }}
          />
          <Stack.Screen
            name="RaportRItemUpsert"
            component={UpsertRaportItemScreen}
            options={{
              presentation: "formSheet",
            }}
          />
        </Stack.Navigator>
      </InventoryProvider>
    </ThemeProvider>
  );
};
