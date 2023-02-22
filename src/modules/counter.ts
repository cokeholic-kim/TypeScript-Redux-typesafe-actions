import { ActionType,createReducer,deprecated } from "typesafe-actions";
const {createStandardAction} = deprecated;
//액션타입


//action.type이 string으로 추론되지않고 값자체로 실제 문자열값으로 추론되도록
//as const 븥여준다.

//typesafe-actions 적용전
const INCREASE = "counter/INCREASE" as const;  
const DECREASE = "counter/DECREASE" as const;

//액션생성함수 , return {type:INCREASE , payload:off}
export const increase = ()=>({type:INCREASE})
export const decrease = ()=>({type:DECREASE})

type CounterAction = ReturnType<typeof increase> | ReturnType<typeof decrease> //인크리스나 디크리스 함수가 반환하는 타입을 타입으로 지정함
//상태에 대한 타입
type CounterState = {count:number}
//초기 상태값
const initialState:CounterState = {count:0}

//리듀사 (state와 action타입 필요)
function counter(state:CounterState=initialState,action:CounterAction){
    switch(action.type){
        case INCREASE:
            return {count: state.count+1} 
        case DECREASE:
            return {count: state.count-1}
        default:
            return state
    }
}

export default counter