import { ActionType,createReducer,deprecated } from "typesafe-actions";

const {createStandardAction} = deprecated;
//액션타입


//action.type이 string으로 추론되지않고 값자체로 실제 문자열값으로 추론되도록
//as const 븥여준다.

//typesafe-actions 적용전
// const INCREASE = "counter/INCREASE" as const;  
// const DECREASE = "counter/DECREASE" as const;
//typesafe-actions 적용후
const INCREASE = "counter/INCREASE" as const;  
const DECREASE = "counter/DECREASE" as const;

//액션생성함수 , return {type:INCREASE , payload:off}

//typesafe-actions 적용전
// export const increase = ()=>({type:INCREASE})
// export const decrease = ()=>({type:DECREASE})
//typesafe-actions 적용후
// 액션객체에 타입속성만 있는경우
export const increase = createStandardAction(INCREASE)();
export const decrease = createStandardAction(DECREASE)();
//액션객체에 대한 타입

//적용전
// type CounterAction = ReturnType<typeof increase> | ReturnType<typeof decrease> //인크리스나 디크리스 함수가 반환하는 타입을 타입으로 지정함
const actions = {increase,decrease}
type CounterAction = ActionType<typeof actions> //ActionType을 사용하여 모든 액션 객체들의 타입을 지정
//상태에 대한 타입
type CounterState = {count:number}
//초기 상태값
const initialState:CounterState = {count:0}
//리듀사 (state와 action타입 필요)
// function counter(state:CounterState=initialState,action:CounterAction){
//     switch(action.type){
//         case INCREASE:
//             return {count: state.count+1} 
//         case DECREASE:
//             return {count: state.count-1}
//         default:
//             return state
//     }
// }

const counter = createReducer<CounterState,CounterAction>(initialState,{
    [INCREASE]: state=>({count: state.count+1}),
    [DECREASE]: state=>({count: state.count-1}),
})

// const counter = createReducer<CounterState,CounterAction>(initialState)
// .handleAction(INCREASE)

export default counter