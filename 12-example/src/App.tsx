import "./App.css";
import ConfirmPopup from "./components/ConfirmPopup";

function App() {
  return (
    <>
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quia ullam
        tenetur molestias perferendis ducimus nihil cupiditate nesciunt, odio
        vitae excepturi quasi sunt quas ipsam veniam debitis sequi? Cupiditate,
        nulla laudantium!
      </p>

      <ConfirmPopup onAccept={() => window.alert("Good job, soldier!")}>
        <button style={{background:'orange'}}>ola</button>
      </ConfirmPopup>
      <ConfirmPopup onAccept={() => window.alert("Good job, again, soldier!")}>
        <button style={{background:'coral'}}>ola</button>
      </ConfirmPopup>
      <ConfirmPopup onAccept={() => window.alert("Stop it")}>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Blanditiis
          repudiandae hic obcaecati, molestias quaerat, iusto cum aspernatur
          atque tempore error vel, rem nulla quo odit doloribus cupiditate
          mollitia animi? Quos!
        </p>
      </ConfirmPopup>
    </>
  );
}

export default App;
