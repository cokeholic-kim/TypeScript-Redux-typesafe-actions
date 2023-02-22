import React from 'react';
import { Todo } from '../modules/todos';

type TodoListProps = {
    todos:Todo[],
    onToggle:(id:number)=>void,
    onRemove:(id:number)=>void,
}
type TodoItemProps = {
    todo:Todo;
    onToggle:(id:number)=>void,
    onRemove:(id:number)=>void,
}
function TodoItem({todo,onToggle,onRemove}:TodoItemProps){
    const onTodoToggle = ()=>{
        onToggle(todo.id)
    }
    const onTodoRemove = ()=>{
        onRemove(todo.id)
    }
    const removeStyle:React.CSSProperties = {
        textDecoration: todo.isDone? "line-through":"none"
    }
    return (
        <li key={todo.id} style={removeStyle}>
            <span onClick={onTodoToggle}>{todo.text}</span><button onClick={onTodoRemove}>삭제</button>
        </li>
    )
}

const TodoList = ({todos,onToggle,onRemove}:TodoListProps) => {
    return (
        <div>
            <ul>
                {todos.map(todo=><TodoItem key={todo.id} todo={todo} onToggle={onToggle} onRemove={onRemove}/>)}
            </ul>
        </div>
    );
};

export default TodoList;