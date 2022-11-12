import "./App.css";
import Avatar from "react-avatar";
import ThirdFloor from "./components/ThirdFloor";
import SecondFloor from "./components/SecondFloor";
// import DataFetch from "./DataFetch";

function App() {
  return (
    <div className="App">
      <header className="App__Header">
        <Avatar
          className="avatar"
          githubHandle="victorokwong35"
          size={40}
          round="100px"
        />
      </header>

      <div className="select__Room--container">
        {/* <h3>Select a room</h3>
        <p>
          Select a room for the available options below to complete your
          application
        </p>
        <ThirdFloor />
        <br />
        <SecondFloor /> */}
        {/* <DataFetch /> */}
      </div>
    </div>
  );
}

export default App;
