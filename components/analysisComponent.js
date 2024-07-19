import React, { useState } from 'react';
import { getNutritionData } from './edamamService';
import { Box ,Link, Button} from '@mui/material';

const NutritionAnalysis = () => {
  const [query, setQuery] = useState('');
  const [nutritionData, setNutritionData] = useState(null);

  const handleSearch = async () => {
    try {
      const data = await getNutritionData({ ingr: query });
      setNutritionData(data);
    } catch (error) {
      console.error('Error fetching nutrition data:', error);
    }
  };

  return (
    <div className = "acontent">
          <h1> Check your food  </h1>
          <h3> Put in the ingredients for your meal to check out its weight, calories, and Diet Labels. </h3>
      <input type="text" value={query} onChange={(e) => setQuery(e.target.value)} />
      <button onClick={handleSearch}>Search</button>

      {nutritionData && (
        <div className='acontent'>
            <Box > 
            <h2>Nutrition Information</h2>

          <p>Calories: {nutritionData.calories}</p>
          <p>Diet Labels: {nutritionData.dietLabels}</p>
          {/* Display other nutrition information as needed */}
            </Box>

        </div>
      )}
                      <Link href="/" >
                     <Button
                        variant="contained"
                        color="primary"
                        style={{ position: 'absolute', top: 10, left: 0,backgroundColor: '#FB6F92'}}>
                                Home  </Button>
                </Link>
    </div>
    
    
  );
 
};
const Note = () =>{
  return <div className='note'>
    <span> Calories: {nutritionData.calories}</span>
  </div>
}
export default NutritionAnalysis;