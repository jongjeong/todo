import React from "react";
import "./Template.css"

const Template = ({ children, todosLength }) => {
    return (
        <div className="Template">
            <div className="title">오늘의 할 일 ({todosLength})</div>
            <div>{children}</div>
            
        </div>
    );
};

export default Template;