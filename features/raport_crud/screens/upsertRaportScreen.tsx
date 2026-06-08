import { RaportParamList } from "@/app/navigation/paramList";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { useInventory } from "../hooks/useInventory";
import { Alert } from "react-native";
import { PageProps, UpsertRaportTemplate } from "../components/template/upsertRaportTemplate";
import { validateHandlers } from "@/hooks/useInput";
import { createSchemaId } from "@/entities/schema/model/schema.types";

type Props = NativeStackScreenProps<RaportParamList, 'RaportRUpsert'>;

export const UpsertRaportScreen = ({ navigation, route }: Props) => {
    const { raportId } = route.params;
    const { state, addSchema, updateSchemaTitle, removeSchema } = useInventory();
    const selectedRaport = raportId ? state.schemas[raportId] : undefined;

    const confirmFormHandler = (title: string) => {
        if (raportId) {
            updateSchemaTitle(raportId, title);
        } else {
            addSchema({
                id: createSchemaId(),
                title: title,
                storageType: "local",
                updatedAt: new Date(),
            });
        }
        navigation.goBack();
    };

    const deleteHandler = () => {
        if (raportId === undefined)
            return;

        Alert.alert(`Czy na pewno chcesz usunąć ${selectedRaport?.title}`,
            "Stracisz dane bezpowrotnie. Włącznie z historią.",
            [
                { text: 'Cofnij', style: 'cancel' },
                {
                    text: 'Potwierdź',
                    style: 'destructive',
                    onPress: () => {
                        removeSchema(raportId);
                        navigation.goBack();
                    }
                }
            ],
            { cancelable: true }
        );
    };

    const screenData: PageProps = {
        pageInfo: {
            pageTitle: selectedRaport ? "Edytuj raport" : "Dodaj raport",
            type: selectedRaport ? "edit" : "create"
        },
        handlers: {
            closeFn: () => navigation.goBack(),
            confirmFn: confirmFormHandler,
            deleteFn: selectedRaport ? deleteHandler : undefined
        },
        initData: selectedRaport,
        validations: {
            title: [ validateHandlers.required("Nazwa") ]
        }
    };

    return (
        <UpsertRaportTemplate {...screenData} />
    );
};