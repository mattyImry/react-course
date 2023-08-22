import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./pages/Home";
import Products from "./pages/Products";

const routerHome = createBrowserRouter([
    { path: "/", element: <HomePage /> },
    { path: "products", element: <Products /> },
]);

function App() {
    return <RouterProvider router={routerHome} />;
}

export default App;
