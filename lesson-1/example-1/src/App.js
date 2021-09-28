import { createElement } from "react";
// import ReverseButton from "./ReverseButton";
// import Button from "./components/Button";
import UserCard from "./components/UserCard";
function App() {
  // const reverseButtonProps = {
  //   firstText: "Click me",
  //   secondText: "Eat me",
  // };
  const userCard1 = {
    name: "Алекс",
    description: " Первый парень на деревне",
    additionInfo: {
      fraction: "Неформалы",
      father: "Серцеед",
    },
  };
  return (
    /*
     React.createElement('div', null, React.createElement("p", null, "Some text"))
    */
    <div className="main">
      <UserCard name="Влада" />
      <UserCard {...userCard1} />
      {/* <UserCard name="Саша Белый" description="потому что мы бригада" /> */}
      {/* 
      const name = "Алекс";
      const description = "Первый парень на деревне"
      const props = {
        name, 
        description
      }
      <UserCard(props) */}
      {/* <Button /> */}
      {/* <img />
      <label htmlFor="password"></label>
      <input id="password" />
      <div className="bg-image" />
      <p>Some text</p> */}
    </div>
  );
}

export default App;
