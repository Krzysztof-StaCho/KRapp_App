import { BorderedButton } from '@/components/atoms/button/borderedButton';
import { ButtonGroup } from '@/components/atoms/button/buttonGroup';
import { Card } from '@/components/molecules/card';
import { PressCard } from '@/components/molecules/pressCard';
import { Typography } from '@/theme/typography';
import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import { Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function App() {
    return (
        <NavigationContainer>
            <SafeAreaView style={{flex: 1}}>
                <PressCard iconName='area_chart'>
                    <PressCard.Title>Preview Title</PressCard.Title>
                    <Text style={Typography['Body']}>Sample body text. Not long but enough to check if works just fine.</Text>
                    <Card title='Action'>
                        <ButtonGroup variant='space-evenly'>
                            <BorderedButton variant='primary' text='I am button' iconName='area_chart' />
                            <BorderedButton variant='danger' text='I am also button' iconName='area_chart' />
                        </ButtonGroup>
                    </Card>
                    <PressCard.Footer>Test footer</PressCard.Footer>
                </PressCard>
                <StatusBar style='light' />
            </SafeAreaView>
        </NavigationContainer>
    );
};