import { useEffect, useState } from "react";

const FontSlider = () => {
  const [fontSize, setFontSize] = useState<number>(16);

  console.log("current font size is: ", fontSize);
  useEffect(() => {
    document.documentElement.style.setProperty("--font-size", `${fontSize}px`);
  }, [fontSize]);

  return (
    <div>
      <input
        type="range"
        min={16}
        max={28}
        value={fontSize}
        onChange={(ev) => setFontSize(Number(ev.target.value))}
      />
    </div>
  );
};

export default FontSlider;
