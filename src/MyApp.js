import './Calculator.css';
import MyButton from './myButton';
import Input from './Input';
import Header from './Header';
import Buttons from "./Buttons";
import './global.css'

 function MyApp(props) {
    return(
        <div className="Calculator">
            <div>
                <Header/>
            </div>
            <div className="input-and-button">

                    <Input/>
                    <MyButton />
            </div>
            <div className= "buttons-container">
                <Buttons/>
            </div>
        </div>
    );
}
export default  MyApp;