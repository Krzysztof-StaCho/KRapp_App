import { DimensionValue, StyleSheet, Text, TouchableOpacity, View, FlatList } from "react-native";
import { useRef } from "react";
import { useAppTheme } from "@/theme/themeProvider";
import { Typography } from "@/theme/typography";

type Column<T> = {
    key: keyof T;
    title: string;
    width?: DimensionValue;
}

export type SimpleTableType<T> = {
    columns: Column<T>[],
    rows: T[],
    numbered?: boolean
    onRowDoublePress?: (id: string) => void
};

export const SimpleTable = <T extends { id: string }>({columns, rows, numbered = false, onRowDoublePress}: SimpleTableType<T>) => {
    const theme = useAppTheme();

    // Double Click Handle
    const lastPress = useRef(0);
    const lastPressItem = useRef("");
    const handlePress = (id: string) => {
        const now = Date.now();
        if (now - lastPress.current < 300 && lastPressItem.current === id)
            onRowDoublePress?.(id);
        lastPress.current = now;
        lastPressItem.current = id;
    }

    // Mapping Item in FlatList
    const renderItem = ({ item, index }: { item: T, index: number }) => (
        <TouchableOpacity key={item.id} onPress={() => handlePress(item.id)}>
            <View style={[modelStyle.tableBody, { borderBottomColor: theme.border }]}>
                {/* Sr No Row */}
                { numbered && (
                    <Text key="Sr No" numberOfLines={2} style={[Typography.Body, {
                        width: "15%",
                        textAlign: "center"
                    }]}>
                        { index + 1 }
                    </Text>
                ) }
                { columns.map(col => (
                    <Text key={String(col.key)} numberOfLines={2} style={[Typography.Body, {
                        width: col.width || 100,
                        textAlign: "center"
                    }]}>
                        { String(item[col.key]) }
                    </Text>
                )) }
            </View>
        </TouchableOpacity>
    );

    return (
        <View style={modelStyle.tableContainer}>
            { /* Table Head */ }
            <View style={[modelStyle.tableHead, { backgroundColor: theme.primary }]}>
                {/* Sr No Column */}
                { numbered && (
                    <View key="Sr.No" style={{ width: "15%" }}>
                        <Text style={[Typography.BodyBold, modelStyle.tableCaption, { color: theme.primaryText }]}>
                            Sr. No
                        </Text>
                    </View>
                ) }
                { columns.map(col => (
                    <View key={String(col.key)} style={{ width: col.width || 100 }}>
                        <Text style={[Typography.BodyBold, modelStyle.tableCaption, { color: theme.primaryText }]}>
                            {col.title}
                        </Text>
                    </View>
                )) }
            </View>
            { /* Table Body */ }
            <FlatList data={rows} keyExtractor={(item) => item.id.toString()} renderItem={renderItem}
            contentContainerStyle={{flexGrow: 1}} />
        </View>
    );
}

const modelStyle = StyleSheet.create({
        tableContainer: {
            margin: 15,
            flex: 1
        },
        tableHead: {
            flexDirection: "row",
            padding: 10
        },
        tableBody: {
            flexDirection: "row",
            padding: 10,
            borderBottomWidth: 1,
        },
        tableCaption: {
            fontWeight: "bold",
            textAlign: "center"
        }
    });