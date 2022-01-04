import Box from "./Components/Box";
import RainforestModal from './Modals/rainforestModel'
import React, { useState } from 'react';


function Experience(){
    const [rainforestModalState, setRainforestModalState] = useState(false);

    const handleRfClose = () => setRainforestModalState(false);
    const handleRfShow = () => setRainforestModalState(true);

    return(
        <div>
            <Box modalShow = {handleRfShow}/>
            <RainforestModal modalShow={rainforestModalState} modalHide = {handleRfClose}/>
        </div>
    );
}

export default Experience;