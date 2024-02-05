  import { useState } from 'react'
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

              <div className="w-screen grid sm:grid-cols-2 md:grid-cols-4 gap-4  h-1/4 bg-blue-500 text-white text-center">

              <div className="bg-yellow-500">01</div>
              <div className="bg-purple-500">02</div>
              <div className="bg-pink-500">03</div>
              <div className="bg-orange-500">04</div>
             

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
