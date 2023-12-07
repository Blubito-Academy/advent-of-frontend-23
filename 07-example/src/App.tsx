import "./App.css";
import {
  IconDefinition,
  faCandyCane,
  faGift,
  faMugHot,
  faSleigh,
} from "@fortawesome/free-solid-svg-icons";
import SpeedDial from "./SpeedDial";
import './SpeedDial.scss';

const actions: { icon: IconDefinition; label: string }[] = [
  { icon: faGift, label: "Share a gift" },
  { icon: faSleigh, label: "Ride with Santa" },
  { icon: faCandyCane, label: "East some candy" },
  { icon: faMugHot, label: "Drink hot Cocoa" },
];

function App() {
  return (
    <>
      <h1>Christmas Speed dial Demo</h1>
      <SpeedDial actions={actions} position="bottom right" />
    </>
  );
}

export default App;
