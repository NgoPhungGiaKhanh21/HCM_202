import { createBrowserRouter, Navigate } from "react-router-dom";
import RootLayout from "../layout/RootLayout";
import Home from "../page/Home";
import Game from "../game/Game";
const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      { path: "", element: <Home /> },
      { path: "game", element: <Game /> },
    ],
  },
]);
export default router;
