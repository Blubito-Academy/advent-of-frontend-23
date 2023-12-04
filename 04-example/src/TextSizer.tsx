import { ChangeEvent, useState } from "react";

const minSize = 16;
const maxSize = 28;

export default function TextSizer() {
  const [pageSize, setPageSize] = useState(16);

  const handleChange = (e: ChangeEvent<HTMLInputElement> | undefined) => {
    const newVal = e ? Number(e.target.value) : minSize;

    document.documentElement.style.setProperty(
      "--base-font-size",
      (newVal / minSize).toString()
    );
    setPageSize(newVal);
  };
  return (
    <div className="textSizer">
      <input
        type="range"
        name="cowbell"
        min={minSize}
        max={maxSize}
        value={pageSize}
        step="2"
        onChange={handleChange}
      />

      <span>Base text is {pageSize}px</span>
    </div>
  );
}
