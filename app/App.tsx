import { BorderedButton } from '@/components/atoms/button/borderedButton';
import { Typography } from '@/theme/typography';
import { AntDesign } from '@expo/vector-icons';
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
                <BorderedButton variant='primary' text='I am button' iconName='area_chart' />
                <StatusBar style='light' />
            </SafeAreaView>
        </NavigationContainer>
    );
};