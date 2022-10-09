import React from 'react';
import { Link } from 'react-router-dom';


const MealCategories = ({meal}) => {
    const {strCategoryThumb, strCategory, strCategoryDescription} = meal;
    return (
        <Link 
        to={strCategory}
        className='border-2 text-center rounded-md shadow-md'>
            <div className='flex items-center justify-center p-5'>
                <img src={strCategoryThumb} alt="" />
            </div>
            <div className='mt-5'>
                <h1 className='text-3xl font-bold text-violet-500'>{strCategory}</h1>
                <p className='text-gray-600'>{`${strCategoryDescription.slice(0, 100)} ...`}</p>
            </div>
        </Link>
    );
};

export default MealCategories;