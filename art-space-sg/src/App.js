import logo from './logo.svg';
import './App.css';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import MainPage from './MainPage';
import Demo from './Demo';
import MainImage from './MainImage';

function App() {
  return (
   <React.Fragment>
    <Demo />
    <MainImage />
    {/* <img src={require("./image/landing-page-image.jpg")} alt='landing-page' style={{'width':'100%', 'height':'50vh'}}/> */}
     <MainPage />
   </React.Fragment>
  );
}

export default App;
