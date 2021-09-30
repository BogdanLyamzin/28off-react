// import ReverseButton from "./components/ReverseButton";
// import ActiveButton from "./components/ActiveButton";
// import MainMenu from "./components/MainMenu";
import ToDoList from "./components/ToDoList";

import "./App.css";

// import { menuItems, toDoListItems } from "./data";

function App() {
  return (
    <div className="App">
      <ToDoList />
      {/* <MainMenu items={menuItems} /> */}
      {/* <ActiveButton /> */}
      {/* <ReverseButton firstText="Click me" secondText="Eat me" /> */}
    </div>
  );
}

export default App;
