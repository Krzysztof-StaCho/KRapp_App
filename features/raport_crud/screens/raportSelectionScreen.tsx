import { Button, Text, View } from "react-native";
import { useInventory } from "../hooks/useInventory";
import { Unit } from "@/entities/product/model/product.types";

export const RaportSelectionScreen = () => {
    const { state, addProduct } = useInventory();

    return (
        <View>
        {Object.values(state.products).map(product => (
            <Text key={product.id}>{product.name}</Text>
        ))}

        <Button
            title="Add Product"
            onPress={() =>
            addProduct({
                id: Math.random().toString(),
                name: "New Item",
                unit: Unit.PIECE,
            })
            }
        />
        </View>
    );
};