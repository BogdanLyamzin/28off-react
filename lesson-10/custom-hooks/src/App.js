import LoginForm from './client/LoginForm';
import RegisterForm from './client/RegisterForm';
import Tabs from "./client/Tabs";

import './App.css';

import {tabItems} from "./tabItems"

function App() {
  return (
    <div className="App">
      <Tabs items={tabItems} />
      {/* <LoginForm />
      <RegisterForm /> */}
    </div>
  );
}

export default App;
