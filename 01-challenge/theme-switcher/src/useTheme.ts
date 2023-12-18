import { useEffect } from "react";

export function useTheme() {
  const themeInLocalStorage = localStorage.getItem("data-theme");
  // prevent flashing???
  useEffect(() => {
    if (themeInLocalStorage) {
      document.documentElement.setAttribute("data-theme", themeInLocalStorage);
    }
  }, []);
}
