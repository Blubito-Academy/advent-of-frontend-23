import "./App.scss";
import { CountdownTimer } from "./CountdownTimer";

function App() {
  const christmasDay = new Date("2023-12-25T00:00:00");

  return (
    <div className="page">
      <div className="bg clouds"></div>
      <div className="bg snow"></div>

      <h1>Christmas Countdown</h1>
      <CountdownTimer targetDate={christmasDay} />

      <div className="img_container">
        <img
          className="sleigh"
          src="/src/assets/santaclaus.svg"
          alt="Santa's Seligh"
        />
      </div>
    </div>
  );
}

export default App;
