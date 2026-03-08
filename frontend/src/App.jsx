import React from 'react'
import { Route, Routes } from 'react-router'
import HomePage from './pages/HomePage'
import DetailPage from './pages/DetailPage'
import CreatePage from './pages/createPage'
import toast from 'react-hot-toast'

const App = () => {
  return (
    <div data-theme="forest">
      <div className="relative min-h-screen w-full">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/create" element={<CreatePage />} />
        <Route path="/note/:id" element={<DetailPage />} />
      </Routes>
      </div>
    </div>
  )
}

export default App