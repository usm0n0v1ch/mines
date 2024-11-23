import { createBrowserRouter } from "react-router-dom";
import { HomePage } from "../pages/HomePage";
import { CasesPage } from "../pages/CasesPage";
import { MinesPage } from "../pages/MinesPage";
import { RootTemplate } from "../template/RootTemplate";
export const router = createBrowserRouter([
    {
        path: "/",
        element: <RootTemplate/>,
        children: [
            {
                path: "/",
                element: <HomePage/>
            },
            {
                path: "/cases",
                element: <CasesPage/>
            },
            {
                path: "/mines",
                element: <MinesPage/>
            }
        ]
    }

])

