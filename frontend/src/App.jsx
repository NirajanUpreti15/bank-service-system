import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'
import RequestsPage from './pages/RequestsPage'

function Welcome() {
    return <h1>Bank Service System</h1>;
}


function App() {
  
  return (
    <>
      <Welcome />
      <RequestsPage />
    </>
  )
}

export default App
