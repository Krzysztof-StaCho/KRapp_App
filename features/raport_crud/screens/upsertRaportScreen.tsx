import { RaportParamList } from "@/app/navigation/paramList";
import { validateHandlers } from "@/hooks/useInput";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { Alert } from "react-native";
import {
  PageProps,
  UpsertRaportTemplate,
} from "../components/template/upsertRaportTemplate";
import { useInventory } from "../hooks/useInventory";

type Props = NativeStackScreenProps<RaportParamList, "RaportRUpsert">;

export const UpsertRaportScreen = ({ navigation, route }: Props) => {
  const { raportId } = route.params;
  const { state, addSchema, updateSchema, removeSchema } = useInventory();
  const selectedRaport = raportId ? state.schemas[raportId] : undefined;

  const confirmFormHandler = (title: string) => {
    if (raportId) {
      if (!selectedRaport) return;
      updateSchema(raportId, { ...selectedRaport, title });
    } else {
      addSchema({
        title: title,
        storageType: "local",
      });
    }
    navigation.goBack();
  };

  const deleteHandler = () => {
    if (raportId === undefined) return;

    Alert.alert(
      `Czy na pewno chcesz usunąć ${selectedRaport?.title}`,
      "Stracisz dane bezpowrotnie. Włącznie z historią.",
      [
        { text: "Cofnij", style: "cancel" },
        {
          text: "Potwierdź",
          style: "destructive",
          onPress: () => {
            removeSchema(raportId);
            navigation.goBack();
          },
        },
      ],
      { cancelable: true },
    );
  };

  const screenData: PageProps = {
    pageInfo: {
      pageTitle: selectedRaport ? "Edytuj raport" : "Dodaj raport",
      type: selectedRaport ? "edit" : "create",
    },
    handlers: {
      closeFn: () => navigation.goBack(),
      confirmFn: confirmFormHandler,
      deleteFn: selectedRaport ? deleteHandler : undefined,
    },
    initData: selectedRaport,
    validations: {
      title: [validateHandlers.required("Nazwa")],
    },
  };

  return <UpsertRaportTemplate {...screenData} />;
};
