import React from "react";
import { Route, Routes } from 'react-router-dom';
import SimulationPage from './pages/SimulationPage';
import WriteUpPage from "./pages/WriteUpPage";
import 'bootstrap/dist/css/bootstrap.min.css';

export default function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<WriteUpPage/>}></Route>
        <Route path="/simulation" element={<SimulationPage />}></Route>
      </Routes>
    </div>
  );
}
