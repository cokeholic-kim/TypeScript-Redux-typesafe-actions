import { combineReducers } from 'redux';
import counter from './counter'
import todos from './todos'

const rootReducer = combineReducers({counter:counter,todos:todos});

export default rootReducer

//리듀서를 호출하면 상태를 리턴한다// 상태에 타입을 지정할수있음.
//useSelector(state=>state.todos)

/*rootReducer가 실행되면 state리턴함
ReturnType<typeof rootReducer> 특정함수의 리턴 타입을 추론
useSelector(state=>state.todos)
스토어의 상태값의 타입을 추론
*/

export type rootState = ReturnType<typeof rootReducer> // 루트리듀서의 타입을 받아옴