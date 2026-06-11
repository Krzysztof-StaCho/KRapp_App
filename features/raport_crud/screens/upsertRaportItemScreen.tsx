import { RaportParamList } from "@/app/navigation/paramList";
import { Unit } from "@/entities/product/model/product.types";
import { validateHandlers } from "@/hooks/useInput";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { Alert } from "react-native";
import {
  PageProps,
  UpsertRaportItemTemplate,
} from "../components/template/upsertRaportItemTemplate";
import { useInventory } from "../hooks/useInventory";

type Props = NativeStackScreenProps<RaportParamList, "RaportRItemUpsert">;

export const UpsertRaportItemScreen = ({ navigation, route }: Props) => {
  const { raportId, productId } = route.params;
  const inventoryCtx = useInventory();

  const selectedProduct = productId
    ? inventoryCtx.state.products[productId]
    : undefined;

  const confirmFormHandler = (name: string, unit: string) => {
    if (productId) {
      inventoryCtx.updateProduct(productId, {
        schemaId: raportId,
        name: name,
        unit: unit as Unit,
      });
    } else {
      inventoryCtx.addProduct(raportId, {
        name: name,
        unit: unit as Unit,
      });
    }
    navigation.goBack();
  };

  const deleteHandler = () => {
    if (!productId) return;

    Alert.alert(
      `Czy na pewno chcesz usunąć ${selectedProduct?.name}?`,
      "Stracisz dane bezpowrotnie",
      [
        { text: "Cofnij", style: "cancel" },
        {
          text: "Potwierdź",
          style: "destructive",
          onPress: () => {
            inventoryCtx.removeProduct(productId);
            navigation.goBack();
          },
        },
      ],
      { cancelable: true },
    );
  };

  const screenData: PageProps = {
    pageInfo: {
      pageTitle: selectedProduct ? "Edytuj wpis" : "Dodaj wpis",
      type: selectedProduct ? "edit" : "create",
    },
    handlers: {
      closeFn: () => navigation.goBack(),
      deleteFn: selectedProduct ? deleteHandler : undefined,
      confirmFn: confirmFormHandler,
    },
    initData: selectedProduct,
    validations: {
      name: [validateHandlers.required("Nazwa")],
      unit: [validateHandlers.required("Miara")],
    },
  };

  return <UpsertRaportItemTemplate {...screenData} />;
};
