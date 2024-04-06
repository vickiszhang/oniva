import React from "react";
const Hero = () => {
    return (
        <div className="w-screen h-screen bg-hero-image bg-cover bg-no-repeat flex flex-row justify-center items-center">
            <div className="flex flex-col font-open_sans text-white w-4/5">
                <span className="font-merriweather text-7xl">
                    Adventure Awaits
                </span>
                <div className="flex flex-col text-2xl mt-[10vh] w-60">
                    Find a trail for today.
                    <button className="w-full text-black rounded-sm mt-8 hover:bg-black hover:text-white border-2 border-transparent hover:border-white transition duration-800 ease-in-out focus:outline-none">
                        START HERE
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Hero;
