import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './pages/home_page';
// import FindInvestorPage from "./pages/FindInvestorPage";
import 'antd/dist/antd.css';
import LoginPage from './pages/LoginPage';

function App () {
  return (
    <BrowserRouter>
      <Routes>
        {/* <Route path="/" element={<HomePage />} /> */}
        {/* <Route path="/" element={<FindInvestorPage />} /> */}
        <Route path='/' element={<LoginPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
