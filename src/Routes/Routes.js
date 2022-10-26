import Blog from "../Components/Blog/Blog";
import Checkout from "../Components/Checkout/Checkout";
import AllCategories from "../Components/Courses/AllCategories";
import CoursesByCategoryList from "../Components/Courses/CoursesByCategoryList";
import Home from "../Components/Home/Home";
import Login from "../Components/Log/Login";
import Register from "../Components/Log/Register";
import Error from "../Components/Shared/Error";
import Main from "../Layout/Main";
import { allCategories, allCourses, singleCategory } from "./Loader";

const { createBrowserRouter } = require("react-router-dom");

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        errorElement: <Error></Error>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/home',
                element: <Home></Home>
            },
            {
                path: '/categories',
                loader: allCategories,
                element: <AllCategories></AllCategories>,
                children: [
                    {
                        path: '/categories/:name',
                        loader: singleCategory,
                        element: <CoursesByCategoryList></CoursesByCategoryList>
                    }
                ]
            },
            {
                path: '/checkout',
                element: <Checkout></Checkout>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <Register></Register>
            },
            {
                path: '/blog',
                element: <Blog />
            },

        ]
    }
])

export default router;
