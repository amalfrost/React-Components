import { useState } from 'react'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import Tabview from './components/tab-view-component/Tabview'
import Home from './pages/Home'
import { tabData } from './components/tab-view-component/tabViewData'

function App() {

  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/tabview' element={<Tabview contents={tabData} />} />
    </Routes>
  )
}

export default App
