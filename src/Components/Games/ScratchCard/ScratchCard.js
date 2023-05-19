import React from "react";
import "./ScratchCard.css";
import ScratchCard from "react-scratchcard-v2";
import sc from "../../../Images/card.jpg";
import background from '../../../Images/gold.avif';
import backIcon from '../../../Images/left-arrow.png';
import { useNavigate } from 'react-router-dom';


const { useState } = React;
export default function App() {
  const navigate = useNavigate();
  const [isScratched, setIsScratched] = useState(false);
  const handleScratchComplete = () => {
    setIsScratched(true);
  };

  const settings = {
    width: 350,
    height: 450,
    image: sc,
    finishPercent: 70,
    onComplete: () => handleScratchComplete()
  };

  const prizeArray = [1, 5, 10, 100, 50, 1000, 25, 0];
  const randomIndex = Math.floor(Math.random() * prizeArray.length);
  const randomValue = prizeArray[randomIndex];
  return (
    <div className="scratchCardContainer">
      <div className="backBtn">
        <img src={backIcon} onClick={() => navigate('/games')} />
      </div>
      <ScratchCard {...settings} className="scratchCard">
        {/* <img src={fw} className="scratchCard-reward"></img> */}
        {isScratched && <div className="reward_container" style={{ backgroundImage: `url(${background})` }}>
          <div className='reward'>
            <div className="reward_text">You Won</div>
            <div className="reward_value">{randomValue}$</div>
          </div>
        </div>}
      </ScratchCard>
    </div>
  );
}
