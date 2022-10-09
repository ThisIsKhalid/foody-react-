import { createBrowserRouter } from "react-router-dom";
import About from "../components/About";
import Home from "../components/Home";
import Layout from "../components/Layout";
import Meals from "../components/Meals";




const router = createBrowserRouter([
    {
        path: '/',
        element: <Layout></Layout>,
        children: [
            {
                path: 'home',
                element: <Home></Home>
            },
            {
                path: 'about',
                element: <About></About>
            },
            {
                path: 'meals',
                element: <Meals></Meals>
            }
        ]
    }
])

export default router;