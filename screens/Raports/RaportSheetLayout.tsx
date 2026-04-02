import { DimensionValue, StyleSheet, View } from "react-native";
import { ColorsTheme, CommonStyle, ContainerStyle } from "../../utils/BaseStyle";
import { PageHeader } from "../../components/atoms/PageHeader";
import { SimpleTable } from "../../components/molecules/SimpleTable";
import { CardGroup } from "../../components/atoms/CardGroup";
import { ButtonGroup } from "../../components/atoms/ButtonGroup";
import { SimpleButton } from "../../components/atoms/SimpleButton";

type Rows = {
    id: string,
    name: string,
    quantity: string
};

export const RaportSheetLayout = () => {
    const modelStyle = StyleSheet.create({
        tableHolder: {
            flex: 1
        },
        actionHolder: {
            paddingBottom: 15,
            paddingTop: 5,
        }
    });

    const tableData: { columns: { key: keyof Rows, title: string, width: DimensionValue }[], rows: Rows[] } = {
        columns: [
            { key: "id", title: "Sr. No", width: "15%" },
            { key: "name", title: "Nazwa", width: "55%" },
            { key: "quantity", title: "Ilość", width: "30%" }
        ],
        rows: [
            { id: "1", name: "Kartony pizza 32 cm", quantity: "1 paczka" },
            { id: "2", name: "Kartony pizza 45 cm", quantity: "4 paczka" },
            { id: "3", name: "Pudełka - Burgery Woł.", quantity: "0.9 paczka" }
        ]
    };

    return (
        <View style={ContainerStyle.InnerContainerStyle}>
            <PageHeader>Kierowcy Zamówienie</PageHeader>
            <View style={modelStyle.tableHolder}>
                <SimpleTable columns={tableData.columns} rows={tableData.rows}
                onRowDoublePress={(row) => console.log("double", row)} />
            </View>
            <View style={modelStyle.actionHolder}>
                <CardGroup title="Akcje">
                    <ButtonGroup>
                        <SimpleButton color={ColorsTheme.PrimaryColor} title="Dodaj wpis" />
                    </ButtonGroup>
                </CardGroup>
            </View>
        </View>
    );
};