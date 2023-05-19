import { useState } from "react";
import Login from "./Components/Login/Login";
import Registration from "./Components/Registration/Registration";
import Games from "./Components/Games/Games";
import ScratchCard from "./Components/Games/ScratchCard/ScratchCard";
import SpinWheel from "./Components/Games/SpinWheel/SpinWheel";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';

function App() {
  const [userlist, setUserList] = useState([
    {
      name: 'Rahul Yadav',
      email: 'ydv.rahul3108@gmail.com',
      password: 'rahul3108',
    }
  ]);
  const [logUser , setLogUser] = useState([]);

  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path="/" element={<Login users={userlist} addUsers={setUserList} setLogUser={setLogUser}/>}/>
          <Route exact path="/register" element={<Registration users={userlist} addUsers={setUserList} setLogUser={setLogUser}/>}/>
          <Route path="/games" element={<Games user={logUser} setLogUser={setLogUser}/>}/>
          <Route path="/scratchCard" element={<ScratchCard/>}/>
          <Route path="/spinWheel" element={<SpinWheel/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
