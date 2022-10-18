import React from "react";
import {MdCheckBox, MdCheckBoxOutlineBlank} from "react-icons/md"
import "./TodoItem.css"

// const TodoItem = ({todo}) => {
//     const {text} = todo;
//     return (
//         <div>{text}</div>
//     )
// }

const TodoItem = ({todo, onCheckToggle}) => {
    const {id, text, checked} = todo;
    return (
        <div className="TodoItem">
            <div className={`content ${checked ? "checked" : ""}`}>
                {checked ? (
                    <MdCheckBox
                    // MdCheckBox클릭 시 onCheckToggle()함수를 실행시킴 todo에 있는 id를 인자로 넣어서
                      onClick={()=>{
                        onCheckToggle(id);
                      }}
                    />
                    ) : (
                      <MdCheckBoxOutlineBlank 
                        onClick={()=>{
                          onCheckToggle(id);
                        }}
                    />
                    )}
                <div className="text">{text}</div>
            </div>
        </div>
    )
}

export default TodoItem;