import React from "react";

const ToDoList = (props) => {
  return (
    <>
      <div className="item-style">
        {/* <input type="checkbox" className='checkbox  '/> */}
        <i
          className="fa-solid fa-circle-xmark"
          style={{ marginRight: "15px" }}
          onClick={() => {
            props.onSelect(props.id);
          }}
        ></i>
        <li>{props.text}</li>
      </div>
    </>
  );
};

export default ToDoList;
