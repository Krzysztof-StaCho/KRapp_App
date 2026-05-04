import { OuterContainer } from '@/components/atoms/container/outerContainer';
import { PageFooter } from '@/components/atoms/pageFooter';
import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import { RootStack } from './navigation/rootStack';

export default function App() {
    return (
        <NavigationContainer>
            <OuterContainer>
                <RootStack />
                <PageFooter />
                <StatusBar style='light' />
            </OuterContainer>
        </NavigationContainer>
    );
};