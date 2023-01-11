import { createBrowserRouter } from "react-router-dom";
import Blog from "../../components/Blog/Blog";
import Carousel from "../../components/Carousel/Carousel";
import Category from "../../components/Category/Category";
import Courses from "../../components/Courses/Courses";
import EnrollLogin from "../../components/EnrollLogin/EnrollLogin";
import EnrollPage from "../../components/EnrollPage/EnrollPage";
import Errorpage from "../../components/ErrorPage/Errorpage";
import FAQ from "../../components/FAQ/FAQ";
import LogInPage from "../../components/LonInPage/LogInPage";
import RegistrationPage from "../../components/RegistrationPage/RegistrationPage";
import Main from "../../layout/Main";
import PrivateRoutes from "../PrivateRoutes/PrivateRoutes";

export const routes = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        errorElement: <Errorpage></Errorpage>,
        children: [
            {
                path: '/',
                element: <Carousel></Carousel>
            },
            {
                path: '/registration',
                element: <RegistrationPage></RegistrationPage>
            },
            {
                path: '/login',
                element: <LogInPage></LogInPage>
            },

            {
                path: '/courses',
                element: <Courses></Courses>,
                loader: ({ params }) => fetch(`https://easy-to-learn-server.vercel.app/courses`)

            },

            {
                path: '/faq',
                element: <FAQ></FAQ>
            },
            {
                path: '/blog',
                element: <Blog></Blog>
            },
            {
                path: '/category/:id',
                element: <Category></Category>,
                loader: ({ params }) => fetch(`https://easy-to-learn-server.vercel.app/category/${params.id}`)
            },
            {
                path:'/enrolllogin',
                element:<EnrollLogin></EnrollLogin>
            },
            {
                path: '/checkout',
                element: <EnrollPage></EnrollPage>,

            },
            {
                path: '/checkout/:id',
                element: <PrivateRoutes><EnrollPage></EnrollPage></PrivateRoutes>,
                loader: ({ params }) => fetch(`https://easy-to-learn-server.vercel.app/course/${params.id}`)

            }



        ]
    }
])