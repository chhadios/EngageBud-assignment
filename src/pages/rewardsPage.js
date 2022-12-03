import React from "react";
import TopTheme from '../utils/TopTheme.png'
import BottomTheme from '../utils/BottomTheme.png'
import well from '../utils/well.png'
import useMediaQuery from '@mui/material/useMediaQuery';
import background from '../utils/background.png'
import Rewards from "../components/rewards/reward";


const RewardsPage = () => {
    const matches = useMediaQuery('(min-width:1100px)');
    const matchesTablet = useMediaQuery('(min-width:800px)');
    const matchesMobile = useMediaQuery('(max-width:500px)');
    return (
        
            matches ?
            <div style={{ width: "100vw", height: "100vh", position: "absolute", top: "0", left: "0", backgroundColor: "#C6EFC8" }} >
            <img alt="img" src={TopTheme} style={{ width: "100vw", height: "80vh" }} />
            <img alt="img" src={BottomTheme} style={{ width: "100vw", height: "80vh", position: "absolute", bottom: "0", left: "0" }} />
            <img alt="img" src={well} style={{width: "400px", height: "400px", position: "fixed", bottom: "20%", left: "22%" }}/>
            <Rewards/>
        </div>
            :!matchesMobile?
            <>
            <img alt="img" src={background} style={{ width: "100vw", height: "100vh",position: "absolute", top: "0", left: "0" }} />
            <div style={{ width: "50vw", height: "100vh", position: "absolute", top: "0", left: "0", backgroundColor: "#C6EFC8" }} >
            <img alt="img" src={TopTheme} style={{ width: "100%", height: "40vh" }} />
            <img alt="img" src={BottomTheme} style={{ width: "100%", height: "40vh", position: "absolute", bottom: "0", left: "0" }} />
            <img alt="img" src={well} style={{ width:matchesTablet? "300px":"60%", height: "300px", position: "absolute", bottom:matchesTablet? "28%":"80%", left: matchesTablet? "-150px":"20%" }} />
            <Rewards/>
            </div>
        </>
        :
        <div style={{ width: "100vw", height: "100vh", position: "absolute", top: "0", left: "0", backgroundColor: "#C6EFC8" }} >
        <img alt="img" src={TopTheme} style={{ width: "100vw", height: "80vh" }} />
        <img alt="img" src={BottomTheme} style={{ width: "100vw", height: "80vh", position: "absolute", bottom: "0", left: "0" }} />
        <img alt="img" src={well} style={{width: "60%", height: "300px", position: "fixed", bottom: "80%", left: "20%" }}/>
        <Rewards/>
        </div>
    )
}

export default RewardsPage