import { DimensionValue, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { ColorsTheme, FontFamilies } from "../../utils/BaseStyle";
import { useRef } from "react";
import { FlatList } from "react-native";

type Column<T> = {
    key: keyof T;
    title: string;
    width?: DimensionValue;
}

export type SimpleTableType<T> = {
    columns: Column<T>[],
    rows: T[],
    onRowDoublePress?: (row: T) => void
};

export const SimpleTable = <T extends { id: string }>({columns, rows, onRowDoublePress}: SimpleTableType<T>) => {
    const modelStyle = StyleSheet.create({
        tableContainer: {
            margin: 15,
            flex: 1
        },
        tableHead: {
            flexDirection: "row",
            backgroundColor: ColorsTheme.PrimaryColor,
            padding: 10
        },
        tableBody: {
            flexDirection: "row",
            padding: 10,
            borderBottomWidth: 1,
            borderBottomColor: ColorsTheme.SecondaryColor
        },
        tableCaption: {
            color: ColorsTheme.SecondaryColor,
            fontWeight: "bold"
        }
    });

    // Double Click Handle
    const lastPress = useRef(0);
    const handlePress = (row: T) => {
        const now = Date.now();
        if (now - lastPress.current < 300)
            onRowDoublePress?.(row);
        lastPress.current = now;
    }

    // Mapping Item in FlatList
    const renderItem = ({ item }: { item: T }) => (
        <TouchableOpacity key={item.id} onPress={() => handlePress(item)}>
            <View style={modelStyle.tableBody}>
                { columns.map(col => (
                    <Text key={String(col.key)} numberOfLines={2} style={{
                        width: col.width || 100,
                        textAlign: "center"
                    }}>
                        { String(item[col.key]) }
                    </Text>
                )) }
            </View>
        </TouchableOpacity>
    );

    return (
        <View style={modelStyle.tableContainer}>
            { /* Table Head */ }
            <View style={modelStyle.tableHead}>
                { columns.map(col => (
                    <View key={String(col.key)} style={{ width: col.width || 100 }}>
                        <Text style={modelStyle.tableCaption}>
                            {col.title}
                        </Text>
                    </View>
                )) }
            </View>
            { /* Table Body */ }
            <FlatList data={rows} keyExtractor={(item) => item.id} renderItem={renderItem}
            contentContainerStyle={{flexGrow: 1}} />
        </View>
    );
}