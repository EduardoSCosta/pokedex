import React from 'react';
import loadingSpinner from '../../assets/pokeball_spinner.png';

import './styles.css';


const Loading = () => {
  return (
    <div className="spinner-container">
      <img className="spinner" src={loadingSpinner} alt="Loading Spinner"/> 
    </div>
  );
}

export default Loading;