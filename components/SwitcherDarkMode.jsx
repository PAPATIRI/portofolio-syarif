import useDarkmode from "@/hooks/useDarkmode";
import { useState } from "react";
import { DarkModeSwitch } from "react-toggle-dark-mode";

const SwitcherDarkMode = () => {
  const [colorTheme, setTheme] = useDarkmode();
  const [darkMode, setDarkMode] = useState(
    colorTheme === "light" ? true : false
  );

  const toggleDarkMode = (checked) => {
    setTheme(colorTheme);
    setDarkMode(checked);
  };

  return (
    <DarkModeSwitch
      sunColor="#393E46"
      moonColor="#EEEEEE"
      checked={darkMode}
      onChange={toggleDarkMode}
      size={24}
    />
  );
};

export default SwitcherDarkMode;
