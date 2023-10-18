
import  './input.css';
import './input-and-button.css';
import {Buttons, InputButton} from './Buttons';


export default function Input(props) {
    return (
        <input className="input input-and-button" type="text" readOnly value={props.value}>
        </input>
    );
}
