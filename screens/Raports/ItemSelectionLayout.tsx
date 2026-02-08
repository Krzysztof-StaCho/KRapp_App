import { ScrollView, StyleSheet, View } from "react-native";
import { ColorsTheme, ContainerStyle } from "../../utils/BaseStyle";
import { PageHeader } from "../../components/atoms/PageHeader";
import { SelectItem } from "../../components/atoms/SelectItem";

export const ItemSelectionLayout = () => {
    const modelStyle = StyleSheet.create({
        scrollView: {
            backgroundColor: ColorsTheme.LightColor,
            paddingHorizontal: 5
        },
        scrollContent: {
            paddingVertical: 10,
            gap: 10
        }
    });

    return (
        <View style={ContainerStyle.InnerContainerStyle}>
            <PageHeader>Wybierz raport</PageHeader>
            <ScrollView style={modelStyle.scrollView} contentContainerStyle={modelStyle.scrollContent}>
                <SelectItem color={ColorsTheme.PrimaryColor}>Kierowcy Zamowienie</SelectItem>
                <SelectItem color={ColorsTheme.PrimaryColor}>Szafka</SelectItem>
                <SelectItem color={ColorsTheme.PrimaryColor}>Napoje</SelectItem>
            </ScrollView>
        </View>
    );
};