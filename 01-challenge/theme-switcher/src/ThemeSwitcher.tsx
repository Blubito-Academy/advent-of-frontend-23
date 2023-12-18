import "./App.css";

const ThemeSwitcher = () => {
  const handleThemeSwitch = () => {
    const storedTheme = localStorage.getItem("data-theme");
    if (!storedTheme) {
      localStorage.setItem("data-theme", "santa");
      document.documentElement.setAttribute("data-theme", "santa");
    } else {
      localStorage.removeItem("data-theme");
      document.documentElement.removeAttribute("data-theme");
    }
  };

  return (
    <div className="theme-switcher" onClick={() => handleThemeSwitch()}>
      Theme switch
    </div>
  );
};

export default ThemeSwitcher;
