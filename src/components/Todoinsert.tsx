import React,{useState} from 'react';

type TodoInsertProps = {
    onInsert: (text:string)=>void;
}

const Todoinsert = ({onInsert}:TodoInsertProps) => {
    const [inputText, setInputText] = useState(" ")
    const onChange = (e:React.ChangeEvent<HTMLInputElement>) =>{
        setInputText(e.target.value)
    }
    const onClick = ()=>{
        onInsert(inputText);
        setInputText("");
    }
    return (
        <div>
            <input placeholder='할 일을 입력하세요' onChange={onChange} value={inputText}/>
            <button onClick={onClick}>등록</button>
        </div>
    );
};

export default Todoinsert;