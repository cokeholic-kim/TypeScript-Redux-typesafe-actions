import React from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import Counter from '../components/Counter';
import { rootState } from '../modules';
import { decrease, increase } from '../modules/counter';

const CounterContainer = () => {
    //상태조회 
    const counter=useSelector((state:rootState) => state.counter.count) //루트리듀서 타입을 리턴받아서 만든 타입을 state에 넣어서 타입을 정해줌
    const dispatch =useDispatch()
    const onIncrease=()=>{
        dispatch(increase())
    }
    const onDecrease=()=>{
        dispatch(decrease())
    }
    return (
        <Counter count={counter} onIncrease={onIncrease} onDecrease={onDecrease}/>
    );
};

export default CounterContainer;