import { createContext, useContext, useState } from "react";

type Theme = "light" | "dark";

type ThemeContextType = {
  theme: Theme;
  toggleTheme: () => void;
};

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

function useThemeContext() {
  const themeContext = useContext(ThemeContext);

  if (!themeContext)
    throw new Error(
      "useThemeContext must be used within ThemeContext.Provider"
    );
  return themeContext;
}

function Button() {
  const { theme, toggleTheme } = useThemeContext();

  return (
    <button
      onClick={toggleTheme}
      className={`ms-3 border border-secondary-subtle btn btn-${theme}`}
    >
      Current theme: {theme} (click to change)
    </button>
  );
}

export default function ContextDemo() {
  const [theme, setTheme] = useState<Theme>("light");

  function toggleTheme() {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  }

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <Button />
    </ThemeContext.Provider>
  );
}
