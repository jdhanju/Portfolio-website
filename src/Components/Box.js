import '../index.css';
import React from 'react';



function Box(props){
    console.log(props.icon);

    return(
    <div>
        <div className="box" onClick={() => props.modalShow()}>
            {props.icon.includes('.png')?
            <img src={props.icon} className="img-box"/>:
            <h1 className="img-box-text">{props.icon}</h1>
            }
        </div>

    </div>
    );
}

export default Box;