
import { PlusIcon } from '@heroicons/react/24/outline'
import './App.css'
import TypingAnimatedText from './components/TypingText'
import GradientBackground from './components/GradientBackground'
import Navbar from './components/Navbar'
import HeroSection from './components/herosection'
function App() {


  return (
    <>

      <head>
        <title>Travel Agency</title>
        <meta name="color-scheme" content="light dark" />
      </head>


      <body className=''>

           <HeroSection />

           <Navbar />
 {/* 
      <GradientBackground />
     
        <div className="flex justify-center overflow-hidden    h-screen w-screen m-auto">
              
          <div className="flex flex-col relative  gap-0">

            <div className="w-screen grid gap-0 lg:grid-cols-2 sm:grid-cols-1    h-1/4  text-white text-center">

              <div className="flex justify-center items-center">
                <div className='flex flex-col w-full h-20  justify-center items-center'>
                    <TypingAnimatedText />
                    <span className="border w-50 h-50 animate__animated animate__bounceInDown relative border-r-5 border-green-500  rounded-lg drop-shadow-xs
                               ">
                  
                  <h1 className='animate__animated animate__jello'>Add</h1>
                  <PlusIcon className=" transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110 absolute top-0 left-0  float-right animate__animated animate__bounce w-10 h-10 border  border-r-4 border-indigo-500 hover:bg-fuchsia-600" />
                </span>
                
                 </div>
             
               
                  
              </div>
              <div className="bg-purple-500">02</div>




            </div>
            <div className="w-screen h-2/4 bg-green-500 text-white text-center">
            
            
            <span className='z-100'><h1 className='text-white'>sp</h1></span></div>
            <div className="w-screen h-1/4 bg-yellow-500 text-black text-center"><span>sp</span></div>




          </div>
        </div> */}


      </body>

    </>

  )
}

export default App
