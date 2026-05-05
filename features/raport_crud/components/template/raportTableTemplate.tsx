import { ButtonGroup } from "@/components/atoms/button/buttonGroup";
import { SimpleButton } from "@/components/atoms/button/simpleButton";
import { InnerContainer } from "@/components/atoms/container/innerContainer";
import { Card } from "@/components/molecules/card";
import { SimpleTable } from "@/components/molecules/simpleTable";
import { ProductId, Unit } from "@/entities/product/model/product.types";
import { DimensionValue, View, ViewStyle } from "react-native";

type Rows = {
    id: ProductId,
    name: string,
    unit: Unit
}

export type PageProps = {
    tableData: {
        columns: {
            key: keyof Rows,
            title: string,
            width: DimensionValue
        }[],
        rows: Rows[],
    },
    doubleClickFn?: (id: ProductId) => void,
    addItemFn: () => void,
};

export const RaportTableTemplate = ({tableData, doubleClickFn, addItemFn}: PageProps) => {
    return (
        <InnerContainer>
            <View style={{ flex: 1 }}>
                <SimpleTable columns={tableData.columns} rows={tableData.rows} numbered
                onRowDoublePress={doubleClickFn} />
            </View>
            <View style={style}>
                <Card title="Akcje">
                    <ButtonGroup>
                        <SimpleButton text="Dodaj wpis" onPressFn={addItemFn} />
                    </ButtonGroup>
                </Card>
            </View>
        </InnerContainer>
    );
};

const style: ViewStyle = {
    paddingBottom: 15,
    paddingTop: 5
};