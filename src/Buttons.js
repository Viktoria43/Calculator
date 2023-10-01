import React from "react";
import './buttons-container.css';
import './number.css';
import './symbol.css';
export default function Buttons() {
    return (
        <div className="buttons-container">

            <button className="my-button number">
                7
            </button>

            <button  className="my-button number">
                8
            </button>
            <button className="my-button number">
                9
            </button>
            <button   className="my-button symbol">
                %
            </button>
            <button   className="my-button number">
                4
            </button>
            <button   className="my-button number">
                5
            </button>
            <button   className="my-button number">
                6
            </button>
            <button   className="my-button symbol">
                -
            </button>
            <button   className="my-button number">
                1
            </button>
            <button   className="my-button number">
                2
            </button>
            <button   className="my-button number">
                3
            </button>
            <button   className="my-button symbol">
                X
            </button>
            <button   className="my-button symbol">
                .
            </button>
            <button   className="my-button number">
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
