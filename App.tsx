import { StatusBar } from 'expo-status-bar';
import { SafeAreaView } from 'react-native-safe-area-context';
import * as SplashScreen from 'expo-splash-screen';

import { ContainerStyle } from './utils/BaseStyle';
import { useFonts } from 'expo-font';
import { useEffect } from 'react';
import { ItemSelectionLayout } from './screens/Raports/ItemSelectionLayout';
import { PageFooter } from './components/atoms/PageFooter';

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
      <ItemSelectionLayout />
      <PageFooter />
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}
