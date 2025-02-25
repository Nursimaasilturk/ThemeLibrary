import React, { createContext, useContext, useState, ReactNode } from "react";
import { Theme } from "../types/theme";
import { lightTheme } from "../styles/theme";


interface ThemeContextProps{
	theme:Theme,
	setTheme:(theme:Theme) => void
}

const ThemeContext = createContext<ThemeContextProps | undefined>(undefined);

export function useTheme() {
	const context = useContext(ThemeContext);
	if (!context) throw new Error("useTheme must be used within a ThemeProvider");
	return context;
} 

export const ThemeProvider = ({ children }: { children: ReactNode }) => {
	const [theme,setTheme] = useState<Theme>(lightTheme);

	return(
		<ThemeContext.Provider value={{theme,setTheme}}>
			{children}
		</ThemeContext.Provider>
	)
}
