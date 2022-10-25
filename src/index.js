import React, {useState, useEffect} from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Test from './modal.js';

  
class Intro extends React.Component {
  render() {
    return (
      <div className='chow'>
        Our Website will be here :)
        <Test/>
        
      </div>
    );
  }
}


  
  // ========================================
  
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Intro />);
  