import React from "react";
import { useNavigate } from "react-router-dom";
import group16 from "./Group 16.png";
import image1 from "./image 18.png";
import image5 from "./image 19.png";
import image10 from "./image 10.png";
import image11 from "./image 16.png";
import image12 from "./image 17.png";
import image13 from "./image 13.png";
import image14 from "./image 11.png";
import image15 from "./image 12.png";
import fStar from "./Star 9.svg";
import eStar from "./Star 10.svg";

const Finish = () => {
    const navigate = useNavigate();
    const array = [];
    function submit() {
        console.log("submitting ....", array);
        navigate("/results", { state: { fields: array } });
    }

    return (
        <div className="w-screen h-screen flex flex-row items-center justify-center">
            <div className="flex flex-col items-center justify-center">
                <span className="text-2xl font-bold font-open_sans">
                    FINISH YOUR OUTFIT
                </span>
                <span className="text-xl font-light font-open_sans mb-6">
                    Improve your outdoor fit score with some of the following
                    options
                </span>

                <div className="h-[1px] w-full bg-black"></div>

                <div className="flex flex-row gap-5 content-evenly">
                    <div className="flex flex-col items-center justify-center py-4">
                        <img src={image1} />
                        <img src={image5} />
                        <span className="font-bold font-open_sans">
                            CERIUM HYBRID HOODY WOMEN'S
                        </span>
                        <span className="font-light font-open_sans text-[14px]">
                            Our lightest Ceridium down hoodie
                        </span>
                        <span className="font-bold font-open_sans">
                            $360.00
                        </span>
                        <div className="flex flex-row">
                            <img src={fStar} />
                            <img src={fStar} />
                            <img src={fStar} />
                            <img src={fStar} />
                            <img src={fStar} />
                        </div>
                    </div>

                    <div className="flex flex-col items-center justify-center py-4">
                        <img src={image11} />
                        <img src={image12} />
                        <span className="font-bold font-open_sans">
                            KADIN HOODIE WOMEN’S
                        </span>
                        <span className="font-light font-open_sans text-[14px]">
                            Versatile GORE-TEX INFINIUM softshell
                        </span>
                        <span className="font-bold font-open_sans">
                            $550.00
                        </span>
                        <div className="flex flex-row">
                            <img src={fStar} />
                            <img src={fStar} />
                            <img src={fStar} />
                            <img src={fStar} />
                            <img src={eStar} />
                        </div>
                    </div>

                    <div className="flex flex-col items-center justify-center py-4">
                        <img src={image10} />
                        <img src={image13} className="-mt-2" />
                        <span className="font-bold font-open_sans -mt-1">
                            AERIOS MID GTX SHOE WOMEN’S
                        </span>
                        <span className="font-light font-open_sans text-[14px]">
                            Fast and light GORE-TEX hiking shoe
                        </span>
                        <span className="font-bold font-open_sans">
                            $230.00
                        </span>
                        <div className="flex flex-row">
                            <img src={fStar} />
                            <img src={fStar} />
                            <img src={fStar} />
                            <img src={fStar} />
                            <img src={eStar} />
                        </div>
                    </div>

                    <div className="flex flex-col items-center justify-center py-4 -mt-1">
                        <img src={image14} />
                        <img src={image15} />
                        <span className="font-bold font-open_sans -mt-1">
                            SOLANO JACKET WOMEN’S
                        </span>
                        <span className="font-light font-open_sans text-[14px]">
                            Windproof, breathable hiking jacket
                        </span>
                        <span className="font-bold font-open_sans">
                            $400.00
                        </span>
                        <div className="flex flex-row">
                            <img src={fStar} />
                            <img src={fStar} />
                            <img src={fStar} />
                            <img src={fStar} />
                            <img src={fStar} />
                        </div>
                    </div>
                </div>

                <div className="h-[1px] w-full bg-black"></div>

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
