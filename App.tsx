import { StatusBar } from 'expo-status-bar';
import { SafeAreaView } from 'react-native-safe-area-context';
import * as SplashScreen from 'expo-splash-screen';
import { useFonts } from 'expo-font';
import { useEffect } from 'react';

import { ContainerStyle } from './utils/BaseStyle';
import { PageFooter } from './components/atoms/PageFooter';
import { RaportTableScreen } from './feature/raport/RaportTableScreen';

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

  return (
    <SafeAreaView style={ContainerStyle.OuterContainerStyle}>
      <RaportTableScreen />
      <PageFooter />
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}
