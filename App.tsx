import { StatusBar } from 'expo-status-bar';
import { SafeAreaView } from 'react-native-safe-area-context';

import { ColorsTheme, ContainerStyle } from './utils/BaseStyle';
import { CardShelf } from './components/molecules/CardShelf';
import { ScrollView, View } from 'react-native';
import { PageHeader } from './components/atoms/PageHeader';
import { PageFooter } from './components/atoms/PageFooter';

export default function App() {
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
