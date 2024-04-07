import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Links from "./Links/Links";

const Rating = ({ confidence }) => {
    const [timer, setTimer] = useState(false);
    useEffect(() => {
        const timeout = setTimeout(() => {
            setTimer(true);
        }, 10);

        return () => clearTimeout(timeout);
    }, []);
    // Convert confidence to degrees
    const degrees = (confidence / 100) * 360;

    const tips = [
        "bad bad bad no good",
        "ok",
        "good",
        "great awesome incredible description description words wrods wrods words words",
    ];

    return (
        <div className="w-screen flex flex-col items-center justify-center gap-5">
            <div className="w-screen h-[80vh] flex flex-row items-center justify-center gap-20">
                <div className="flex flex-col items-center justify-center w-1/3 text-center">
                    <span className="text-black font-open_sans text-3xl font-bold">
                        Your Outfit Score: {Math.round(confidence)}
                    </span>
                    <span className="text-black font-open_sans text-2xl font-light text-wrap">
                        {tips[Math.round(confidence / 25) - 1]}
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
            </div>
            <div
                className={`${
                    Math.round(confidence / 25) - 1 < 3 ? "flex flex-col" : "hidden"
                }`}
            >
                <span className="text-black font-open_sans text-3xl font-bold">
                    COMPLETE YOUR FIT
                </span>
                <Links />
            </div>

            <button
                className="mb-12 w-96 h-12 font-semibold text-xl text-black bg-white rounded-sm mt-8 hover:bg-black hover:text-white border-2 border-black hover:border-transparent transition duration-800 ease-in-out focus:outline-none"
            >
                START AN ACTIVITY
            </button>
        </div>
    );
};

export default Rating;
