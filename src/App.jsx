import { createContext, useState } from "react";
import Page from "./Page";

export const ThemeContext = createContext("light");

function App() {
  const themes = {
    light: "light",
    dark: "dark",
  };

  const [theme, setTheme] = useState(themes.light);

  const changeTheme = () => {
    setTheme(theme === themes.light ? themes.dark : themes.light);
  };

  return (
    <ThemeContext.Provider value={theme}>
      <Page changeTheme={changeTheme} />
    </ThemeContext.Provider>
  );
}

export default App;
