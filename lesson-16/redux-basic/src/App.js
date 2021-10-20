import { BrowserRouter as Router } from "react-router-dom";

import Navbar from "./client/Navbar";
import Routes from "./Routes";

import "./App.css";

function App() {
  return (
      <Router>
        <div className="App">
          <Navbar />
          <Routes />
        </div>
      </Router>
  );
}

export default App;
