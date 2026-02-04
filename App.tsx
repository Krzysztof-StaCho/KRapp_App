import { StatusBar } from 'expo-status-bar';
import { SafeAreaView } from 'react-native-safe-area-context';
import * as SplashScreen from 'expo-splash-screen';

import { ColorsTheme, ContainerStyle } from './utils/BaseStyle';
import { CardShelf } from './components/molecules/CardShelf';
import { ScrollView, View } from 'react-native';
import { PageHeader } from './components/atoms/PageHeader';
import { PageFooter } from './components/atoms/PageFooter';
import { useFonts } from 'expo-font';
import { useEffect } from 'react';

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
      <View style={ContainerStyle.InnerContainerStyle}>
        <PageHeader title='Strona główna' />
        <ScrollView style={{ backgroundColor: ColorsTheme.LightColor }}>
          <CardShelf cardObj={[
            { title: "Raporty", iconProp: { color: ColorsTheme.PrimaryColor, iconName: "area-chart" }},
            { title: "Czas Pracy", iconProp: { color: ColorsTheme.SecondaryColor, iconName: "bar-chart" }},
            { title: "Konfiguracja", iconProp: { color: ColorsTheme.BodyColor, iconName: "setting" }}]} />
        </ScrollView>
        <PageFooter />
      </View>
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}
