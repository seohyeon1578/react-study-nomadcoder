# Redux-101

## Vanilla-Redux
+ redux: 상태(state)관리 라이브러리

```
import { createStore } from "redux";
countStore = createStore() // store: state를 넣을 수 있는 공간
```

+ reducer: state를 관리 또는 변경하는 함수, state를 가공해서 리턴해줌

```
const reducer = (count = 0) => {
  return count
}

countStore = createStore(reducer)
```

+ getState: reducer에서 리턴해준 state를 받아오는 함수

```
 countStore.getState()
```

+ action: reducer에서 state를 관리하거나 가공할때 필요한 함수
+ dispatch: 오브젝트를 리턴해 reducer에 넘기는 함수

```
const reducer = (count = 0, action) => {
  switch(action.type){
    case "ADD":
      return count + 1
    default:
      return count
  }
}

countStore.dispatch({ type: "ADD" })
```

+ subscribe: store안에 state의 변화를 감지하여 함수를 호출하는 함수

```
countStore.subscribe(function)
```

+ Provider: store안에 여러 state들과 여러 함수들을 다른 컴포넌트에게 공유 할 수 있도록 해주는 함수

```
// index.js
import { Provider } from "react-redux"

<Provider store={store}>
  <App/>
<Provider/>
```

+ connect: Provider함수로부터 공유 된 state들과 함수를 컴포넌트에서 연결하기 위해 사용하는 함수
* 두개의 인자를 받는데 첫번째는 state, 두번째는 dispatch이다

```
import { connect } from "react-redux"

const mapStateToProps = (state) => {
  return { toDos: state}
}

const Home = ({ toDos }) => {
  ...
  )}
}
export default connect(mapStateToProps)(Home);
```

## Redux Toolkit

+ Redux Toolkit: 코드를 최적화 시키는 라이브러리
```
 yarn add @reduxjs/toolkit
```

+ createAction: action을 dispatch할때 넘기는 action의 코드를 최적화 시키는 함수
+ createReducer: reducer함수를 최적화 시키는 함수

```
const ADD = "ADD";
const DELETE = "DELETE";

addToDo = (text) => {
  return {
    type: add,
    text
  }
}

deleteToDo = (id) => {
  return {
    type: DELETE,
    id: parseInt(id)
  }
}

const reducer = (state = [], action) => {
  switch (action.type) {
    case addToDo.type:
      return [{ text: action.payload, id: Date.now() }, ...state]
    case deleteToDo.type:
      return state.filter(toDo => toDo.id !== action.payload)
     default:
      return state
  }
}
```
이 코드를
```
const addToDo = createAction("ADD")
const deleteToDo = createAction("DELETE")

const reducer = createReducer([], {
  [addToDo]: (state, action) => {
    state.push({ text: action.payload, id: Date.now() })
  },
  [deleteToDo]: (state, action) => state.filter(toDo => toDo.id !== action.payload)
})
```

+ createSlice: action과 reducer 최적화 시키는 함수

```
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
```
