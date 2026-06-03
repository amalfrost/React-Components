import { useState } from 'react'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import Tabview from './components/tab-view-component/Tabview'
import Home from './pages/Home'
import { tabData } from './components/tab-view-component/tabViewData'
import TreeComponent from './components/tree-component/TreeComponent'
import { TreeMockData } from './components/tree-component/treeData'

function App() {

  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/tabview' element={<Tabview contents={tabData} />} />
      <Route path='/tree' element={<TreeComponent treeData={TreeMockData} />} />
    </Routes>
  )
}

export default App
