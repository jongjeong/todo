import React, { useEffect, useState } from "react";
import { MdAddCircle } from "react-icons/md";

import { TiTrash, TiPencil } from "react-icons/ti";
import "./TodoInsert.css";

// App.js파일에서 넘겨준 onInsertToggle, onInsertTodo를 받아서 사용할 수 있음
const TodoInsert = ({
    onInsertToggle,
    onInsertTodo,
    selectedTodo,
    onRemove,
    onUpdate
}) => {
    // value가 입력한 텍스트 내용
    const [value, setValue] = useState("");

    // 변화가 일어나면 setValue 함수에 e.tartget.value를 넣어주는 함수
    // onChange 함수는 input이 변경될 때마다 실행 된다
    const onChange = e => {
        // tartget 오타 시 입력 아예 안됨
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
        // 입력한 value(text값)을 onInsertTodo에 넣어줌
        onInsertTodo(value);
        // setValue함수를 이용하여 값을 빈 문자열로 초기화 시켜줌
        setValue("");
        // onInsertToggle()를 실행시켜 토글창을 닫음
        onInsertToggle();

    }

    // 이 컴포넌트가 처음 렌더링 되면 어떤 것을 실행하느냐를 처리하는 부분
    useEffect(() => {
        // selectedTodo가 값이 있다면 초기값이 있다는 것이므로 setValue 함수를 사용!
        if (selectedTodo) {
            // 선택된 todo안에
            setValue(selectedTodo.text)
        }
        // 함수의 두번째 인자는 빈 배열을 넣어줌
        // 사용하는 인자들을 의존성을 위해 인자로 받아온 selectedTodo를 다음줄에 넣어준다
    }, [selectedTodo]);



    return (
        <div>
            <div className="background" onClick={onInsertToggle}></div>
            {/* selectedTodo가 있으면 onUpdate(id, text) 없으면 onSubmit */}
            <form onSubmit={selectedTodo ? () => { onUpdate(selectedTodo.id, value) } : onSubmit}>
                <input
                    // input 태그에 사용하여 적용된 placeholder의 값을 변경하거나 가져올 수 있다
                    placeholder="please type"
                    value={value}
                    onChange={onChange}></input>
                {/* selectedTodo가 있을 경우 */}
                {selectedTodo ? (
                    <div className="rewrite">
                        {/* onRemove함수에 인자로 받아온 selectedTodo의 id를 넣어줌 */}
                        {/* 삭제 */}
                        <TiTrash onClick={() => { onRemove(selectedTodo.id) }} />
                        {/* 수정 */}
                        <TiPencil onClick={() => onUpdate(selectedTodo.id, value)}/>
                    </div>
                ) : (
                    <button type="submit">
                        <MdAddCircle />
                    </button>)}
            </form>
        </div>
    );
};

export default TodoInsert;