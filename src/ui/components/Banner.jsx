import React from "react";
import '../../index.css'
import {Box, Container, Typography} from "@mui/material";


const Banner = () => {
    return (
        <div className={"w-screen h-96 flex flex-col items-center justify-center italic"}>
            <h1 className={"font-light text-5xl mb-10"}>Marko Minovski</h1>
            <h5 className={"text-xl"}>Software Engineering Student @ FINKI</h5>
        </div>
    )
}


export default Banner;
