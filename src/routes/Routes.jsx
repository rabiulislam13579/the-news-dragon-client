import { Navigate, createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
import Home from "../pages/Home/Home/Home";
import Category from "../pages/Home/Category/Category";
import NewsLayout from "../layouts/NewsLayout";
import News from "../pages/News/News/News";
import LogInLayout from "../layouts/LogInLayout";
import LogIn from "../pages/LogIn/LogIn/LogIn";
import Register from "../pages/LogIn/Register/Register";
import PrivateRoute from "./privateRoute";

const router = createBrowserRouter([
    {
        path: "/",
        element: <LogInLayout></LogInLayout>,
        children: [
            {
                path: "/",
                element: <Navigate to="/category/0"></Navigate>

            },
            {
                path: "login",
                element: <LogIn></LogIn>
            },
            {
                path: "register",
                element: <Register></Register>
            }

        ]
    },
    {
        path: "category",
        element: <Main></Main>,
        children: [

            {
                path: ":id",
                element: <Category></Category>,
                loader: ({ params }) => fetch(`https://the-news-dragon-server-rabiulislam13579.vercel.app/categories/${params.id}`)

            }
        ]
    },
    {
        path: "news",
        element: <NewsLayout></NewsLayout>,
        children: [
            {
                path: ":id",
                element: <PrivateRoute><News></News></PrivateRoute>,
                loader: ({ params }) => fetch(`https://the-news-dragon-server-rabiulislam13579.vercel.app/news/${params.id}`)
            }
        ]
    }
])
export default router;