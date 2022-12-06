
import { createBrowserRouter } from 'react-router-dom';
import Route from '../Layout/Route';
import Home from '../Home/Home';
import Courses from '../Courses/Courses';
import { CourseDetails } from '../Courses/CourseDetails';
import RoutesCourse from './RoutesCourse';
import LogIn from '../Security/LogIn';
import Register from '../Security/Register';
import ErrorPage from '../Error/ErrorPage';
import Checkout from '../Checkout/Checkout';
import PrivateRoute from './PrivateRoute';
import FAQ from '../FAQ';
import Blog from '../Blog';
export const router = createBrowserRouter([{
    path: "/",
    element: <Route></Route>,
    errorElement: <ErrorPage />,
    children: [
        {
            path: '/',
            element: <Home />,
        },
        {
            path: '/home',
            element: <Home></Home>
        },
        {
            path: '/Login',
            element: <LogIn></LogIn>
        },
        {
            path: '/Register',
            element: <Register></Register>
        },

        {
            path: '/course/:id',
            element: <CourseDetails></CourseDetails>,
            loader: async ({ params }) => {
                return fetch(`https://course-server-side.vercel.app/course/${params.id}`);
            }
        },
        {
            path: "/checkout/:id",
            element: <PrivateRoute><Checkout></Checkout></PrivateRoute>,
            loader: async ({ params }) => {
                return fetch(`https://course-server-side.vercel.app/course/${params.id}`);
            }
        },

        {
            path: "/faq",
            element: <FAQ></FAQ>
        },
        {
            path: "/blog",
            element: <Blog></Blog>
        }


    ]

},
{
    path: "/course",
    loader: () => fetch("https://course-server-side.vercel.app/allCourse"),
    element: <RoutesCourse> </RoutesCourse>,
    errorElement: <ErrorPage />,
    children: [
        {
            path: "/course",
            loader: () => fetch("https://course-server-side.vercel.app/allCourse"),
            element: <Courses></Courses>,

        }
    ]
}


])