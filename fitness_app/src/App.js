/* eslint-disable no-unused-vars */
import React from 'react'
import {Route, Routes} from 'react-router-dom'
import {Box} from '@mui/material'
import Home from './pages/Home'
import ExerciseDetail from './pages/ExerciseDetails'
import Navbar from './components/Navbar'
import Footr from './components/Footer'

import './App.css'

const App = () => {
  return (
    <Box width="400px" sx={{width:{xl:'1488px'}}} m="auto">
        <Navbar/>
        <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/exercise/:id" element={<ExerciseDetail/>}></Route>
        </Routes>
      
        <Footr/>
    </Box>
  )
}

export default App