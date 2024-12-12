
import axios from 'axios'
import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import Chatbot from '../components_service/chatbot'
import DynamicTable from '../components_service/DynamicTable'

import Footer from '../components/Footer'
const Service = () => {
  const navigate = useNavigate()
  axios.defaults.withCredentials = true;
  useEffect(() => {
      axios.get('http://localhost:3000/auth/verify')
      .then(res=> {
          if(res.data.status) {

          } else {
              navigate('/login')
          }
          console.log(res);
      })
  }, [])
  return (
    <div>
     
      <DynamicTable />
      <Chatbot />
      <Footer />

    </div>
  )
}

export default Service
