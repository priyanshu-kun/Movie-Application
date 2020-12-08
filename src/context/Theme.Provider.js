import React, { useState, createContext } from "react";

export const ThemeContext = createContext();

export function ThemeProvider(props) {
    const [open, setOpen] = useState(false);

    const setTheme = () => {
        setOpen(!open);
    }

    return (
        <ThemeContext.Provider value={{ open: open, setTheme: setTheme }}>
            {props.children}
        </ThemeContext.Provider>
    )
}