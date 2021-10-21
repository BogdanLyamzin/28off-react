import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";

import Navbar from "./client/Navbar";
import Routes from "./Routes";

import {store, persistor} from "./redux/store";

import "./App.css";

function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
          <Router>
            <div className="App">
              <Navbar />
              <Routes />
            </div>
          </Router>
        </PersistGate>
      </Provider>
  );
}

export default App;
