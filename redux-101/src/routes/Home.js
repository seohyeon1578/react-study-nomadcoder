import React, { useState } from "react";
import { connect } from "react-redux";
import ToDo from "../components/ToDo";
// import { actionCreators } from "../store";
import { add } from "../store";

const mapStateToProps = (state) => {
  return { toDos: state}
}

const mapDispatchToProps = (dispatch) => {
  return {
    // addToDo: (text) => dispatch(actionCreators.addToDo(text))
    addToDo: (text) => dispatch(add(text))
  }
}

const Home = ({toDos, addToDo}) => {
  const [text, setText] = useState("");

  const onChange = (e) => {
    setText(e.target.value);
  }

  const onSubmit = (e) => {
    e.preventDefault();
    addToDo(text);
    setText("");
  }

  return (
    <>
      <h1>To Do</h1>
      <form onSubmit={onSubmit}>
        <input type="text" value={text} onChange={onChange}/>
        <button>Add</button>
      </form>
      <ul>
        {toDos.map(toDo => ( 
          <ToDo {...toDo} key={toDo.id}/>
        ))}
      </ul>
    </>
  )
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);