import logo from './logo.svg';
import './App.css';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import MainPage from './MainPage';
import Demo from './Demo';
import MainImage from './MainImage';
import SearchBar from './SearchBar';
import FixedBottomNavigation from './FixedBottomNavigation';

function App() {
  return (
   <React.Fragment>
    <Demo />
    <SearchBar />
    <MainImage />
     <MainPage />
     <FixedBottomNavigation />
   </React.Fragment>
  );
}

export default App;
