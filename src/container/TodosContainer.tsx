import React from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import Todoinsert from '../components/Todoinsert';
import TodoList from '../components/TodoList';
import { rootState } from '../modules';
import { addTodo, removeTodo, toggleTodo } from '../modules/todos';

const TodosContainer = () => {
    const todos = useSelector((state:rootState)=>state.todos);
    const dispatch = useDispatch()

    const onToggle = (id:number)=>{
        dispatch(toggleTodo(id));
    }
    const onInsert = (text:string)=>{
        dispatch(addTodo(text))
    }
    const onRemove = (id:number)=>{
        dispatch(removeTodo(id))
    }
    return (
        <div>
            <Todoinsert onInsert={onInsert}/>
            <TodoList todos={todos} onToggle={onToggle} onRemove={onRemove}/>
        </div>
    );
};

export default TodosContainer;