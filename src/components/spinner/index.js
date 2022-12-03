import React, {useState } from 'react'
import spinweel from '../../utils/spinweel.png'
import pointer from '../../utils/pointer.png'
import './styles/styles.css'
import { keyframes } from '@emotion/react'
import styled from '@emotion/styled'
import { useNavigate } from "react-router-dom";
import useSound from 'use-sound';
import audio from '../../utils/audio.mp3'
const animationScale = (toV) => keyframes`
from{
    rotate: 0deg;
}
to{
    rotate:${toV}deg;
}
`


const Wheel = () => {
    const navigate = useNavigate();
    const [start, setStart] = useState(false);
    const [toValue, setTovalue] = useState(5000);
    const [play] = useSound(audio);
    const handleSpin = () => {
        const min = 0;
        const max = 5;
        const angle=[60,120,180,240,300,360,]
        const rewards=["HOT CHOCLATE FREE WITH TEA",
        "Free 50g tea on purchase of Rs. 500",
        " Buy 2 Effervescent tablets & get 1 free",
        "FREE COFFEE MUG  ON PURCHASE WORTH 1000+",
        "BUY 1 GET 1 FREE",
        "30% SITEWIDE OFF"]
        const V = Math.floor(Math.random() * (max - min) ) + min;
        console.log(angle[V]);
        setTovalue(angle[V]+4320);
        setStart(true);
        play();
        setTimeout(function(){navigate(`/reward/${rewards[V]}`)}, 5400);

    }
    return (
        <>
            <div className='GameContainer'>
                <div className='wheelContainer'>
                    <Box src={spinweel} animation={start ? () => animationScale(toValue) : null} ></Box>
                    <img alt="img" src={pointer} className="spinnerpointer" ></img>
                </div>
                <button className='SpinButton' onClick={() => handleSpin()}>Spin</button>
            </div>
        </>
    )


}
export default Wheel;
const Box = styled.img`
    width: 100%;
    height: 100%; 
    animation: ${(props) => props.animation} 5.4s infinite;
    animation-duration: 5.4s;
    animation-timing-function: cubic-bezier(0.48, 0, 0.01, 1.0);
    
`