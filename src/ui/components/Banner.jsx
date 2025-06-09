import React from "react";
import '../../index.css'
import { motion } from "framer-motion";


const Banner = () => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.5 }}
        >
            <div className={"w-screen h-96 flex flex-col items-center justify-center italic"}>
                <h1 className={"font-light text-5xl mb-10"}>Marko Minovski</h1>
                <h5 className={"text-xl"}>Software Engineering Student @ FINKI</h5>
            </div>
        </motion.div>

    )
}


export default Banner;
