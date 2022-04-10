import './App.css';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import MainPage from './MainPage';
import Navbar from './Navbar';
import MainImage from './MainImage';


function App() {
  return (
   <React.Fragment>
    <Navbar />
    <MainImage />
     <MainPage />
   </React.Fragment>
  );
}

export default App;
