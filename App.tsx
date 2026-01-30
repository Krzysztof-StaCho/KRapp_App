import { StatusBar } from 'expo-status-bar';
import { SafeAreaView } from 'react-native-safe-area-context';
import { ColorsTheme } from './constants/BaseStyle';
import { PressableCard } from './components/molecules/PressableCard';

export default function App() {
  return (
    <SafeAreaView style={{flexDirection: "row", gap: 10, paddingHorizontal: 30}}>
      <PressableCard color={ColorsTheme.PrimaryColor} title='Raporty' />
      <PressableCard color={ColorsTheme.SecondaryColor} title='Czas Pracy' />
      <PressableCard color={ColorsTheme.BodyColor} title='Panel Admina' />
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}
