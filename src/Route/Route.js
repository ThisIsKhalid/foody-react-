import { createBrowserRouter } from "react-router-dom";
import About from "../components/About";
import Home from "../components/Home";
import Layout from "../components/Layout";
import Meals from "../components/Meals";
import MealsCategories from "../components/MealsCategories";




const router = createBrowserRouter([
    {
        path: '/',
        element: <Layout></Layout>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: 'home',
                element: <Home></Home>
            },
            {
                path: 'meals',
                loader: () => fetch('https://www.themealdb.com/api/json/v1/1/categories.php'),
                element: <MealsCategories></MealsCategories>
            },
            {
                path: '/meals/:categories',
                loader: ({params}) => fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${params.categories}`),
                element: <Meals></Meals>
            },
            {
                path: 'about',
                element: <About></About>
            },
        ]
    }
])

export default router;