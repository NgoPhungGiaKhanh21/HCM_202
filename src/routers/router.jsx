import { createBrowserRouter, Navigate } from "react-router-dom";
import RootLayout from "../page/RootLayout";
import Home from "../page/Home";
import Game from "../game/Game";
import Podcast from "../page/Podcast";
import Notebook from "../components/Notebook";
import BookSection from "../components/Book/BookSection";
import TimeLine from "../page/Timeline";
import TakeQuiz from "../page/TakeQuiz";
import Introduction from "../page/Introduction";
import QAPage from "../page/Q&A";
import ThankYouPage from "../page/ThankYou";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      { path: "", element: <Home /> },
      { path: "game", element: <Game /> },
      { path: "podcast", element: <Podcast /> },
      { path: "notebook", element: <Notebook /> },
      { path: "book", element: <BookSection /> },
      { path: "timeline", element: <TimeLine /> },
      { path: "quiz", element: <TakeQuiz /> },
      { path: "introduction", element: <Introduction /> },
      { path: "qa", element: <QAPage /> },
      { path: "thank-you", element: <ThankYouPage /> },
    ],
  },
]);

export default router;
