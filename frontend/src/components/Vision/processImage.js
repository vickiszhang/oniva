async function processImage(imageBase64) {
    const apiKey = "AIzaSyBFEi_rdHLDWPLHyNutE9ICws2WOJPPyVE"; // Replace with your Google Cloud API key
    const endpoint = `https://vision.googleapis.com/v1/images:annotate?key=${apiKey}`;

    const requestBody = JSON.stringify({
        requests: [
            {
                image: { content: imageBase64 },
                features: [
                    { type: "LABEL_DETECTION", maxResults: 200 },
                ],
            },
        ],
    });

    const response = await fetch(endpoint, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: requestBody,
    });

    const data = await response.json();
    return data.responses[0];
}

export { processImage };
