import React from "react";
import { useNavigate } from "react-router-dom";

const Finish = () => {
    const navigate = useNavigate();
    const array = [];
    function submit() {
        console.log("submitting ....", array);
        navigate("/results", {state:{fields: array}});
    }


    return (
        <div className="w-screen h-screen flex flex-row items-center justify-center">
            <div className="flex flex-col items-center justify-center">
                <span className="text-2xl font-bold font-open_sans">FINISH YOUR OUTFIT</span>
                <span className="text-xl font-light font-open_sans">
                    Improve your outdoor fit score with some of the following
                    options
                </span>
                <button
                    className={`w-96 h-12 font-semibold text-xl text-black bg-white rounded-sm mt-8 hover:bg-black hover:text-white border-2 border-black hover:border-transparent transition duration-800 ease-in-out focus:outline-none`}
                    onClick={() => {
                        submit();
                    }}
                >
                    FIND YOUR ADVENTURE
                </button>
            </div>
        </div>
    );
};

export default Finish;
