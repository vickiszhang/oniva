import React from "react";
import group16 from "./Group 16.png";
import image1 from "./image 1.png";
import image5 from "./image 5.png";
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
                    <div className="flex flex-col items-center justify-center py-4">
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
                </div>

                <div className="h-[1px] w-full bg-black"></div>
            </div>
        </div>
    );
};

export default GenericDisplay;
