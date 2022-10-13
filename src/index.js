import React, {useState, useEffect} from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';


  
class Intro extends React.Component {
  render() {
    return (
      <div>
        Our Website will be here :)
      </div>
    );
  }
}


  
  // ========================================
  
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Intro />);
  