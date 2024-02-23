
import { motion } from "framer-motion";


const HeroSection = () => {
    return (
        <div className="grid lg:grid-cols-2 sm:grid-cols-1  w-screen h-screen text-center m-0 gap-0 " >
         
            <motion.div className="max-h-1/2 p-10  flex  flex-col justify-center items-center gap-10    bg-red-500">
                <h1 className="text-4xl font-bold hover:text-blue-500">Hero Section</h1>
                <button className="bg-blue-500 w-40  rounded-lg  text-white p-2">Click me</button>
            </motion.div>

            <motion.div className="max-h-1/2  h-full w-full flex flex-col  justify-center items-center bg-blue-500">
                <img src={"1.png"} alt="piza"  className=" bg-red-500  w-1/2  h-90 rotate-12 object-cover"/> 

            </motion.div>
        </div>




    )
}

export default HeroSection;
