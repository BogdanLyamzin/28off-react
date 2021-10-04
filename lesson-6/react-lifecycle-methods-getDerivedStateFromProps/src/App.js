import ToDoList from "./client/ToDoList";

import "./App.css";

import { toDoListItems } from "./data";

function App() {
  return (
    <div className="App">
      <ToDoList initialItems={toDoListItems} />
    </div>
  );
}

export default App;
