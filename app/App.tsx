import { BorderedButton } from '@/components/atoms/button/borderedButton';
import { ButtonGroup } from '@/components/atoms/button/buttonGroup';
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
                <ButtonGroup variant='space-evenly'>
                    <BorderedButton variant='primary' text='I am button' iconName='area_chart' />
                    <BorderedButton variant='warning' text='I am also button' iconName='area_chart' />
                </ButtonGroup>
                <StatusBar style='light' />
            </SafeAreaView>
        </NavigationContainer>
    );
};