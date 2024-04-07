import React, { useState } from "react";
import mountain from "./../assets/Group 10.png";
import Quiz4 from "./Quiz4";

const Quiz3 = () => {
    const [selected, setSelected] = useState(false);
    return (
        <div className="w-screen h-screen bg-white flex flex-col items-center justify-center">
            <div
                className={`w-2/3 flex flex-col items-center justify-center gap-5 ${
                    !selected ? "opacity-100" : "opacity-0"
                } transition duration-1000 ease-in-out`}
            >
                <div className="flex flex-row items-center justify-center gap-10">
                    <div className="flex flex-col items-center justify-center w-[20vw]">
                        <span className="text-black font-open_sans text-xl font-light">
                            Select your skill level
                        </span>
                        <span className="text-black font-open_sans text-2xl font-bold">
                            ARE YOU A?
                        </span>
                        <div className="w-[15vw]">
                            <button className="w-full text-black bg-white rounded-sm mt-8 hover:bg-black hover:text-white border-2 border-black hover:border-transparent transition duration-800 ease-in-out focus:outline-none"
                            onClick={()=>{setSelected(true)}}>
                                BEGINNER
                            </button>
                            <button className="w-full text-black bg-white rounded-sm mt-8 hover:bg-black hover:text-white border-2 border-black hover:border-transparent transition duration-800 ease-in-out focus:outline-none"
                            onClick={()=>{setSelected(true)}}>
                                INTERMEDIATE
                            </button>
                            <button className="w-full text-black bg-white rounded-sm mt-8 hover:bg-black hover:text-white border-2 border-black hover:border-transparent transition duration-800 ease-in-out focus:outline-none"
                            onClick={()=>{setSelected(true)}}>
                                EXPERT
                            </button>
                        </div>
                    </div>
                    <img src={mountain} className="h-[40vh]" />
                </div>
            </div>
            <div
                className={`${
                    selected ? "opacity-100" : "opacity-0 -z-10"
                } transition delay-1000 duration-1000 ease-in-out absolute`}
            >
                <Quiz4 />
            </div>
        </div>
    );
};

export default Quiz3;
