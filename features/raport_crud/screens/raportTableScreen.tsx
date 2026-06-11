import { RaportParamList } from "@/app/navigation/paramList";
import { ErrorMessage } from "@/components/atoms/errorMessage";
import { StoreId } from "@/entities/base/storeModel";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { useEffect } from "react";
import {
    PageProps,
    RaportTableTemplate,
} from "../components/template/raportTableTemplate";
import { useInventory } from "../hooks/useInventory";

type Props = NativeStackScreenProps<RaportParamList, "RaportRTable">;

export const RaportTableScreen = ({ navigation, route }: Props) => {
  const { raportId } = route.params;
  const { state } = useInventory();

  const selectedRaport = state.schemas[raportId];

  useEffect(() => {
    navigation.setOptions({
      title: selectedRaport?.title ?? "Invalid Raport",
    });
  }, [navigation, selectedRaport.title]);

  if (!selectedRaport) {
    return (
      <ErrorMessage>
        Could not find any schema with given ID. Please go back and try again.
        If error still occurs, consult this with authorized personel.
      </ErrorMessage>
    );
  }

  const data = Object.values(state.products).filter(
    (prod) => prod.schemaId === selectedRaport.id,
  );

  const screenData: PageProps = {
    tableData: {
      columns: [
        { key: "name", title: "Nazwa", width: "55%" },
        { key: "unit", title: "Ilość", width: "30%" },
      ],
      rows: data,
    },
    doubleClickFn: (id: StoreId) =>
      navigation.navigate("RaportRItemUpsert", { raportId, productId: id }),
    addItemFn: () => navigation.navigate("RaportRItemUpsert", { raportId }),
  };

  return <RaportTableTemplate {...screenData} />;
};
