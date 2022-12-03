import React from "react";
import TopTheme from '../utils/TopTheme.png'
import BottomTheme from '../utils/BottomTheme.png'
import useMediaQuery from '@mui/material/useMediaQuery';
import background from '../utils/background.png'
import Wheel from "../components/spinner";
const GamePage = () => {
    const matches = useMediaQuery('(min-width:1100px)');
    const matchesMobile = useMediaQuery('(max-width:500px)');
    return (
        
            matches ?
            <div style={{ width: "100vw", height: "100vh", position: "absolute", top: "0", left: "0", backgroundColor: "#C6EFC8" }} >
            <img alt="img" src={TopTheme} style={{ width: "100vw", height: "80vh" }} />
            <img alt="img" src={BottomTheme} style={{ width: "100vw", height: "80vh", position: "absolute", bottom: "0", left: "0" }} />
               <Wheel/>

        </div>
            :!matchesMobile?
            <>
            <img alt="img" src={background} style={{ width: "100vw", height: "100vh",position: "absolute", top: "0", left: "0" }} />
            <div style={{ width: "50vw", height: "100vh", position: "absolute", top: "0", left: "0", backgroundColor: "#C6EFC8" }} >
            <img alt="img" src={TopTheme} style={{ width: "100%", height: "40vh" }} />
            <img alt="img" src={BottomTheme} style={{ width: "100%", height: "40vh", position: "absolute", bottom: "0", left: "0" }} />
            <Wheel/>
            </div>
        
        </>
        :
        <div style={{ width: "100vw", height: "100vh", position: "absolute", top: "0", left: "0", backgroundColor: "#C6EFC8" }} >
        <img alt="img" src={TopTheme} style={{ width: "100vw", height: "80vh" }} />
        <img alt="img" src={BottomTheme} style={{ width: "100vw", height: "80vh", position: "absolute", bottom: "0", left: "0" }} />
        <Wheel/>

        </div>
    

       

    )
}

export default GamePage