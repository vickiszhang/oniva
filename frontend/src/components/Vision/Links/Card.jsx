import React from "react";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

const Card = ({ bgImage, name, route }) => {
    const routeChange = () => {
      window.location.href = route;
    };

    return (
        <div className="m-1 basis-1/5 hover:basis-[100%] shrink hover:grow min-w-[5%] transition-all duration-300 ease-in-out opacity-60 hover:opacity-100">
            <div
                className="group h-[500px] w-full
        bg-red-400 bg-cover bg-center overflow-hidden 
        hover:cursor-pointer
        flex flex-row justify-center items-center"
                style={{ backgroundImage: `url(${bgImage})` }}
                onClick={routeChange}
            >
                <h3
                    className="text-white bg-[#00000099] text-3xl font-normal tracking-widest p-2
            opacity-0 group-hover:transition-opacity duration-300 group-hover:opacity-100"
                >
                    {name}
                </h3>
            </div>
        </div>
    );
};

export default Card;
