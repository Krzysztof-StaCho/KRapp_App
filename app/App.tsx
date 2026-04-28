import { BorderedButton } from '@/components/atoms/button/borderedButton';
import { ButtonGroup } from '@/components/atoms/button/buttonGroup';
import { Card } from '@/components/molecules/card';
import { FormWrapper } from '@/components/molecules/formWrapper';
import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function App() {
    return (
        <NavigationContainer>
            <SafeAreaView style={{flex: 1}}>
                <FormWrapper title='Test Form' type='test' closeFn={() => {}} confirmFn={() => {}}
                    deleteFn={() => {}}>
                    <Card title='Action'>
                        <ButtonGroup variant='space-evenly'>
                            <BorderedButton variant='primary' text='I am button' iconName='area_chart' />
                            <BorderedButton variant='danger' text='I am also button' iconName='area_chart' />
                        </ButtonGroup>
                    </Card>
                </FormWrapper>
                <StatusBar style='light' />
            </SafeAreaView>
        </NavigationContainer>
    );
};