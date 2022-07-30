import React from "react";
import { connect } from "react-redux";
import { useParams } from "react-router-dom";

const mapStateToProps = (state) => {
  return { toDos: state }
}

const Detail = ({toDos, onBtnClick}) => {
  const id = useParams().id;
  const toDo = toDos.find(toDo => toDo.id === parseInt(id));
  
  return (
    <>
      <h1>{toDo?.text}</h1>
      <h5>Created at: {toDo?.id}</h5>
    </>
  )
}

export default connect(mapStateToProps)(Detail);