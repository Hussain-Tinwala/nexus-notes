import React from 'react'
import { Route, Routes } from 'react-router'
import HomePage from './pages/HomePage'
import DetailPage from './pages/DetailPage'
import CreatePage from './pages/createPage'
import toast from 'react-hot-toast'

const App = () => {
  return (
    <div data-theme="forest">
      <button className='btn btn-outline' onClick={()=>toast.success("Congrats")}>Click Me</button>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/create" element={<CreatePage />} />
        <Route path="/note/:id" element={<DetailPage />} />
      </Routes>
    </div>
  )
}

export default App