import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import logo from "./assets/Group 11.png";
const Hero = () => {
    const navigate = useNavigate();
    const routeChange = (route) => {
        navigate(route);
    };

    return (
        <>
            <div
                className={`w-screen h-screen bg-hero-image bg-cover bg-no-repeat flex flex-row justify-center items-center`}
            >
                <div className="flex flex-col font-open_sans text-white w-4/5">
                    <span className="font-merriweather text-7xl">
                        Oniva: Adventure Awaits
                    </span>
                    <div className="flex flex-col text-2xl mt-[10vh] w-60">
                        Find a trail for today.
                        <a href="#middle">
                            <button className="mt-20 w-full text-black bg-white rounded-sm hover:bg-black hover:text-white border-2 border-transparent hover:border-white transition duration-800 ease-in-out focus:outline-none">
                                START HERE
                            </button>
                        </a>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Hero;
