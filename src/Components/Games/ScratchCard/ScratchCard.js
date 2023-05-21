import React, { useState } from "react";
import "./ScratchCard.css";
import ScratchCard from "react-scratchcard-v2";
import sc from "../../../Images/card.jpg";
import background from '../../../Images/gold.avif';
import backIcon from '../../../Images/left-arrow.png';
import { useNavigate } from 'react-router-dom';

const ScratchCardPage = ({ user, setLogUser }) => {
  const navigate = useNavigate();
  const [isScratched, setIsScratched] = useState(false);
  const [reward , setReward] = useState(0);
  const handleScratchComplete = () => {
    setIsScratched(true);
    setReward(randomValue);
    const updateUser = {
      name: user.name,
      email: user.email,
      password: user.password,
      rewards: user.rewards + randomValue
    }
    setLogUser(updateUser);
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
        {isScratched && <div className="reward_container" style={{ backgroundImage: `url(${background})` }}>
          <div className='reward'>
            <div className="reward_text">You Won</div>
            <div className="reward_value">{reward}$</div>
          </div>
        </div>}
      </ScratchCard>
    </div>
  );
}

export default ScratchCardPage;