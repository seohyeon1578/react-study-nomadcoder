import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
// import { actionCreators } from "../store";
import { remove } from "../store";

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    // onBtnClick: () => dispatch(actionCreators.deleteToDo(ownProps.id))
    onBtnClick: () => dispatch(remove(ownProps.id))
  }
}

const ToDo = ({text, onBtnClick, id}) => {
  return (
    <li>
      <Link to={`/${id}`} >
        {text} 
      </Link>
      <button onClick={onBtnClick}>DELETE</button>
    </li>
  )
}

export default connect(null, mapDispatchToProps) (ToDo);