//COMMENTED OUT CODE IS AALTERNATIVE WAY BEOFRE UPDATE ON ROUTER

import {
    createBrowserRouter,
    //createRoutesFromElements,
    //Route,
    RouterProvider,
} from "react-router-dom";
import HomePage from "./pages/Home";
import Products from "./pages/Products";

// const routesDefinition = createRoutesFromElements(
//     <Route>
//         <Route path="/" element={<HomePage />} />
//         <Route path="/products" element={<Products />} />
//     </Route>
// );
//const router = createBrowserRouter(routesDefinition);

const routerHome = createBrowserRouter([
    { path: "/", element: <HomePage /> },
    { path: "products", element: <Products /> },
]);

function App() {
    return <RouterProvider router={routerHome} />;
}

export default App;
