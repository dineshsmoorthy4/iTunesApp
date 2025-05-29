import React, { createContext, useContext, useState } from 'react';
import { lightTheme } from './lightTheme';
import { darkTheme } from './darkTheme';

const ThemeContext = createContext({
  isDark: false,
  toggleTheme: () => {},
  theme: lightTheme,
});

export const useTheme = () => useContext(ThemeContext);

export const ThemeProvider = ({ children }: any) => {
  const [isDark, setIsDark] = useState(false);
  const toggleTheme = () => setIsDark(prev => !prev);

  const value = {
    isDark,
    toggleTheme,
    theme: isDark ? darkTheme : lightTheme,
  };

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
};
