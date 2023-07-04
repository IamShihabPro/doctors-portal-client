import Main from "../../Layout/Main";
import { createBrowserRouter } from "react-router-dom";
import Home from "../../pages/Home/Home/Home";
import Login from "../../pages/Login/Login";
import Appoinment from "../../pages/Appoinment/Appoinment/Appoinment";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/appoinment',
                element: <Appoinment></Appoinment>
            },
        ]
    }
])

export default router;