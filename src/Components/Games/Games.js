import React from 'react';
import './Games.css';
import scratchCard from '../../Images/card.jpg';
import spinWheel from '../../Images/fw.jpg';
import { useNavigate } from 'react-router-dom';
import Navbar from '../Navbar/Navbar';

const Games = ({user , setLogUser}) => {
    const navigate = useNavigate();
    return (
        <div className='games'>
            <Navbar user={user} setLogUser={setLogUser}/>
            <div className='games-container'>
                <div className='game-card' style={{ backgroundImage: `url(${scratchCard})` }} onClick={() => navigate('/scratchCard')} >
                    <div className='game-card-name'>Scratch and Win</div>
                </div>
                <div className='game-card' style={{ backgroundImage: `url(${spinWheel})` }} onClick={() => navigate('/spinWheel')}>
                    <div className='game-card-name'>Spin Wheel</div>
                </div>
                
            </div>
        </div>

    )
}

export default Games