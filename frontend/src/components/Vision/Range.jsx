import React, { useEffect, useState } from "react";
import left from "./../Home/assets/lwft.png";
import right from "./../Home/assets/rwght.png";
import arrow from "./../Home/assets/arrow.png";
import { useNavigate } from "react-router-dom";
import "./../Home/Quiz/slider.css";

const Range = ({ add, submit }) => {
    const navigate = useNavigate();
    const [selected, setSelected] = useState(false);
    const [value, setValue] = useState(0);
    const handleSliderChange = (event) => {
        setValue(event.target.value);
        console.log(value);
        add(value);
    };

    const array = []; //change array

    function submit() {
        console.log("submitting ....", array);
        navigate("/results", {state:{fields: array}}); //
    }
    
    return (
        <div className="w-screen h-screen bg-white flex flex-col items-center justify-center">
            <span className="text-black font-open_sans text-2xl font-bold">
                LOCATE YOUR NEXT ADVENTURE
            </span>
            <div className="flex flex-row justify-center items-center gap-10">
                <img src={left} className="h-3/4" />
                <div className="flex flex-col items-start justify-start h-full mt-16">
                    <button
                        className="w-full text-black bg-white rounded-sm mt-8 hover:bg-black hover:text-white border-2 border-black hover:border-transparent transition duration-800 ease-in-out focus:outline-none"
                        onClick={() => {
                            setSelected(true);
                        }}
                    >
                        ENABLE LOCATION SETTINGS
                    </button>
                    <div className="flex flex-col items-start justify-start w-full mt-[15vh]">
                        <span className="text-black font-open_sans text-sm font-light">
                            I'm willing to travel:
                        </span>
                        <div className="slider-container w-full">
                            <input
                                type="range"
                                className="w-full slider mt-8"
                                min="0"
                                // defaultValue="50"
                                max="100"
                                value={value}
                                onChange={handleSliderChange}
                            ></input>
                        </div>
                        <span className="text-black font-open_sans text-sm font-light mt-8">
                            {value} km
                        </span>
                    </div>
                </div>
                <img src={right} className="h-3/4" />
            </div>
            <div
                className="w-1/5 bg-white mt-[15vh] border-b-2 border-gray-800 transition duration-800 ease-in-out focus:outline-none"
                onClick={() => {
                    setSelected(true);
                }}
            >
                <div className="group flex flex-row items-center justify-start hover:cursor-pointer hover:opacity-100 opacity-60 transition duration-500 ease-in-out"
                    onClick={() => {
                        submit();
                    }}>
                    <span className="w-[10vw] text-2xl">Find Trail</span>
                    <div className="w-full flex flex-row justify-end items-end">
                        <img
                            src={arrow}
                            className="h-16 -mb-2 group-hover:opacity-100 opacity-40 transition duration-500 ease-in-out"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Range;
