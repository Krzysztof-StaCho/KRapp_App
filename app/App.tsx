import { Badge } from '@/components/atoms/badge';
import { Typography } from '@/theme/typography';
import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function App() {
    return (
        <NavigationContainer>
            <SafeAreaView>
                <View style={{flexDirection: "row", gap: 5, justifyContent: "space-around"}}>
                    <Text style={Typography['H1']}>Preview Title</Text>
                    <Badge color={{background: "#AF7C4D", text: "#FFF"}}>Tested</Badge>
                </View>
                <Text style={Typography['Body']}>Sample body text. Not long but enough to check if works just fine.</Text>
                <StatusBar style='light' />
            </SafeAreaView>
        </NavigationContainer>
    );
};