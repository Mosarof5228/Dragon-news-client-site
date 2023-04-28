import { createBrowserRouter } from "react-router-dom";
import Layout from "../layout/Layout";
import NewsLayout from "../layout/NewsLayout";
import Category from "../pages/Home/Category/Category";
import Home from "../pages/Home/Home/Home";
import News from "../pages/News/News/News";



const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout></Layout>,
        children: [
            {
                path: '/',
                element: <Home></Home>

            },
            {
                path: 'category/:id',
                element: <Category></Category>,
                loader: ({ params }) => fetch(`http://localhost:5000/categories/${params.id}`)
            }

        ]
    },
    {
        path: 'news/:id',
        element: <NewsLayout></NewsLayout>,
        children: [

        ]
    }
]);

export default router
