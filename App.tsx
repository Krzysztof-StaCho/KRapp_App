import { StatusBar } from 'expo-status-bar';
import { SafeAreaView } from 'react-native-safe-area-context';

import { ContainerStyle } from './utils/BaseStyle';
import { PageFooter } from './components/atoms/PageFooter';
import { NavigationContainer } from '@react-navigation/native';
import { RootStack } from './navigation/RootStack';

export default function App() {
  return (
    <NavigationContainer>
      <SafeAreaView style={ContainerStyle.OuterContainerStyle}>
        <RootStack />
        <PageFooter />
        <StatusBar style="light" />
      </SafeAreaView>
    </NavigationContainer>
  );
}
