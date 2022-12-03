import React from "react";
import LoginPage from "./pages/loginpage";
import GamePage from "./pages/gamepage";
import RewardsPage from "./pages/rewardsPage";
import {Routes,Route,BrowserRouter} from 'react-router-dom'
export default function App() {
    return (
      <BrowserRouter>
        <Routes>
          <Route path="/reward/:reward" element={<RewardsPage />}/>
          <Route path="/game" element={<GamePage />}/>
          <Route path="/" element={<LoginPage />}/>
        </Routes>
      </BrowserRouter>
    );
  }