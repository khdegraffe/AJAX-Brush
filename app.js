// fetch("https://swapi.tech/api/people/1/")
//   .then((res) => {
//     console.log("RESOLVED!!", res);
//     return res.json();
//   })
//   .then((data) => {
//     console.log(data.result.properties);
//   })
//   .catch((e) => {
//     console.log("ERROR!", e);
//   });

// const loadStarWarsPeople = async () => {
//   try {
//     const res = await fetch("https://swapi.tech/api/people/1/");
//     const data = await res.json();
//     console.log(data.result.properties);
//     const res2 = await fetch("https://swapi.tech/api/people/2/");
//     const data2 = await res2.json();
//     console.log(data2.result.properties);
//   } catch (e) {
//     console.log("ERROR!!!", e);
//   }
// };

// loadStarWarsPeople();

// axios
//   .get("https://swapi.tech/api/people/1/")
//   .then((res) => {
//     console.log("RESPONSE: ", res);
//   })
//   .catch((e) => {
//     console.log("ERROR: ", e);
//   });

// const getStarWarsPerson = async (id) => {
//   try {
//     const res = await axios.get(`https://swapi.tech/api/people/${id}/`);
//     console.log(res.data.result.properties);
//   } catch (e) {
//     console.log("ERROR", e);
//   }
// };

// getStarWarsPerson(5);
// getStarWarsPerson(10);

const query =
  "turkey sausage, 2 eggs, 1 cup of sushi rice, and cherry tomatoes";
const getNutritionInfo = async () => {
  try {
    const res = await axios.get("https://api.calorieninjas.com/v1/nutrition", {
      params: { query },
      headers: { "X-Api-Key": "ZbLSExKUa4wciJcSyH4eUA==cfb0cUtuJTileY18" },
    });

    const data = res.data;
    return data;
  } catch (error) {
    if (error.response) {
      // Server responded with a status other than 2xx
      console.error("Error: ", error.response.data);
    } else {
      // Something Else went wrong (Network, etc.)
      console.log("Error: ", error.message);
    }

    return null;
  }
};

// getNutritionInfo();

(async () => {
  const nutritionData = await getNutritionInfo();

  if (nutritionData) {
    // Example: just log the whole object
    console.log(nutritionData);

    // Example: loop through foods
    nutritionData.items.forEach((item) => {
      console.log(`${item.name}: ${item.calories} calories`);
    });

    // Example: total calories
    const totalCalories = nutritionData.items.reduce(
      (sum, item) => sum + item.calories,
      0
    );
    console.log("Total calories:", Math.round(totalCalories));
  } else {
    console.log("Could not fetch nutrition data.");
  }
})();
