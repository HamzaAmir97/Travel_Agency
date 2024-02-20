
import { motion } from "framer-motion";


const HeroSection = () => {
    return (
        <div className="grid lg:grid-cols-2 sm:grid-cols-1  w-screen h-screen text-center  ">
            <motion.div className="w-full h-full p-10 text-center bg-red-500">
                <h1 className="text-4xl font-bold hover:text-blue-500">Hero Section</h1>
                <button className="bg-blue-500 w-1/4 rounded-md py-10 text-white p-2">Click me</button>
            </motion.div>
            <motion.div className="w-full h-full bg-blue-500">
                <h1>Hero Section</h1>
            </motion.div>
        </div>




    )
}

export default HeroSection;
