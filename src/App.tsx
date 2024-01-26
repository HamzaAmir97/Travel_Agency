import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
   {/* <Navbar /> */}
     <div className='flex flex-col  items-center h-screen'>
      <Navbar />
     <h1 className=' flex-1 text-3xl  text-orange-500 shadow-lg shadow-orange-500/50S font-bold underline'>Hello World</h1>
     
     </div>
    </>
  )
}

export default App
