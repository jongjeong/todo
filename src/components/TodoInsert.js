import React, { useState } from "react";
import { MdAddCircle } from "react-icons/md";
import "./TodoInsert.css";

// App.js파일에서 넘겨준 onInsertToggle, onInsertTodo를 받아서 사용할 수 있음
const TodoInsert = ({ onInsertToggle, onInsertTodo }) => {
    const [value, setValue] = useState("");

    // 변화가 일어나면 setValue 함수에 e.tartget.value를 넣어주는 함수
    // onChange 함수는 input이 변경될 때마다 실행 된다
    const onChange = e => {
        // tartget 오타 시 입력 안됨
        setValue(e.target.value)
    };

    // submit 버튼 클릭 시 새로고침이 된다. form 형식의 속성임 기본으로 button 타입이 submit으로 되어있고
    // 버튼을 실행하면 form을 서버에 제출하도록 설정되어 있기 때문 
    const onSubmit = (e) => {
        /**
         * preventDefault란? 
         * a 태그나 submit 태그는 누르게 되면 href 를 통해 이동하거나 , 창이 새로고침하여 실행됩니다.
         * preventDefault 를 통해 이러한 새고고침 동작을 막아줌
         */
        e.preventDefault();
        // 입력한 text값을 onInsertTodo에 넣어줌
        onInsertTodo(value);
        // setValue함수를 이용하여 값을 빈 문자열로 초기화 시켜줌
        setValue("");
        // onInsertToggle()를 실행시켜 토글창을 닫음
        onInsertToggle();

    } 

    return (
        <div>
            <div className="background" onClick={onInsertToggle}></div>
            <form onSubmit={onSubmit}>
                <input 
                // input 태그에 사용하여 적용된 placeholder의 값을 변경하거나 가져올 수 있다
                placeholder="please type"
                value={value}
                onChange={onChange}></input>
                <button type="submit">
                    <MdAddCircle/>
                </button>
            </form> 
        </div>
    );
};

export default TodoInsert;