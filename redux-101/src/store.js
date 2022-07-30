// import { createStore } from "redux";

// const ADD = "ADD";
// const DELETE = "DELETE";

// const addToDo = (text) => {
//   return {
//     type: ADD,
//     text
//   }
// }

// const deleteToDo = (id) => {
//   return {
//     type: DELETE,
//     id: parseInt(id)
//   }
// }

// const reducer = (state = [], action) => {
//   switch(action.type) {
//     case ADD:
//       const newState = { text: action.text, id: Date.now() };
//       return [newState, ...state];
//     case DELETE:
//       const cleaned = state.filter(toDo => toDo.id !== action.id);
//       return cleaned;
//     default:
//       return state;
//   }
// }

// const store = createStore(reducer);

// export const actionCreators = {
//   addToDo,
//   deleteToDo
// }

// export default store;

// redux toolkit
import { createStore } from "redux";
import { configureStore, createAction, createReducer, createSlice } from "@reduxjs/toolkit";

// const addToDo = createAction("ADD")
// const deleteToDo = createAction("DELETE");

// //state mutate 가능 (immer.js와 함께 작동해서)
// const reducer = createReducer([], {
//   [addToDo]: (state, action) => {
//     state.push({ text: action.payload, id: Date.now() });   // mutate state
//   },
//   [deleteToDo]: (state, action) => 
//   state.filter(toDo => toDo.id !== action.payload)    //new state return
// })

const toDos = createSlice({
  name: 'toDosReducer',
  initialState: [],
  reducers: {
    add: (state, action) => {
      state.push({ text: action.payload, id: Date.now() })
    },
    remove: (state, action) =>  state.filter(toDo => toDo.id !== action.payload) 
  }
})

const store = configureStore({reducer: toDos.reducer});

export const { add, remove } = toDos.actions;

// export const actionCreators = {
//   addToDo,
//   deleteToDo
// }

export default store;