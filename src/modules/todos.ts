//액션타입
const ADD_TODO = "todos/ADD_TODO" as const;
const TOGGLE_TODO = "todos/TOGGLE_TODO" as const;
const REMOVE_TODO = "todos/REMOVE_TODO" as const;

let nextLevel = 1 ; //새로운 항목 추가할때 사용할 id값
//액션생성함수
export const addTodo = (text:string) =>({ type: ADD_TODO,payload:{id:nextLevel++,text}})
export const removeTodo = (id:number)=>({type:REMOVE_TODO,payload:id})
export const toggleTodo = (id:number)=>({type:TOGGLE_TODO,payload:id})

//(action타입)
// ReturnType<typeof 함수> 특정함수의 리턴타입을 추론
type TodoAction = ReturnType<typeof addTodo>|ReturnType<typeof removeTodo>|ReturnType<typeof toggleTodo>

//상태에서 사용할 할일 항목의 타입정의
export type Todo = {
    id:number;
    text:string;
    isDone:boolean;
}
//(state타입)
export type TodoState = Todo [];
//초기상태 선언
const initialState:TodoState = [];
// 리듀서
function todos(state:TodoState=initialState,action:TodoAction){
    switch(action.type){
        case ADD_TODO:
            return [
                ...state,
                {id:action.payload.id,text:action.payload.text,isDone:false}
            ]
        case TOGGLE_TODO:
            // 이전상태 배열을 순환하며 배열요소의 id값과 action.payload 
            // 값이 일치하는지? 일치하면 요소의 isDone을 반전해서 리턴
            // 일치하지 않으면 배열요소 그대로 리턴
            return state.map(todo=> todo.id === action.payload ? {...todo,isDone:!todo.isDone}:todo)
        case REMOVE_TODO:
            return state.filter(todo=> todo.id !== action.payload)
        default:
            return state
    }
}

export default todos