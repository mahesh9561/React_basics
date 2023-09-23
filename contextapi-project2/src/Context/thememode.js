import React, { createContext, useContext } from 'react'

export const ThemeContext = createContext({
    themeMode: "light", //Default
    darkTheme: () => { }, //Methods
    lightTheme: () => { },
})

export const ThemeProvider = ThemeContext.Provider

export default function useTheme() { //Hook
    return useContext(ThemeContext)
}