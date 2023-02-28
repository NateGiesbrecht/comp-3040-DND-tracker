import React from 'react';
import './App.css';
import Home from './Home';
import PlayerHome from './Player/PlayerHome';
import DMHome from './DM/DMHome';
import PlayerNotes from './Player/PlayerNotes';
import CampaignHomePage from './DM/CampaignHomePage';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/Player" element={<PlayerHome />} />
        <Route exact path="/DM" element={<DMHome />} />
        <Route exact path="/Player/:playerID" element={<PlayerNotes />} />
        <Route exact path="/DM/:campaignID" element={<CampaignHomePage />} />
      </Routes>
    </>
  );
}

export default App;
