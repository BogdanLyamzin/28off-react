import ReverseButton from './shared/components/ReverseButton';
import LoginForm from './client/LoginForm';
import RegisterForm from './client/RegisterForm';
import PostList from './client/PostList';

import './App.css';

function App() {
  return (
    <div className="App">
      <PostList />
      {/* <RegisterForm /> */}
      {/* <LoginForm /> */}
     {/* <ReverseButton firstText="Click me" secondText="Eat me" /> */}
    </div>
  );
}

export default App;
