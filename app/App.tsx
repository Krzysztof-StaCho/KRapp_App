import { Typography } from '@/theme/typography';
import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import { Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function App() {
    return (
        <NavigationContainer>
            <SafeAreaView>
                <Text style={Typography['H1']}>Preview Title</Text>
                <Text style={Typography['Body']}>Sample body text. Not long but enough to check if works just fine.</Text>
                <StatusBar style='light' />
            </SafeAreaView>
        </NavigationContainer>
    );
};