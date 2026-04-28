import { Theme } from "@/types/theme.types";
import { createContext, ReactNode, useContext } from "react";
import { DefaultTheme } from "./theme";

type ThemeProviderType = {
    theme: Theme,
    children: ReactNode
};

const ThemeContext = createContext<Theme>(DefaultTheme);

export const ThemeProvider = ({ theme, children }: ThemeProviderType) => {
    return (
        <ThemeContext.Provider value={theme}>
            {children}
        </ThemeContext.Provider>
    );
};

export const useAppTheme = () => {
    const context = useContext(ThemeContext);

    if (!context) {
        return DefaultTheme;
    }

    return context;
};