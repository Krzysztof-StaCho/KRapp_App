import { BorderedButton } from '@/components/atoms/button/borderedButton';
import { ButtonGroup } from '@/components/atoms/button/buttonGroup';
import { CardFooter } from '@/components/atoms/card/cardFooter';
import { CardHeader } from '@/components/atoms/card/cardHeader';
import { CardIcon } from '@/components/atoms/card/cardIcon';
import { Typography } from '@/theme/typography';
import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import { Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function App() {
    return (
        <NavigationContainer>
            <SafeAreaView>
                <CardIcon color={"#142"} borderColor={"#000"} iconName='area_chart' />
                <CardHeader color={"#000"} borderColor={"#142"} centered>Preview Title</CardHeader>
                <Text style={Typography['Body']}>Sample body text. Not long but enough to check if works just fine.</Text>
                <ButtonGroup variant='space-evenly'>
                    <BorderedButton variant='primary' text='I am button' iconName='area_chart' />
                    <BorderedButton variant='warning' text='I am also button' iconName='area_chart' />
                </ButtonGroup>
                <CardFooter color={"#111"}>Test footer</CardFooter>
                <StatusBar style='light' />
            </SafeAreaView>
        </NavigationContainer>
    );
};