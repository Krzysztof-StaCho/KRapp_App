import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { RootParamList } from "./paramList";
import { HomePageScreen } from "@/features/home_page/screens/homePageScreen";

const Stack = createNativeStackNavigator<RootParamList>();

export const RootStack = () => {
    return (
        <Stack.Navigator screenOptions={{
            headerShown: false
        }}>
            <Stack.Screen name="Home" component={HomePageScreen} options={{ headerShown: true, title: "Strona Główna" }} />
        </Stack.Navigator>
    );
};