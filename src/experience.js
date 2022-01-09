import Box from "./Components/Box";
import RainforestModal from './Modals/rainforestModel'
import React, { useState } from 'react';
import FadeIn from "react-fade-in/lib/FadeIn";


function Experience(){
    const [rainforestModalState, setRainforestModalState] = useState(false);

    const handleRfClose = () => setRainforestModalState(false);
    const handleRfShow = () => setRainforestModalState(true);

    return(
        <div>
            <FadeIn transitionDuration={600}>
                <Box modalShow = {handleRfShow}/>
                <RainforestModal modalShow={rainforestModalState} modalHide = {handleRfClose}/>
            </FadeIn>
        </div>
    );
}

export default Experience;