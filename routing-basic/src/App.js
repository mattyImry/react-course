//COMMENTED OUT CODE IS AALTERNATIVE WAY BEOFRE UPDATE ON ROUTER

import {
    createBrowserRouter,
    //createRoutesFromElements,
    //Route,
    RouterProvider,
} from "react-router-dom";
import HomePage from "./pages/Home";
import Products from "./pages/Products";
import RootLayout from "./pages/Root";
import ErrorPage from "./pages/Error";
import ProductDetailPage from "./pages/ProductDetailPage";

// const routesDefinition = createRoutesFromElements(
//     <Route>
//         <Route path="/" element={<HomePage />} />
//         <Route path="/products" element={<Products />} />
//     </Route>
// );
//const router = createBrowserRouter(routesDefinition);

const routerHome = createBrowserRouter([
    {
        path: "/",
        element: <RootLayout />,
        errorElement: <ErrorPage />,
        children: [
            { path: "/", element: <HomePage /> },
            { path: "/products", element: <Products /> },
            { path: "/products/:productId", element: <ProductDetailPage /> },
        ],
    },
]);

function App() {
    return <RouterProvider router={routerHome} />;
}

export default App;
