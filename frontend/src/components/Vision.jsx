import React, { useState } from 'react';
import axios from 'axios';

const Vision = () => {
// Google Cloud Vision API Labelling
const analyzeImage = async () => {
    try {
      const formData = new FormData();
      const file = await fetch('./guy.jpg');
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
                    maxResults: 50,
                  },
                ],
              },
            ],
          }
        );
  
        if (response.data.responses && response.data.responses.length > 0) {
          const labels = response.data.responses[0].labelAnnotations;
  
          if (labels) {
            // Filter labels based on specific terms
            const filteredLabels = labels.filter(label =>
              label.description.toLowerCase().includes('outerwear') ||
              label.description.toLowerCase().includes('sports') ||
              label.description.toLowerCase().includes('jacket') ||
              label.description.toLowerCase().includes('sports')
            );
  
            const itemTypes = filteredLabels.map(label => label.description);
            console.log('Filtered item types:', itemTypes);
          } else {
            console.error('No labels detected.');
          }
        } else {
          console.error('No response received from the Vision API.');
        }
      }
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