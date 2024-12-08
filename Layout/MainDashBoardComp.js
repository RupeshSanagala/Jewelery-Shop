import React from 'react';
import { Outlet, Link } from 'react-router-dom';
import RupeshJewels from '../assets/images/RupeshJewels.webp';
import NavComp from '../Layout/NavComp';
import FooterComp from '../Layout/FooterComp';
const MainDashBoardComp = () => {
  return (
    <div>
      <header className="bg-light py-3">
      <div className="container1 d-flex align-items-center justify-content-center">
        
        <img src={RupeshJewels} alt="Rupesh Jewels" className="me-2" style={{ width: '50px', height: '50px',borderRadius: '50%', marginRight: '10px' }} />
  
        <h1 className="text-success"><strong>Rupesh Jewels</strong></h1>
      </div>
    </header>
      <NavComp >
        
      </NavComp>
      <main className="container border mt-3 p-4">
        <Outlet />
      </main>
      <div>
        <FooterComp />
      </div>
    </div>
  );
};

export default MainDashBoardComp;
