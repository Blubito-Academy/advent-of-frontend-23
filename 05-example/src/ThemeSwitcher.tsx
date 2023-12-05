import { useState } from "react";
import { Theme } from "./theme";

const ThemeSwitcher = (props: { persistedTheme: Theme }) => {
  const [theme, setTheme] = useState<Theme>(props.persistedTheme);

  const toggleTheme = () => {
    const newTheme = theme === "normal" ? "santa" : "normal";
    if (newTheme === "santa") {
      document.documentElement.setAttribute("data-theme", "santa");
    } else {
      document.documentElement.setAttribute("data-theme", "");
    }
    setTheme(newTheme);
    localStorage.setItem("data-theme", newTheme);
  };


  return (
    <button
      className={`switch ${theme}`}
      onClick={toggleTheme}
    >
      <div className="icon">
        {/* Light SVG */}
        <div className="sun">🎅🏻 </div>

        {/* Dark SVG */}
        <div className="moon">☀️</div>
      </div>
    </button>
  );
};

export default ThemeSwitcher;
