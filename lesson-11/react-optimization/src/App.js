import ToDoList from "./client/ToDoList";
import Navbar from "./client/Navbar"
import Footer from "./client/Footer";

import './App.css';

import LangProvider from "./context";

function App() {

  return (
      <LangProvider>
        <div className="App">
          <Navbar/>
          <ToDoList />
          <Footer />
        </div>
      </LangProvider>
  );
}

export default App;
