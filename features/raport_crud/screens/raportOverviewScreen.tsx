import { RaportParamList } from "@/app/navigation/paramList";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { useInventory } from "../hooks/useInventory";
import { ErrorMessage } from "@/components/atoms/errorMessage";
import { useEffect } from "react";
import { PageProps, RaportOverviewTemplate } from "../components/template/raportOverviewTemplate";

type Props = NativeStackScreenProps<RaportParamList, 'RaportOverview'>;

export const RaportOverviewScreen = ({ navigation, route }: Props) => {
    const { raportId } = route.params;
    const { state } = useInventory();

    const selectedRaport = state.schemas[raportId];

    useEffect(() => {
        navigation.setOptions({
            title: selectedRaport?.title ?? "Invalid Raport"
        });
    }, [navigation, selectedRaport.title]);

    if (!selectedRaport) {
        return (
            <ErrorMessage>
                Could not find any schema with given ID. Please go back and try again. If error still occurs, consult this with authorized personel.
            </ErrorMessage>
        );
    }

    const screenData: PageProps = {
        handlers: {
            seeMoreRaportFn: () => navigation.navigate("RaportRTable", { raportId: raportId }),
            addRaportItemFn: () => navigation.navigate("RaportRItemUpsert", { raportId: raportId }),
            runRaportFn: () => {},
            correctRaportFn: () => {},
            seeMoreWarningFn: () => {},
            editWarningFn: () => {},
            seeMoreOrderFn: () => {},
            generateOrderFn: () => {}
        }
    };

    return (
        <RaportOverviewTemplate {...screenData} />
    );
};