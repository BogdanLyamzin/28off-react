import { BrowserRouter as Router } from "react-router-dom";
import {Provider} from "react-redux";

import Navbar from "./client/Navbar";
import Routes from "./Routes";

import store from "./redux/store"

import "./App.css";

function App() {

  return (
    <Provider store={store}>
      <Router>
        <div className="App">
          <Navbar />
          <Routes />
        </div>
      </Router>
    </Provider>
  );
}

export default App;
