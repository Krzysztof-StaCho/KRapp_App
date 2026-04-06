import { createContext, ReactNode, useContext } from "react";
import { Theme } from "./Theme.types";

type ThemeProviderType = {
    theme: Theme,
    children?: ReactNode
};

const DefaultTheme: Theme = {
    primary: "#AAA",
    secondary: "#555",
    border: "#222",
    body: "#FFF",
    light: "#CCC",
    dark: "#000",
    text: "#000"
};

const ThemeContext = createContext<Theme | null>(null);

export const ThemeProvider = ({ theme, children }: ThemeProviderType) => {
    return (
        <ThemeContext.Provider value={theme}>
            { children }
        </ThemeContext.Provider>
    );
};

export const useTheme = () => {
    const context = useContext(ThemeContext);
    if (!context) {
        return DefaultTheme;
    }
    return context;
};