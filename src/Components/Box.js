import rf from '../images/rf.png'
import '../index.css';
import React from 'react';



function Box(props){

    return(
    <div>
        <div className="box" onClick={() => props.modalShow()}>
            <img src={rf} className="img-box"/>
        </div>

    </div>
    );
}

export default Box;