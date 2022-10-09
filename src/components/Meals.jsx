import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Meal from './Meal';

const Meals = () => {
    const {meals} = useLoaderData();
    return (
        <div>
            {
                meals.map(meal => <Meal
                key={meal.idMeal}
                meal={meal}
                ></Meal>)
            }
        </div>
    );
};

export default Meals;