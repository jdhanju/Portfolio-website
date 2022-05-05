import FadeIn from "react-fade-in/lib/FadeIn";
import Box from "./Components/Box";
import React, { useState } from 'react';
import SafeModel from './Modals/SafeModel';
import BacteriaModel from './Modals/BacteriaModel';
import BonModel from "./Modals/BonModal";

function Projects(){

    const [rainforestModalState, setSafetModalState] = useState(false);
    const [BacteriaModalState, setBacteriatModalState] = useState(false);
    const [BonModalState, setBonModalState] = useState(false);

    const handleSafeClose = () => setSafetModalState(false);
    const handleSafeShow = () => setSafetModalState(true);
    const handleBacteriaClose = () => setBacteriatModalState(false);
    const handleBacteriaShow = () => setBacteriatModalState(true);
    const handleBonClose = () => setBonModalState(false);
    const handleBonShow = () => setBonModalState(true);



    return(
        <div>
            <FadeIn transitionDuration={600}>
                <Box icon={'reVision'}/>
                <br />
                <br />
                <Box modalShow={handleSafeShow} icon={'Safe Restaurants'}/>
                <SafeModel modalShow={rainforestModalState} modalHide={handleSafeClose}/>
                <br />
                <br />
                <Box modalShow={handleBonShow} icon={'Bon Voyage'}/>
                <BonModel modalShow={BonModalState} modalHide={handleBonClose}/>
                <br />
                <br />
                <Box modalShow={handleBacteriaShow} icon={'Bacteria Cell'}/>
                <BacteriaModel modalShow={BacteriaModalState} modalHide={handleBacteriaClose} />
            </FadeIn>
        </div>
    );
}

export default Projects;