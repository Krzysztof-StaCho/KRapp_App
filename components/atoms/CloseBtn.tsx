import { AntDesign } from "@expo/vector-icons";
import { ColorValue, Pressable, StyleSheet } from "react-native";

type CloseBtnProps = {
    onPressFn: () => void,
    color: ColorValue,
    size: number
};

const CloseBtn = ({ onPressFn, color, size }: CloseBtnProps) => {
    const modelStyle = StyleSheet.create({
    });

    return (
        <Pressable onPress={onPressFn} android_ripple={{ color: color, foreground: true }}>
            <AntDesign name="close" size={size} color={color} />
        </Pressable>
    );
};

export default CloseBtn;