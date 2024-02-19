
import { motion } from "framer-motion";


const HeroSection = () => {
    return (
        <div className="grid grid-cols-2 h-screen">
            <motion.div className="bg-red-500">
                <h1>Hero Section</h1>
            </motion.div>
            <motion.div className="bg-blue-500">
                <h1>Hero Section</h1>
            </motion.div>
        </div>
    )
}

export default HeroSection;
