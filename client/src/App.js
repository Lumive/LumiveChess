import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from './pages/HomePage';
import Navbar from './components/elements/navbar/navbar';
import {TextField} from "@mui/material"

function App() {
  return (
    <div>
      <Navbar />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} exact/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
