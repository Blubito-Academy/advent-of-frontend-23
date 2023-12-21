import "./App.scss";
import CalCell from "./components/CalCell/CalCell";
import elements from "./advent.json";
import logo from "./assets/logo.webp";

function App() {
  const today = new Date();
  const dayObj = {
    year: today.getFullYear(),
    month: today.getMonth() + 1,
    day: today.getDate(),
  };
  // const dayObj = {year: 2023, month: 12, day: 7}; // use to test current day of year
  const isAdventActive = (dateObj: { month: number; year: number; day: number}) => dateObj.month === 12 && dateObj.year === 2023;
  const openChallenge = elements.findIndex((el) => el.date === dayObj.day && isAdventActive(dayObj));

  const isCellDisabled = (date: number): boolean => {
    if (!isAdventActive(dayObj)) return true;
    if (date !== dayObj.day) return true;
    return false;
  };

  return (
    <>
      <div className="container">
        <div className="title">
          <img src={logo} alt="logo" />
          <h1>Advent of Frontend</h1>
        </div>
        <div className="calendar">
          {elements.map((el, index) => {
            return (
              <CalCell
                key={index}
                day={el.date}
                url={el.url}
                icon={el.iconSrc}
                isDisabled={isCellDisabled(el.date)}
                hasChallenge={!!el.challenge}
                isOpened={index < openChallenge}
                title={el.title}
              />
            );
          })}
        </div>
      </div>
    </>
  );
}

export default App;
