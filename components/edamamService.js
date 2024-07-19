import axios from 'axios';

const APP_ID = 'a3c97957';
const APP_KEY = '74ad176c62abcded72ff426dcced8114';

const baseURL = 'https://api.edamam.com/api/nutrition-data';

const getNutritionData = async (query) => {
  try {
    const response = await axios.get(baseURL, {
      params: {
        app_id: APP_ID,
        app_key: APP_KEY,
        ...query  // Additional query parameters, e.g., {ingr: '1 large apple'}
      }
    });
    return response.data;
  } catch (error) {
    console.error('Error fetching nutrition data:', error);
    throw error;
  }
};

export { getNutritionData };