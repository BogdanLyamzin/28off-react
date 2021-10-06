import {Component} from "react";

import Button from "./components/Button";

import './App.css';

class EditParagraph extends Component {
  state = {
    edit: false,
    text: "",
    newText: ""
  }

  // static getDerivedStateFromProps(prevProps, nextState){
  //   if(prevProps.text !== nextState.text && nextState.text === ""){
  //     return {
  //       text: prevProps.text
  //     }
  //   }
  // }

  componentDidMount(){
    this.setState({
      text: this.props.text
    })
  }


  startEdit = ()=>{
    this.setState(prevState => {
      return {
        edit: true,
        newText: prevState.text
      }
    })
  }

  endEdit = (type)=> {
    this.setState(prevState => {
      const text = type ? prevState.newText : prevState.text;
      return {
        edit: false,
        text,
        newText: ""
      }
    })
  }

  // finishEdit = ()=> {
  //   this.setState(prevState => {
  //     return {
  //       edit: false,
  //       text: prevState.newText,
  //       newText: ""
  //     }
  //   })
  // }

  // cancelEdit = ()=> {
  //   this.setState({
  //     edit: false,
  //     newText: ""
  //   })
  // }

  handleChange = ({target})=> {
    this.setState({
      newText: target.value
    })
  }

  render(){
    const {edit, text, newText} = this.state;
    const {startEdit, handleChange, endEdit} = this;

    return (
      <div className="App">
        {edit && <input type="text" value={newText} onChange={handleChange} />}
        {!edit && <p>{text}</p>}
        
        <div>
          {!edit && <Button onClick={startEdit} text="Edit" type="primary" className="case-btn" />}
          {edit && (
            <>
            <Button text="Ok" onClick={()=> endEdit(true)} type="success" className="case-btn" />
            <Button text="Cancel" onClick={()=> endEdit(false)}   type="secondary" className="case-btn" />
            </>
          )}
        </div>
  
      </div>
    );
  }
}

export default EditParagraph;
