import AuthPage from "./pages/AuthPage";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import NotFound from "./pages/NotFound";
import { useContext } from "react";
import { AuthContext } from "./Context/AuthContext";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

function App() {
  const { isLoggedIn } = useContext(AuthContext);

  const router = createBrowserRouter([
    {
      path: "/",
      element: <HomePage />,
    },
    {
      path: "/Auth",
      element: <AuthPage />,
    },
    {
      path: "/*",
      element: <NotFound />,
    },
  ]);

  return (
    <>
       <RouterProvider router={router} />
    </>
  );
}

export default App;
