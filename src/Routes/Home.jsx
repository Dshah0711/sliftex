import React from 'react'
import axios from 'axios'
import { useEffect, useState } from 'react'
import { Link, Navigate, useNavigate } from 'react-router-dom'
import Navbar from "../components/Navbar"
import Content from '../components/Content'
import Card from "../components/Card"
import ToolsAndTech from '../components/ToolsAndTech'
import StepByStepGuide from '../components/StepByStepGuide'
import Footer from '../components/Footer'

const Home = () => {

  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();
  axios.defaults.withCredentials = true;

  useEffect(() => {
    axios.get('http://localhost:3000/auth/verify')
    .then(res => {
      if (res.data.isAuthenticated) {
        setIsLoggedIn(true);
      } else {
        setIsLoggedIn(false);
      }
    }).catch(err => {
      console.log(err);
    });
}, []);

const handleLogout = () => {
  axios.get('http://localhost:3000/auth/logout')
    .then(res => {
      if (res.data.status) {
        setIsLoggedIn(false);
        navigate('/login');
      }
    }).catch(err => {
      console.log(err);
    });
};
  return (
    <>
     <Navbar isLoggedIn={isLoggedIn} handleLogout={handleLogout}/>
      <Content />
     <ToolsAndTech />
     <StepByStepGuide />
      <Card />
      <Footer /> 
     
    
    </>
   
  )
}

export default Home
