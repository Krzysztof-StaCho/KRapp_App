import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { RaportParamList } from "./paramList";
import { ThemeProvider } from "@/theme/themeProvider";
import { RaportTheme } from "@/theme/theme";
import { InventoryProvider } from "../providers/inventoryProvider";
import { RaportSelectionScreen } from "@/features/raport_crud/screens/raportSelectionScreen";

const Stack = createNativeStackNavigator<RaportParamList>();

export const RaportStack = () => {
    return (
        <ThemeProvider theme={RaportTheme}>
            <InventoryProvider>
                <Stack.Navigator screenOptions={{
                    headerStyle: { backgroundColor: RaportTheme.primary.toString() },
                    headerTintColor: RaportTheme.primaryText.toString()
                }}>
                    <Stack.Screen name="RaportSelection" component={RaportSelectionScreen}
                    options={{
                        title: "Wybierz raport"
                    }} />
                </Stack.Navigator>
            </InventoryProvider>
        </ThemeProvider>
    );
};