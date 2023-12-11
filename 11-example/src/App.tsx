import { useState } from "react";
import "./App.scss";

const dataTypes = ["pessimistic", "neutral", "optimistic"] as const;

type DataType = (typeof dataTypes)[number];

const capitalize = (str: string) => {
  return str.charAt(0).toUpperCase() + str.slice(1);
};

function App() {
  const [selected, setSelected] = useState<DataType>("neutral");
  const inputData = [11008.61, 13230.49, 9615.07];

  const values = [...inputData]
    .sort((a, b) => a - b)
    .map((val, idx) => ({ option: dataTypes[idx], val }));

  const max = values[values.length - 1].val;
  const bars = values.map((item) => {
    return { ...item, percentage: Math.ceil((item.val / max) * 100) };
  });

  return (
    <>
      <p className="text">
        In this chart you can see the simulated investition of your company in
        the next 5 years based on pessimistic, optimistic and neutral analysis.
      </p>
      <div className="chart">
        {bars.map((bar) => (
          <div
            className={`bar ${selected === bar.option ? "active" : ""}`}
            data-label={capitalize(bar.option)}
            style={{ "--bar-h": bar.percentage + "%" }}
            onClick={() => setSelected(bar.option)}
          />
        ))}
      </div>
    </>
  );
}

export default App;
