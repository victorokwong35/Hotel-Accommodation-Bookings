import "./App.css";
import Avatar from "react-avatar";
import DataFetchJson from "./DataFetchJson";

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
        <DataFetchJson />
      </div>
    </div>
  );
}

export default App;
