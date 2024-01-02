import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
   {/* <Navbar /> */}
   <div className="nav flex flex-row">
  <div className="basis-3xs w-100px h-100px bg-red-500">01</div>
  <div className="basis-2xs w-100px h-100px bg-blue-500">02</div>
  <div className="basis-xs w-100px h-100px bg-green-500">03</div>
  <div className="basis-sm w-100px h-100px bg-yellow-500">04</div>
</div>
    </>
  )
}

export default App
