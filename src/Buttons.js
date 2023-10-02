
import './buttons-container.css';
import './number.css';
import './symbol.css';
import {Input} from './Input';
import button from "bootstrap/js/src/button";
import {useState} from "react";
import {inpuButton} from './inputButton.js';


export default function Buttons(props) {



    return (

        <div className="buttons-container">
            <button onClick={()=>{props.setValue(props.value + 7)}} className="my-button number">
                7
            </button>


            <button onClick={()=>{props.setValue(props.value + 8)}} className="my-button number">
                8
            </button>
            <button onClick={()=>{props.setValue(props.value + 9)}} className="my-button number">
                9
            </button>
            <button  onClick={()=>{props.setValue(props.value+"%")}} className="my-button symbol">
                %
            </button>
            <button onClick={()=>{props.setValue(props.value+4)}}   className="my-button number">
                4
            </button>
            <button onClick={()=>{props.setValue(props.value+5)}}   className="my-button number">
                5
            </button>
            <button onClick={()=>{props.setValue(props.value+6)}}   className="my-button number">
                6
            </button>
            <button  onClick={()=>{props.setValue(props.value+"-")}} className="my-button symbol">
                -
            </button>
            <button onClick={()=>{props.setValue(props.value+1)}} className="my-button number">
                1
            </button>
            <button  onClick={()=>{props.setValue(props.value+2)}} className="my-button number">
                2
            </button>
            <button onClick={()=>props.setValue(props.value+3)}   className="my-button number">
                3
            </button>
            <button onClick={()=>{props.setValue(props.value+"*")}}   className="my-button symbol">
                X
            </button>
            <button  onClick={()=>{props.setValue("+")}} className="my-button symbol">
                +
            </button>
            <button onClick={()=>{props.setValue(props.value+0)}}  className="my-button number">
                0
            </button>
            <button   className="my-button symbol">
                /
            </button>
            <button   className="my-button symbol">
                =
            </button>
        </div>


    );
}
