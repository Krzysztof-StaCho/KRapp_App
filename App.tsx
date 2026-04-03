import { StatusBar } from 'expo-status-bar';
import { SafeAreaView } from 'react-native-safe-area-context';
import * as SplashScreen from 'expo-splash-screen';
import { useFonts } from 'expo-font';
import { useEffect } from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { ContainerStyle } from './utils/BaseStyle';
import { PageFooter } from './components/atoms/PageFooter';
import { RaportTableScreen } from './feature/raport/RaportTableScreen';
import { RootStackParamList } from './utils/navigation/RootStackParamList';
import { NavigationContainer } from '@react-navigation/native';
import { RaportOverviewScreen } from './feature/raport/RaportOverviewScreen';

export default function App() {
  SplashScreen.preventAutoHideAsync();

  const [loaded, error] = useFonts({
    Bangers: require("./assets/fonts/Bangers.ttf"),
    Macondo: require("./assets/fonts/Macondo.ttf"),
    Zalando: require("./assets/fonts/Zalando.ttf")
  });

  useEffect(() => {
    if (loaded || error) {
      SplashScreen.hideAsync();
    }
  }, [loaded, error]);

  const Stack = createNativeStackNavigator<RootStackParamList>();

  return (
    <NavigationContainer>
      <SafeAreaView style={ContainerStyle.OuterContainerStyle}>
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          <Stack.Screen name='RaportOverview' component={RaportOverviewScreen} />
          <Stack.Screen name='RaportRTable' component={RaportTableScreen} />
        </Stack.Navigator>
        <PageFooter />
        <StatusBar style="auto" />
      </SafeAreaView>
    </NavigationContainer>
  );
}
