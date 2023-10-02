
import React from "react";
import './my-button.css';
import './input-and-button.css';

export default function MyButton(props) {
    return (
        <div>
        <button onClick={()=>{props.setValue("")}} className="my-button input-and-button"  >
       DEL
        </button>
        </div>
    );
};
