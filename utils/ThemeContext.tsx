import { createContext, ReactNode, useContext } from "react";
import { DefaultTheme } from "./BaseStyle";
import { Theme } from "./Theme.types";

type ThemeProviderType = {
    theme: Theme,
    children?: ReactNode
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