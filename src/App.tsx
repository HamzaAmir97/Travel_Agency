import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <section className="relative py-20 md:py-32 overflow-hidden">
        <div className="container relative z-10">
          
            <div className="flex flex-col items-center text-center">
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                مرحباً، أنا 
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl">
                كل فكرة أرسمها، هي بداية قصة تُروى للعالم بدون كلمات

              </p>
              
           
        </div>
  </div>
      </section>

    </>

  )
}

export default App
