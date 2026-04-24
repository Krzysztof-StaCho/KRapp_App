import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { RaportParamList } from "./RootParamList";
import { RaportSelectionScreen } from "../feature/raport/screens/RaportSelectionScreen";
import { RaportOverviewScreen } from "../feature/raport/screens/RaportOverviewScreen";
import { RaportTableScreen } from "../feature/raport/screens/RaportTableScreen";
import { UpsertRaportScreen } from "../feature/raport/screens/UpsertRaportScreen";
import { ThemeProvider } from "../utils/ThemeContext";
import { RaportTheme } from "../utils/Theme";
import { RaportContextProvider } from "../store/RaportContext";
import { UpsertRaportItemScreen } from "../feature/raport/screens/UpsertRaportItemScreen";

const Stack = createNativeStackNavigator<RaportParamList>();

export const RaportStack = () => {
    return (
        <ThemeProvider theme={RaportTheme}>
            <RaportContextProvider>
                <Stack.Navigator>
                    <Stack.Screen name='RaportSelection' component={RaportSelectionScreen} />
                    <Stack.Screen name='RaportOverview' component={RaportOverviewScreen} />
                    <Stack.Screen name='RaportRTable' component={RaportTableScreen} />

                    <Stack.Screen name='RaportRUpsert' component={UpsertRaportScreen}
                    options={{ presentation: "formSheet" }} />
                    <Stack.Screen name='RaportRItemUpsert' component={UpsertRaportItemScreen}
                    options={{ presentation: "formSheet" }} />
                </Stack.Navigator>
            </RaportContextProvider>
        </ThemeProvider>
    );
};