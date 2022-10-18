
import React, { useState } from "react";
import { MdAddCircle } from "react-icons/md";
import './App.css';

import Template from "./components/Template";
import TodoInsert from "./components/TodoInsert";
import TodoList from "./components/TodoList";


// 함수 바깥에 만들어주는 이유는 함수가 새로 리렌더링 될 때마다 계속 처음 값으로 돌아가기 때문
const nextId = 4;

// 함수형 컴포넌트
const App = ({childern}) => {

  const [insertToggle, setInsertToggle] = useState(false)

  const [todos, setTodos] = useState([ 
    {
      id: 1,
      text: "할일 1",
      checked: true
    },
    {
      id: 2,
      text: "할일 2",
      checked: false
    },
    {
      id: 3,
      text: "할일 3",
      checked: true
    },


  ]);

  const onInsertToggle = () => {
    setInsertToggle(prev => !prev)
  };

  // submit 버튼을 누르면 value를 배열에 넣어주는 함수
  const onInsertTodo = (text) => {
    if (text === ""){
      return alert("할 일을 입력하세요.")
    } else{
      const todo = {
        id: nextId,
        text,
        checked: false
      }

      /** setTodos를 가지고 todos는 concat 함수를 사용 push 함수를 사용하지 않는 이유는 react문서에도 나와있지만 
       * 변경 되기 전에 값을 기억하고 있어야 되기 때문에 변경되기 전의 값 자체를 변경시키면 안됨!
       * push 함수 사용 시 해당 배열 자체가 변경
       * concat 함수 사용 시 새 배열이 리턴되고 기존 배열은 변형되지 않음
       * 상태 불변성을 지켜주는 것!
       * */
      setTodos(todos => todos.concat(todo))
      nextId++;
    }
  };

  return (

      <Template todosLength={todos.length}>
        <TodoList todos={todos}/>
        <div className="add-todo-button" onClick={onInsertToggle}>
          <MdAddCircle/>
        </div>
        {/* nInsertToggl도 TodoInsert에서 필요하기 때문에 인자로 사용할 수 있도록 넘겨준다  */}
        {/* onInsertTodo 함수를 TodoInsert에 인자로 넘겨줌 -> TodoInsert에서 해당함수를 받아서 쓸 수 있게 됨*/}
        {insertToggle && <TodoInsert 
        onInsertToggle={onInsertToggle} 
        onInsertTodo={onInsertTodo}/>}
      </Template>
      
      

  );
  

};

export default App;