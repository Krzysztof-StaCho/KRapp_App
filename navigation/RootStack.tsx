import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { RootParamList } from "./RootParamList";

import { HomePageScreen } from "../feature/shared/screens/HomePageScreen";
import { RaportStack } from "./RaportStack";

const Stack = createNativeStackNavigator<RootParamList>();

export const RootStack = () => {
    return (
        <Stack.Navigator screenOptions={{
            headerShown: false
        }}>
            <Stack.Screen name='Home' component={HomePageScreen} options={{ headerShown: true }} />
            <Stack.Screen name="RaportStack" component={RaportStack} />
        </Stack.Navigator>
    );
};