// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from "react";
import {useLocation} from 'react-router-dom';
import group1 from "./../assets/Group 7.png";
import stanley from "./../assets/stanleypark.png";
import sunset from "./../assets/sunsetbeach.png";
import falsecreek from "./../assets/falsecreek.png";

import arrow from "./../assets/arrow.png";
import axios from "axios";





const Results = () => {
    const location = useLocation();

    console.log(location.state?.fields);
    const fields = location.state?.fields;
    const [selected, setSelected] = useState(false);
    const [data, setData] = useState([]);
    const [filteredData, setFilteredData] = useState([]);

    
    const fetchResults = async () => {
        try {
            const table = fields[0];
            axios.get(`http://localhost:3000/${table}/get`).then((response) => {
              setData(response.data[table + "s"]);
              console.log(data);
            });
    
            if (fields[2] == "beginner") { 
                let filteredData = data.filter(item => item.difficulty.length <= 2);
                setFilteredData(filteredData);
                console.log(filteredData);
            } 
            if (fields[2] == "intermediate") {
                let filteredData = data.filter(item => item.difficulty.length <= 3);
                setFilteredData(filteredData);
 
                console.log(filteredData);
            }
            if (fields[2] == "expert") {
                let filteredData = data.filter(item => item.difficulty.length >= 3);
                setFilteredData(filteredData);

                console.log(filteredData);
            }
          } catch (error) {
            console.log(error);
          }
    }
    

    useEffect(() => {
        fetchResults();


      }, [])
    let activities;
      if (filteredData.length >= 3) {
        activities = filteredData.slice(0, 3).map((item, index) => (
            <div key={item.id}>
                <span className="text-xl">{item.name}</span>
                <img
                    src={index === 0 ? stanley : index === 1 ? sunset : falsecreek}
                    alt={item.name}
                    className="h-[300px] w-[300px] object-cover opacity-70 hover:opacity-100 transition duration-300 ease-in-out hover:cursor-pointer"
                    onClick={() => { 
                        setSelected(true);
                    }}
                />
                <div className="group flex flex-row items-center justify-start hover:cursor-pointer hover:opacity-100 opacity-60 transition duration-500 ease-in-out">
                    <span className="w-[10vw] text-2xl">Select</span>
                    <div className="w-full flex flex-row justify-end items-end">
                        <img
                            src={arrow}
                            className="h-16 -mb-2 group-hover:opacity-100 opacity-40 transition duration-500 ease-in-out"
                        />
                    </div>
                </div>
            </div>
        ));
    }


    return (
        <div className="w-screen h-screen bg-white flex flex-col items-center justify-center">
        <div
            className={`w-2/3 flex flex-col items-center justify-center gap-5 ${
                !selected ? "opacity-100" : "opacity-0"
            } transition duration-1000 ease-in-out`}
        >
            <span className="text-black font-open_sans text-3xl font-bold">
                Suggested Activities
            </span>

        </div>
        <div
            className={`${
                !selected ? "opacity-100" : "opacity-0"
            } transition duration-1000 ease-in-out`}
        >

            <div className="flex flex-row h-[60vh] items-center justify-center gap-5 w-screen">
                {/* <div>
                    <span className="text-4xl ">name</span>
                    <img
                        src={group1}
                        className="h-3/4 opacity-70 hover:opacity-100 transition duration-300 ease-in-out hover:cursor-pointer"
                        onClick={() => {
                            setSelected(true);
                        }}
                    />
                    <div className="group flex flex-row items-center justify-start hover:cursor-pointer hover:opacity-100 opacity-60 transition duration-500 ease-in-out">
                        <span className="w-[10vw] text-2xl">Select</span>
                        <div className="w-full flex flex-row justify-end items-end">
                            <img
                                src={arrow}
                                className="h-16 -mb-2 group-hover:opacity-100 opacity-40 transition duration-500 ease-in-out"
                            />
                        </div>
                    </div>
                </div> */}

                {activities}

            </div>
        </div>
        </div>
    );
};

export default Results;
