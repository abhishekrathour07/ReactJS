import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Marquee from './components/Marquee'
import Cards from './components/Cards'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar home="jaiho"/>
      <Marquee/>
      <Cards/>
      <Navbar home={"hello"}/>
    </>
  )
}

export default App
