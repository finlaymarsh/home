import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home/Home";
import DesignPatterns from "./pages/DesignPatterns/DesignPatterns";
import Root from "./pages/Root/Root";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/design-patterns", element: <DesignPatterns /> },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
