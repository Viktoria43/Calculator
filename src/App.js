import './Calculator.css';
import MyButton from './myButton';
import Input from './Input';
import Header from './Header';


export default function MyApp() {
    return (
        <div className="Calculator">
            <div>
                <Header/>
            </div>
            <div className="input-and-button">
                <div className="my-input">
                    <Input/>
                    <MyButton/>
                    </div>

            </div>
        </div>
    );
}