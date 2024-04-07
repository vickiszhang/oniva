import React, { useState } from 'react';
import axios from 'axios';

const Vision = () => {
// Google Cloud Vision API Labelling
const analyzeImage = async () => {
    try {
      const formData = new FormData();
      const file = await fetch('./jacket.png');
      const blob = await file.blob();
      formData.append('file', blob);
  
      const reader = new FileReader();
      reader.readAsDataURL(blob);
  
      reader.onload = async () => {
        const base64data = reader.result.split(',')[1];
  
        const response = await axios.post(
          'https://vision.googleapis.com/v1/images:annotate?key=AIzaSyBFEi_rdHLDWPLHyNutE9ICws2WOJPPyVE',
          {
            requests: [
              {
                image: {
                  content: base64data,
                },
                features: [
                  {
                    type: 'LABEL_DETECTION',
                    maxResults: 150,
                  },
                  {
                    type: 'WEB_DETECTION', // Add entity detection
                    maxResults: 10,
                  },
                ],
              },
            ],
          }
        );
        if (response.data.responses && response.data.responses.length > 0) {
          const labels = response.data.responses[0].labelAnnotations;
          const webEntities = response.data.responses[0].webDetection.webEntities;
  
          if (labels && webEntities) {
            // Filter labels based on entity detection
            const clothesLabels = labels.filter(label =>
              webEntities.some(entity =>
                entity.description.toLowerCase().includes('clothing') ||
                entity.description.toLowerCase().includes('fashion') ||
                entity.description.toLowerCase().includes('apparel') ||
                entity.description.toLowerCase().includes('garment') ||
                entity.description.toLowerCase().includes('dress') ||
                entity.description.toLowerCase().includes('shirt') ||
                entity.description.toLowerCase().includes('pants') ||
                entity.description.toLowerCase().includes('skirt') ||
                entity.description.toLowerCase().includes('jeans') ||
                entity.description.toLowerCase().includes('jacket')
              )
            );
  
            const itemTypes = clothesLabels.map(label => label.description);
            console.log('Detected clothes-related item types:', itemTypes);
          } else {
            console.error(response.data.responses);
          }
        } else {
          console.error('No response received from the Vision API.');
        }
      };
    } catch (error) {
      console.error('Error analyzing image:', error);
    }
  };

  return (
    <div className="w-screen h-screen bg-white flex flex-col items-center justify-center">
        <span className="text-black font-open_sans text-2xl font-bold">
            LOCATE YOUR NEXT ADVENTURE
        </span>
        <div className="flex flex-row justify-center items-center gap-10">
            <div className="flex flex-col items-start justify-start h-full mt-16">
                <button
                    className="w-full text-black bg-white rounded-sm mt-8 hover:bg-black hover:text-white border-2 border-black hover:border-transparent transition duration-800 ease-in-out focus:outline-none"
                    onClick={() => {
                        analyzeImage();
                    }}
                >
                    ENABLE LOCATION SETTINGS
                </button>
            </div>
        </div>
    </div>
);
};

export default Vision;