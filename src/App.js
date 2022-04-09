import './App.css';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import MainPage from './MainPage';
import Navbar from './Navbar';



function App() {
  return (
   <React.Fragment>
    <Navbar />
    {/* <MainImage /> */}
     <MainPage />
   </React.Fragment>
  );
}

export default App;
