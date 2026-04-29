import { BorderedButton } from '@/components/atoms/button/borderedButton';
import { ButtonGroup } from '@/components/atoms/button/buttonGroup';
import { SimpleButton } from '@/components/atoms/button/simpleButton';
import { CardShelf } from '@/components/atoms/card/cardShelft';
import { InnerContainer } from '@/components/atoms/container/innerContainer';
import { PageFooter } from '@/components/atoms/pageFooter';
import { Card } from '@/components/molecules/card';
import { FormWrapper } from '@/components/molecules/formWrapper';
import { PressCard } from '@/components/molecules/pressCard';
import { SelectItem } from '@/components/molecules/selectItem';
import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import { Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function App() {
    return (
        <NavigationContainer>
            <SafeAreaView style={{flex: 1}}>
                <InnerContainer>
                    <FormWrapper title='Test Form' type='test' closeFn={() => {}} confirmFn={() => {}}
                    deleteFn={() => {}}>
                        <Card title='Action'>
                            <ButtonGroup variant='space-evenly'>
                                <BorderedButton variant='primary' text='I am button' iconName='area_chart' />
                                <BorderedButton variant='danger' text='I am also button' iconName='area_chart' />
                            </ButtonGroup>
                        </Card>
                        <SimpleButton text='Tested button' />
                        <SelectItem>Test Select Item</SelectItem>
                        <CardShelf>
                            <PressCard iconName='more'>
                                <PressCard.Title>Raport</PressCard.Title>
                                <Text>123</Text>
                            </PressCard>
                            <PressCard iconName='area_chart'>
                                <PressCard.Title>Czas pracy</PressCard.Title>
                            </PressCard>
                            <PressCard iconName='arrow_right'>
                                <PressCard.Title>Ustawienia</PressCard.Title>
                            </PressCard>
                        </CardShelf>
                    </FormWrapper>
                </InnerContainer>
                <PageFooter />
                <StatusBar style='light' />
            </SafeAreaView>
        </NavigationContainer>
    );
};