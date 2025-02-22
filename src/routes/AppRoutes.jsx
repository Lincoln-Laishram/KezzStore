import { createBrowserRouter, Link } from "react-router-dom";
import App from "../App";
import { About } from "../Pages/About";
import { Terms } from "../Pages/Term";
import { DiamondPage } from "../Pages/DiamondPage";
import { SmallPack } from "../Components/SmallPack";
import { Weekly } from "../Components/Weekly";
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
    },
    {
        path:'/smallPack',
        element:<SmallPack/>
    },
    {
        path:'/weeklyPass',
        element:<Weekly/>
    }
])
export default router