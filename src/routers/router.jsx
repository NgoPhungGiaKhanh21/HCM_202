import { createBrowserRouter, Navigate } from "react-router-dom";
import RootLayout from "../page/RootLayout";
import Home from "../page/Home";
import Game from "../game/Game";
import Podcast from "../page/Podcast";
const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      { path: "", element: <Home /> },
      { path: "game", element: <Game /> },
      { path: "podcast", element: <Podcast /> },
    ],
  },
]);
export default router;
