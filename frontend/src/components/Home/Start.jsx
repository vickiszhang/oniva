import React from "react";
import group14 from "./assets/Group 14.png";
import group15 from "./assets/Group 15.png";
import { useNavigate } from "react-router-dom";

const Start = () => {
    const navigate = useNavigate();
    const routeChange = (route) =>{ 
      navigate(route);
    }

    return (
        <div className="w-screen h-screen flex flex-col justify-center items-center">
            <div className="w-5/6 h-[1px] bg-gray-700" />
            <div className="flex flex-row mt-24 w-full gap-[10vw] justify-center">
                <img
                    src={group14}
                    className="w-1/4  opacity-80 hover:opacity-100 transition duration-800 ease-in-out hover:cursor-pointer"
                    onClick={() => {routeChange('/vision')}}
                />
                <img
                    src={group15}
                    className="w-1/4  opacity-80 hover:opacity-100 transition duration-800 ease-in-out hover:cursor-pointer"
                    onClick={() => {routeChange('/quiz')}}
                />
            </div>
        </div>
    );
};

export default Start;
