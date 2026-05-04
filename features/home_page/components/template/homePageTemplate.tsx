import { InnerContainer } from "@/components/atoms/container/innerContainer";
import { ScrollView } from "react-native";
import { HomeCard } from "../../types/homeCard.types";
import { CardShelf } from "@/components/atoms/card/cardShelft";
import { PressCard } from "@/components/molecules/pressCard";

export type PageProps = {
    rows: HomeCard[][]
};

export const HomePageTemplate = ({rows}: PageProps) => {    return (
        <InnerContainer>
            <ScrollView>
                {rows.map((row, index) => (
                    <CardShelf key={index}>
                        {row.map((item, index) => (
                            <PressCard key={index} onPressFn={item.onPressFn} iconName={item.iconName}
                            color={{ icon: item.color.text, bg: item.color.background }}>
                                <PressCard.Title>{item.title}</PressCard.Title>
                            </PressCard>
                        ))}
                    </CardShelf>
                ))}
            </ScrollView>
        </InnerContainer>
    );
};