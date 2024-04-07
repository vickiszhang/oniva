import React, { useState } from "react";
import group1 from "./../assets/Group 7.png";
import group2 from "./../assets/Group 8.png";
import group3 from "./../assets/Group 9.png";
import bino from "./../assets/bino.png";
import Quiz3 from "./Quiz3";

const Quiz2 = () => {
    const [selected, setSelected] = useState(false);
    return (
        <div className="w-screen h-screen bg-white flex flex-col items-center justify-center">
            <div
                className={`w-2/3 flex flex-col items-center justify-center gap-5 ${
                    !selected ? "opacity-100" : "opacity-0"
                } transition duration-1000 ease-in-out`}
            >
                <img src={bino} className="h-16" />
                <span className="text-black font-open_sans text-3xl font-bold">
                    WHAT MATTERS MOST TO YOU?
                </span>
                <span className="text-black font-open_sans text-2xl font-light -mt-4">
                    Select one option.
                </span>
            </div>
            <div
                className={`${
                    !selected ? "opacity-100" : "opacity-0"
                } transition duration-1000 ease-in-out`}
            >
                <div className="flex flex-row h-[60vh] items-center justify-center gap-5 w-screen">
                    <img
                        src={group1}
                        className="h-3/4 opacity-70 hover:opacity-100 transition duration-300 ease-in-out hover:cursor-pointer"
                        onClick={() => {
                            setSelected(true);
                        }}
                    />
                    <img
                        src={group2}
                        className="h-3/4 opacity-70 hover:opacity-100 transition duration-300 ease-in-out hover:cursor-pointer"
                        onClick={() => {
                            setSelected(true);
                        }}
                    />
                    <img
                        src={group3}
                        className="h-3/4 opacity-70 hover:opacity-100 transition duration-300 ease-in-out hover:cursor-pointer"
                        onClick={() => {
                            setSelected(true);
                        }}
                    />
                </div>
            </div>
            <div
                className={`${
                    selected ? "opacity-100" : "opacity-0 -z-10"
                } transition delay-1000 duration-1000 ease-in-out absolute`}
            >
                <Quiz3 />
            </div>
        </div>
    );
};

export default Quiz2;
