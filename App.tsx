import { StatusBar } from 'expo-status-bar';
import { SafeAreaView } from 'react-native-safe-area-context';
import { ColorsTheme, CommonStyle, ContainerStyle } from './constants/BaseStyle';
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
            { color: ColorsTheme.PrimaryColor, title: "Raporty" },
            { color: ColorsTheme.SecondaryColor, title: "Czas Pracy" },
            { color: ColorsTheme.BodyColor, title: "Panel Admina" }]} />
          <CardShelf cardObj={[
            { color: ColorsTheme.PrimaryColor, title: "Raporty" },
            { color: ColorsTheme.SecondaryColor, title: "Czas Pracy" },
            { color: ColorsTheme.BodyColor, title: "Panel Admina" }]} />
          <CardShelf cardObj={[
            { color: ColorsTheme.PrimaryColor, title: "Raporty" },
            { color: ColorsTheme.SecondaryColor, title: "Czas Pracy" },
            { color: ColorsTheme.BodyColor, title: "Panel Admina" }]} />
        </ScrollView>
        <PageFooter />
      </View>
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}
