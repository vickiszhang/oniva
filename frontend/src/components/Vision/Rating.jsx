import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import tree from "./tree.png";
import group17 from "./Group 17.png";
import { useNavigate } from "react-router-dom";
import Finish from "./Finish";

const Rating = ({ confidence }) => {
    let activities = ["park", "running", "cycling", "hiking", "climbing"];
    let difficulty = ["beginner", "intermediate", "hard"];
    let active = [
        activities[Math.max(Math.round(confidence / 20) - 1, 0)], //middle
        activities[Math.min(Math.round(confidence / 20), 4)],     //right
        activities[Math.max(Math.round(confidence / 20) - 2, 0)], //left
    ];
    let diff = [difficulty[Math.max(Math.round(confidence / 33) - 1, 0)]];

    const [flag, setFlag] = useState(false);
    // Convert confidence to degrees
    const degrees = (confidence / 100) * 360;

    const tips = [
        "Are you sure you're dressed for the outdoors?",
        "Off to a great start!",
        "Just a few finishing touches to take this to great.",
        "Are you a professional? You look good to go!",
    ];

    const navigate = useNavigate();
    const routeChange = (loc) => {
        navigate("/vision/" + loc);
    };

    return (
        <div
            className={`w-screen ${
                !flag ? "h-screen overflow-hidden" : "overflow-y-visible"
            }`}
        >
            <div
                className={`w-screen overflow-hidden flex flex-row items-center justify-center gap-5 ${
                    !flag ? "opacity-100 overflow-hidden" : "opacity-0 -z-10"
                }
        transition delay-1000 duration-1000 ease-in-out`}
            >
                <div className="ml-[10vw] w-1/4 text-center h-[80vh] flex flex-col items-center justify-center">
                    <div className="flex flex-col items-center justify-center w-1/3 text-center">
                        <img src={tree} className="h-12" />
                        <span className="text-black font-open_sans text-3xl font-bold">
                            OUTDOORS FIT SCORE
                        </span>
                        <span className="text-black font-open_sans text-2xl font-light text-wrap mt-2">
                            Score: {Math.round(confidence)}
                        </span>
                    </div>
                    <div className="relative w-48 h-48 mt-12">
                        <motion.div
                            className="absolute inset-0 rounded-full"
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            transition={{
                                duration: 0.8,
                                delay: 0.5,
                                ease: "easeInOut",
                            }}
                            variants={{
                                visible: {
                                    background: `conic-gradient(
                            #97D195 ${degrees}deg,
                            #161616 ${degrees}deg
                        )`,
                                },
                                hidden: {
                                    background: `conic-gradient(
                            #97D195 ${0}deg,
                            #161616 ${0}deg
                        )`,
                                },
                            }}
                        ></motion.div>
                        <div className="absolute inset-0 w-24 h-24 rounded-full bg-white top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20"></div>
                    </div>
                    <span className="mt-12 text-black font-open_sans text-2xl font-light text-wrap">
                        {tips[Math.round(confidence / 25) - 1]}
                    </span>
                    <button
                        className={`w-96 h-12 font-semibold text-xl text-black bg-white rounded-sm mt-8 hover:bg-black hover:text-white border-2 border-black hover:border-transparent transition duration-800 ease-in-out focus:outline-none ${
                            Math.round(confidence / 25) - 1 < 3
                                ? "visible"
                                : "hidden"
                        }`}
                        onClick={() => {
                            setFlag(true);
                        }}
                    >
                        FINISH YOUR OUTFIT
                    </button>
                    <button
                        className={`w-96 h-12 font-semibold text-xl text-black bg-white rounded-sm mt-8 hover:bg-black hover:text-white border-2 border-black hover:border-transparent transition duration-800 ease-in-out focus:outline-none ${
                            Math.round(confidence / 25) - 1 < 3
                                ? "hidden"
                                : "visible"
                        }`}
                        onClick={() => {
                            routeChange("range");
                        }}
                    >
                        START AN ACTIVITY
                    </button>
                </div>
                <img src={group17} className="ml-[10vw]" />
            </div>
            <div
                className={`${
                    flag
                        ? "opacity-100 absolute top-0"
                        : "opacity-0 -z-10 relative"
                } transition delay-[1200ms] duration-1000 ease-in-out`}
            >
                <Finish activity={active} difficulty={diff}/>
            </div>
        </div>
    );
};

export default Rating;
