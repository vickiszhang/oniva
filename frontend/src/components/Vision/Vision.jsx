// YourReactComponent.js
import React, { useState } from "react";
import { processImage } from "./processImage";
import Rating from "./Rating";

function Vision() {
    const [labels, setLabels] = useState([]);
    const [confidence, setConfidence] = useState(0);
    const [flag, setFlag] = useState(false);

    async function handleImageUpload(event) {
        const file = event.target.files[0];
        const reader = new FileReader();

        reader.onload = async (e) => {
            const imageBase64 = e.target.result.split(",")[1];
            const visionApiResponse = await processImage(imageBase64);
            // Filter the labelAnnotations array to include only annotations with the category "sportswear"
            const sportswearAnnotations =
                visionApiResponse.labelAnnotations.filter((annotation) => {
                    return (
                        annotation.description === "Sportswear" ||
                        annotation.description === "Outerwear" ||
                        annotation.description === "Jacket" ||
                        annotation.description === "Coat" ||
                        annotation.description === "Hiking equipment" ||
                        annotation.description === "Mountaineering" ||
                        annotation.description === "Winter" ||
                        annotation.description === "Hoodie"
                    );
                });

            // Extract scores for the filtered annotations
            const sportswearScores = sportswearAnnotations.map(
                (annotation) => annotation.score
            );
            const sumOfScores = sportswearScores.reduce(
                (accumulator, currentValue) => accumulator + currentValue,
                0
            );
            setConfidence(sumOfScores);

            console.log("Sportswear annotations:", sportswearAnnotations);
            console.log("Sportswear scores:", sportswearScores);
            setLabels(visionApiResponse.labelAnnotations || []);
        };

        reader.readAsDataURL(file);
        setFlag(true);
    }

    return (
        <div className={`w-screen ${!flag ? "h-screen overflow-hidden" : "overflow-y-visible"}`}>
            <div
                className={`w-screen h-screen flex flex-col items-center justify-center gap-5  ${
                    !flag ? "opacity-100 overflow-hidden" : "opacity-0 -z-10"
                }
        transition delay-1000 duration-1000 ease-in-out absolute`}
            >
                <span className="text-black font-open_sans text-3xl font-bold">
                    WHAT ARE YOU DRESSED FOR?
                </span>
                <span className="text-black font-open_sans text-2xl font-light">
                    We’ll take a look at your outfit and recommend a local
                    activity.
                </span>
                <label className="group mt-16">
                    <input
                        className="group-hover:cursor-pointer pt-12 rounded-sm flex h-12 w-96 text-transparent bg-white mt-8 group-hover:bg-black border-2 border-black group-hover:border-transparent transition duration-800 ease-in-outborder border-input bg-background file:border-0 file:bg-transparent file:text-foreground file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50"
                        type="file"
                        accept="image/*"
                        onChange={handleImageUpload}
                    />
                    <span className="group-hover:cursor-pointer -mt-10 flex flex-row w-full justify-center items-center text-black group-hover:text-white transition duration-800 ease-in-out font-open_sans font-semibold">
                        Upload an Image
                    </span>
                </label>
            </div>
            <div
                className={`${
                    flag ? "opacity-100 absolute" : "opacity-0 -z-10 relative"
                } transition delay-[1200ms] duration-1000 ease-in-out`}
            >
                <Rating confidence={Math.min(confidence / 0.02, 100)} />
            </div>
        </div>
    );
}

export default Vision;
