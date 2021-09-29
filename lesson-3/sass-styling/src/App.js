import Sidebar from "./components/Sidebar";
import Main from "./components/Main";

import "./stylesheet/main.scss";

const App = () => {
  return (
    <div className="app">
      <Sidebar />
      <Main />
    </div>
  );
};

export default App;
