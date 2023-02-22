import { ActionType,createReducer,deprecated } from "typesafe-actions";
const {createStandardAction} = deprecated;

//액션타입
const INCREASE = "counter/INCREASE" as const;  
const DECREASE = "counter/DECREASE" as const;

//액션생성함수 , return {type:INCREASE , payload:off}
// 액션객체에 타입속성만 있는경우
//액션객체에 대한 타입
export const increase = createStandardAction(INCREASE)();
export const decrease = createStandardAction(DECREASE)();

const actions = {increase,decrease}
type CounterAction = ActionType<typeof actions> //ActionType을 사용하여 모든 액션 객체들의 타입을 지정
//상태에 대한 타입
type CounterState = {count:number}
//초기 상태값
const initialState:CounterState = {count:0}

//리듀사 (state와 action타입 필요)
const counter = createReducer<CounterState,CounterAction>(initialState,{
    [INCREASE]: state=>({count: state.count+1}),
    [DECREASE]: state=>({count: state.count-1}),
})
