import React from 'react';
import { useLoaderData } from 'react-router-dom';
import MealCategories from './MealCategories';

const MealsCategories = () => {
    const {categories} = useLoaderData();


    return (
        <div className='mt-10'>
            <h1 className='text-4xl font-semibold text-center mb-5'>Select Your <span className='text-fuchsia-500 font-bold'>Favourite</span> Categories:</h1>
            <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5'>
                {
                    categories.map( meal => <MealCategories
                    key={meal.idCategory}
                    meal={meal}
                    ></MealCategories>)
                }
            </div>
        </div>
    );
};

export default MealsCategories;