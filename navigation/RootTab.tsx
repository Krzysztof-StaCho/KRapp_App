import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { RootParamList } from "./RootParamList";

import { HomePageScreen } from "../feature/shared/screens/HomePageScreen";
import { RaportSelectionScreen } from "../feature/raport/screens/RaportSelectionScreen";

const Tab = createBottomTabNavigator<RootParamList>();

export const RootTab = () => {

    return (
        <Tab.Navigator>
            <Tab.Screen name='Home' component={HomePageScreen} options={{
                title: "Strona główna"
            }}/>
            <Tab.Screen name='RaportSelection' component={RaportSelectionScreen} options={{
                title: "Raport"
            }} />
        </Tab.Navigator>
    );
};