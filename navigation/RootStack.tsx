import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { RootStackParamList } from "./RootStackParamList";

import { HomePageScreen } from "../feature/shared/screens/HomePageScreen";
import { RaportSelectionScreen } from "../feature/raport/screens/RaportSelectionScreen";
import { RaportOverviewScreen } from "../feature/raport/screens/RaportOverviewScreen";
import { RaportTableScreen } from "../feature/raport/screens/RaportTableScreen";

const Stack = createNativeStackNavigator<RootStackParamList>();

export const RootStack = () => {

    return (
        <Stack.Navigator>
            <Stack.Screen name='Home' component={HomePageScreen} />
            <Stack.Screen name='RaportSelection' component={RaportSelectionScreen} />
            <Stack.Screen name='RaportOverview' component={RaportOverviewScreen} />
            <Stack.Screen name='RaportRTable' component={RaportTableScreen} />
        </Stack.Navigator>
    );
};