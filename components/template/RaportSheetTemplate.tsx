import { DimensionValue, StyleSheet, View } from "react-native";
import { CommonStyle, ContainerStyle } from "../../utils/BaseStyle";
import { SimpleTable } from "../molecules/SimpleTable";
import Card from "../atoms/Card";
import ButtonGroup from "../atoms/ButtonGroup";
import { SimpleButton } from "../atoms/SimpleButton";

type Rows = {
    id: number,
    name: string,
    quantity: string
}

export type RaportSheetTemplateType = {
    tableData: {
        columns: {
            key: keyof Rows,
            title: string,
            width: DimensionValue
        }[],
        rows: Rows[],
        onPressFn?: (row: Rows) => void
    },
    addItemFn: () => void
}

export const RaportSheetTemplate = ({ tableData, addItemFn }: RaportSheetTemplateType) => {
    const modelStyle = StyleSheet.create({
        actionHolder: {
            paddingBottom: 15,
            paddingTop: 5
        }
    });

    return (
        <View style={ContainerStyle.InnerContainerStyle}>
            <View style={CommonStyle.FlexContainer}>
                <SimpleTable columns={tableData.columns} rows={tableData.rows}
                onRowDoublePress={tableData.onPressFn} />
            </View>
            <View style={modelStyle.actionHolder}>
                <Card title="Akcje">
                    <ButtonGroup>
                        <SimpleButton title="Dodaj wpis" onPressFn={addItemFn} />
                    </ButtonGroup>
                </Card>
            </View>
        </View>
    );
};