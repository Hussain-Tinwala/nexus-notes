import React from 'react'
import { Route, Routes } from 'react-router'
import HomePage from './pages/HomePage'
import DetailPage from './pages/DetailPage'
import CreatePage from './pages/createPage'

const App = () => {
  return (
    <div data-theme="forest" className="selection:bg-primary selection:text-primary-content">
      <div className="fixed inset-0 -z-10 h-full w-full bg-[#0a0f0d] bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px]">
        <div className="absolute inset-0 bg-gradient-to-tr from-primary/5 via-transparent to-secondary/5" />
      </div>

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