import { createBrowserRouter } from "react-router";
import MainLayout from "../Layouts/MainLayout";
import ErrorPage from "../Pages/ErrorPage";
import Home from "../Pages/Home";
import App from "../App";
import AllApp from "../Pages/AllApp";
import Installation from "../Pages/Installation";
import AppDetails from "../Pages/AppDetails";
const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    errorElement:<ErrorPage/>,
    hydrateFallbackElement:<p>loading...</p>,
    children:[
        {
            index:true,
            element:<Home></Home>
        },
        {
            path:"/App",
            element:<AllApp/>
        },
        {
            path:"/Installation",
            element:<Installation/>
        }
        ,
        {
            path:"/App/:Id",
            element:<AppDetails/>
        }
        
    ]
},
{
    path:"*",
    element:<ErrorPage/>
}
]);
export default router