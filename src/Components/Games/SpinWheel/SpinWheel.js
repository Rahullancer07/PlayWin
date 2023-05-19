import React, { useRef, useState } from 'react';
import './SpinWheel.css';
import backIcon from '../../../Images/left-arrow.png';
import { useNavigate } from 'react-router-dom';

const SpinWheel = () => {
    const navigate = useNavigate();
    const [rotation, setRotation] = useState(0);
    const reward = useRef(500);
    const [rotated, setRotated] = useState(false);

    const handleRotate = () => {
        setRotation((prevAngleRotate) => prevAngleRotate + Math.random() * 3600);
        setTimeout(() => {
            setRotated(true);
        }, 5000);
    }
    let value = rotation % 360;
    if (value >= 337.5 && value < 22.5) {
        reward.current = 500;
    }
    if (value >= 22.5 && value < 67.5) {
        reward.current = 100
    }
    if (value >= 67.5 && value < 112.5) {
        reward.current = 50;
    }
    if (value >= 112.5 && value < 157.5) {
        reward.current = 200;
    }
    if (value >= 157.5 && value < 202.5) {
        reward.current = 5;
    }
    if (value >= 202.5 && value < 247.5) {
        reward.current = 1;
    }
    if (value >= 247.5 && value < 292.5) {
        reward.current = 25;
    }
    if (value >= 292.5 && value < 337.5) {
        reward.current = 1000;
    }

    return (
        <div className='spinwheel-page'>
            <div className="backBtn">
                <img src={backIcon} onClick={() => navigate('/games')} />
            </div>
            {!rotated && <div className='container'>
                <div className='spinBtn' onClick={handleRotate}>Spin</div>
                <div className='wheel' style={{ transform: `rotate(${rotation}deg)` }}>
                    <div className='number' style={{ background: "#db7093", transform: "rotate(calc(45deg*1))" }}>
                        <span>500</span>
                    </div>
                    <div className='number' style={{ background: "#20b2aa", transform: "rotate(calc(45deg*2))" }}>
                        <span>1000</span>
                    </div>
                    <div className='number' style={{ background: "#4169e1", transform: "rotate(calc(45deg*3))" }}>
                        <span>25</span>
                    </div>
                    <div className='number' style={{ background: "#daa520", transform: "rotate(calc(45deg*4))" }}>
                        <span>1</span>
                    </div>
                    <div className='number' style={{ background: "#ff340f", transform: "rotate(calc(45deg*5))" }}>
                        <span>5</span>
                    </div>
                    <div className='number' style={{ background: "#ff7f50", transform: "rotate(calc(45deg*6))" }}>
                        <span>200</span>
                    </div>
                    <div className='number' style={{ background: "#3cb371", transform: "rotate(calc(45deg*7))" }}>
                        <span>50</span>
                    </div>
                    <div className='number' style={{ background: "#d63e92", transform: "rotate(calc(45deg*8))" }}>
                        <span>100</span>
                    </div>
                </div>
            </div>
            }
            {rotated && <div className='reward'> Your Reward : {reward.current}$</div>}
        </div>

    )
}

export default SpinWheel;