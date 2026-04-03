import { DimensionValue, StyleSheet, View } from "react-native";
import { ColorsTheme, CommonStyle, ContainerStyle } from "../../utils/BaseStyle";
import { PageHeader } from "../atoms/PageHeader";
import { SimpleTable } from "../molecules/SimpleTable";
import { CardGroup } from "../atoms/CardGroup";
import { ButtonGroup } from "../atoms/ButtonGroup";
import { SimpleButton } from "../atoms/SimpleButton";

type Rows = {
    id: string,
    name: string,
    quantity: string
}

export type RaportSheetTemplateType = {
    header: string,
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

export const RaportSheetTemplate = ({ header, tableData, addItemFn }: RaportSheetTemplateType) => {
    const modelStyle = StyleSheet.create({
        actionHolder: {
            paddingBottom: 15,
            paddingTop: 5
        }
    });

    return (
        <View style={ContainerStyle.InnerContainerStyle}>
            <PageHeader>{header}</PageHeader>
            <View style={CommonStyle.FlexContainer}>
                <SimpleTable columns={tableData.columns} rows={tableData.rows}
                onRowDoublePress={tableData.onPressFn} />
            </View>
            <View style={modelStyle.actionHolder}>
                <CardGroup title="Akcje">
                    <ButtonGroup>
                        <SimpleButton color={ColorsTheme.PrimaryColor} title="Dodaj wpis"
                        onPressFn={addItemFn} />
                    </ButtonGroup>
                </CardGroup>
            </View>
        </View>
    );
};