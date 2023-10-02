import './Calculator.css';
import MyButton from './myButton';
import Input from './Input';
import Header from './Header';
import Buttons from "./Buttons";
import './global.css'
import {useState} from "react";

function MyApp() {
    const [value,setValue] = useState("");
    return(
        <div className="Calculator">
            <div>
                <Header/>
            </div>
            <div className="input-and-button">

                    <Input  value={value}/>
                    <MyButton setValue={setValue} />
            </div>
            <div className= "buttons-container">
                <Buttons setValue={setValue} value={value}/>
            </div>
        </div>
    );
}
export default  MyApp;