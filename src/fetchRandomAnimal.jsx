import axios from 'axios';

const fetchRandomAnimal = async (apiKey, animalType) => {
  try {
    const response = await axios.get(`https://api.thecatapi.com/v1/images/search`, {
      params: {
        api_key: apiKey,
        limit: 1, // Fetch only one random image
        mime_types: 'jpg,png', // Specify the image format
        size: 'small', // Specify the image size
        type: 'gif' // Specify the image type
      }
    });

    // Extract the URL of the image from the response data
    const imageUrl = response.data[0].url;
    return imageUrl;
  } catch (error) {
    console.error('Error fetching data:', error);
    return null;
  }
};

export default fetchRandomAnimal;
