import React from "react";
import group16 from "./Group 16.png";
import image1 from "./image 1.png";
import image5 from "./image 5.png";
import image10 from "./image 10.png";
import image11 from "./image 11.png";
import image12 from "./image 12.png";
import image13 from "./image 13.png";
import image14 from "./image 14.png";
import image15 from "./image 15.png";
import fStar from "./Star 9.svg";
import eStar from "./Star 10.svg";
const GenericDisplay = () => {
    return (
        <div className="w-screen h-screen flex flex-row items-center justify-center gap-10">
            <div className="h-screen flex flex-col justify-center items-center">
                <img src={group16} className="h-3/4" />
            </div>
            <div className="flex flex-col justify-center items-start">
                <span className="text-3xl font-open_sans font-light">
                    Address:
                </span>
                <span className="text-3xl font-open_sans font-light">
                    Difficulty:
                </span>
                <span className="text-3xl font-open_sans font-light">
                    Website:
                </span>
                <span className="text-3xl font-open_sans font-bold mt-8">
                    Get Into Gear
                </span>
                <div className="h-[1px] w-full bg-black"></div>

                <div className="flex flex-row gap-5">
                    <div className="flex flex-col items-center justify-center py-4 mr-10">
                        <img src={image1} />
                        <img src={image5} />
                        <span className="font-bold font-open_sans">
                            MANTIS 26 BACKPACK
                        </span>
                        <span className="font-light font-open_sans text-[14px]">
                            Highly versatile 26L daypack
                        </span>
                        <span className="font-bold font-open_sans">
                            $190.00
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
                        <img src={image11} />
                        <img src={image12} />
                        <span className="font-bold font-open_sans">
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

                    <div className="flex flex-col items-center justify-center py-4">
                        <img src={image10} />
                        <img src={image13} />
                        <span className="font-bold font-open_sans">
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

                    <div className="flex flex-col items-center justify-center py-4">
                        <img src={image14} />
                        <img src={image15} />
                        <span className="font-bold font-open_sans">
                            SMALL BIRD CAP
                        </span>
                        <span className="font-light font-open_sans text-[14px]">
                            Versatile high-performance ball cap
                        </span>
                        <span className="font-bold font-open_sans">$60.00</span>
                        <div className="flex flex-row">
                            <img src={fStar} />
                            <img src={fStar} />
                            <img src={fStar} />
                            <img src={fStar} />
                            <img src={eStar} />
                        </div>
                    </div>
                </div>

                <div className="h-[1px] w-full bg-black"></div>
            </div>
        </div>
    );
};

export default GenericDisplay;
