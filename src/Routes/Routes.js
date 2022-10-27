import Blog from "../Components/Blog/Blog";
import Checkout from "../Components/Checkout/Checkout";
import AllCategories from "../Components/Courses/AllCategories";
import CourseDetails from "../Components/Courses/CourseDetails";
import CoursesByCategoryList from "../Components/Courses/CoursesByCategoryList";
import FAQ from "../Components/FAQ/FAQ";
import Home from "../Components/Home/Home";
import Login from "../Components/Log/Login";
import Register from "../Components/Log/Register";
import Error from "../Components/Shared/Error";
import Thanks from "../Components/Thanks/Thanks";
import Main from "../Layout/Main";
import { allCategories, singleCategory, singleCourse } from "./Loader";
import PrivateRoute from "./PrivateRoute";

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
                path: '/courses/:id',
                loader: singleCourse,
                element: <CourseDetails></CourseDetails>
            },
            {
                path: '/checkout/:id',
                loader: singleCourse,
                element: <PrivateRoute><Checkout></Checkout></PrivateRoute>
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
            {
                path: '/faq',
                element: <FAQ />
            },
            {
                path: '/thanks',
                element: <Thanks />
            },

        ]
    }
])

export default router;
