// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
import cycle from "./../assets/cycle.png";
import group1 from "./../assets/Group 1.png";
import group2 from "./../assets/Group 2.png";
import group3 from "./../assets/Group 3.png";
import group4 from "./../assets/Group 4.png";
import group5 from "./../assets/Group 5.png";
import Quiz2 from "./Quiz2";

const Quiz1 = () => {
    const [selected, setSelected] = useState(false);
    // eslint-disable-next-line no-unused-vars
    let selectActivity = [];
    const [Activities, setActivities] = useState(selectActivity)
    return (
        <div className="w-screen h-screen bg-white flex flex-col items-center justify-center">
            <div
                className={`w-2/3 flex flex-col items-center justify-center gap-5 ${
                    !selected ? "opacity-100" : "opacity-0"
                } transition duration-1000 ease-in-out`}
            >
                <img src={cycle} className="h-16" />
                <span className="text-black font-open_sans text-3xl font-bold">
                    WHAT DO YOU WANT TO DO?
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
                <div className="flex flex-row h-[35vh] items-center justify-center gap-16 w-screen">
                    <img
                        src={group1}
                        className="h-3/4 opacity-70 hover:opacity-100 transition duration-300 ease-in-out hover:cursor-pointer"
                        onClick={() => {
                            setSelected(true);
                            selectActivity.push("cycling")
                            setActivities(selectActivity);

                        }}
                    />
                    <img
                        src={group2}
                        className="h-3/4 opacity-70 hover:opacity-100 transition duration-300 ease-in-out hover:cursor-pointer"
                        onClick={() => {
                            setSelected(true);
                            selectActivity.push("climbing");
                            setActivities(selectActivity);
                        }}
                    />
                    <img
                        src={group3}
                        className="h-3/4 opacity-70 hover:opacity-100 transition duration-300 ease-in-out hover:cursor-pointer"
                        onClick={() => {
                            setSelected(true);
                            selectActivity.push("parks");
                            setActivities(selectActivity);
                        }}
                    />
                </div>
                <div className="flex flex-row h-[35vh] items-center justify-center gap-16 w-screen -mt-8">
                    <img
                        src={group4}
                        className="h-3/4 opacity-70 hover:opacity-100 transition duration-300 ease-in-out hover:cursor-pointer"
                        onClick={() => {
                            setSelected(true);
                            selectActivity.push("trail running");
                            setActivities(selectActivity);
                        }}
                    />
                    <img
                        src={group5}
                        className="h-3/4 opacity-70 hover:opacity-100 transition duration-300 ease-in-out hover:cursor-pointer"
                        onClick={() => {
                            setSelected(true);
                            selectActivity.push("hiking");
                            setActivities(selectActivity);
                        }}
                    />
                </div>
            </div>
            <div
                className={`${
                    selected ? "opacity-100" : "opacity-0 -z-10"
                } transition delay-1000 duration-1000 ease-in-out absolute`}
            >
                <Quiz2 activities={Activities} />
            </div>
        </div>
    );
};

export default Quiz1;
