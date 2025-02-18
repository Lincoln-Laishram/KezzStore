import { createBrowserRouter, Link } from "react-router-dom";
import App from "../App";
import { About } from "../Pages/About";
import { Terms } from "../Pages/Term";
import { DiamondPage } from "../Pages/DiamondPage";
const router = createBrowserRouter([
    {
        path: "/",
        element: <App/>,
    },
    {
        path: '/aboutPage',
        element: <About/>
    },
    {
        path:'/termsAndConditions', 
        element:<Terms/>
    },
    {
        path:'/diamondPage',
        element:<DiamondPage/>
    }
])
export default router