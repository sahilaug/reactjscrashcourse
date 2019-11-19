import React, { useState } from 'react';

const useThemeState = () => {
    const [theme, setTheme] = useState('dark')

    const toggleTheme = () => {
        const newTheme = theme === "dark" ? "light" : "dark";
        setTheme(newTheme);
    };

    return [theme, toggleTheme]
}

export default useThemeState;