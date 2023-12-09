import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; 
import '../App.css';
import Image from '../Bestpeerslogo.jpg'
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div>
      <header className="header-container">
        <div className="container">
          <div className="row">
            <div className="col-2">
              <img src={Image} alt="Logo" className="logo" />
            </div>
            <div className="col-4"></div>
            <div className="col-6 text-end">  
              <Link to="/">Home</Link> 
            </div>
          </div>
        </div>
      </header>
    </div>
  );
}

export default Header;
