import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './Navbar'
import Footer from './Footer'
import About from './About'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div className="w-full flex flex-col items-center">

     <Navbar/>
     <About/>
     <Footer/>
    </div>
    </>
  )
}

export default App
