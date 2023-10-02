
import './buttons-container.css';
import './number.css';
import './symbol.css';
const buttons = [7,8,9,"%",4,5,6,"-",1,2,3,"X",".",0,"/","="]
export default function Buttons() {

    return (

        <div className="buttons-container">
            {buttons.map((button,index) => (
                <button key={index} className={`my-button ${typeof button === "number" ? "number" : "symbol"}`} >{button}</button>
            ))}
        </div>


);
}
