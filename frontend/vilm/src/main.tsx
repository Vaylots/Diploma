import ReactDOM from "react-dom/client";
import { Home } from "./pages/Home";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import { Films } from "./pages/Films";
import { Film } from "./pages/Films/Film";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "films",
    element: <Films />,
  },
  {
    path: "films/:filmId",
    element: <Film />,
  },
]);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <RouterProvider router={router} />
);
