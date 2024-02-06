  import { useState } from 'react'
  import { PlusIcon } from '@heroicons/react/24/outline'
  import './App.css'

  function App() {


    return (
      <>

        <head>
          <title>Travel Agency</title>
          <meta name="color-scheme" content="light dark" />
        </head>


        <body>
          
          <div className="flex justify-center  h-screen w-screen m-auto bg-red-500">
            <div className="flex flex-col gap-0">

              <div className="w-screen grid gap-0 lg:grid-cols-2 sm:grid-cols-1    h-1/4 bg-blue-500 text-white text-center">

              <div className="bg-yellow-500">
                
                <PlusIcon className="w-10 h-10" />
              </div>
              <div className="bg-purple-500">02</div>
              
            
             

              </div>
              <div className="w-screen h-2/4 bg-green-500 text-white text-center"><span>sp</span></div>
              <div className="w-screen h-1/4 bg-yellow-500 text-black text-center"><span>sp</span></div>




            </div>
          </div>


        </body>

      </>

    )
  }

  export default App
