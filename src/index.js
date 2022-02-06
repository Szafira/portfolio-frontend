import 'bootstrap/dist/css/bootstrap.min.css';
import ReactDOM from 'react-dom';
import MainPage from '../src/components/MainPage'
import MenuBar from '../src/components/MenuBar';
import Gallery from '../src/components/Gallery'
import About from '../src/components/About'
import React from 'react';
import Footer from './components/Footer';
import AdminPanel from  './components/AdminPanel';
import {
    BrowserRouter as Router,
    Route, Routes
  } from "react-router-dom";
   
  
class App extends React.Component{
  
  render(){ 
    return (
    <div>
    <Router>
        <MenuBar />     
          <Routes>
          <Route path="MainPage" element={<MainPage/>}/>
          <Route path="Gallery" element={<Gallery/>}/>
          <Route path="About" element={<About/>}/>
          <Route path="AdminPanel" element={<AdminPanel/>}/>
          </Routes>
        <Footer/>
      </Router>
      
      </div>
      
    )
    
  }  
}



ReactDOM.render(<App /> , document.querySelector('#root'));