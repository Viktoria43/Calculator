
import  './input.css';
import './input-and-button.css';
import {useState} from "react";
import {Buttons, InputButton} from './Buttons';
import {myButton} from './myButton';








export default function Input(props) {


    return (
        <input className="input input-and-button" type="text" readOnly value={props.value}>


        </input>
    );
}
