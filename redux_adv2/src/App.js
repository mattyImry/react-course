import { useSelector, useDispatch } from "react-redux";

import Cart from "./components/Cart/Cart";
import Layout from "./components/Layout/Layout";
import Products from "./components/Shop/Products";
import { useEffect } from "react";
import { uiActions } from "./store/ui-slice";

function App() {
    const showCart = useSelector((state) => state.ui.cartIsVisible);
    const cart = useSelector((state) => state.cart);
    const notification = useSelector((state) => state.ui.showNotification);
    const dispatch = useDispatch();
    useEffect(() => {
        const sendCartData = async () => {
            dispatch(
                uiActions.showNotification({
                    status: "pending",
                    title: "Sending...",
                    message: "Sending cart data",
                })
            );
            const response = await fetch(
                "https://react-food-app-32373-default-rtdb.europe-west1.firebasedatabase.app/cart.json",
                { method: "PUT", body: JSON.stringify(cart) }
            );

            if (!response.ok) {
                throw new Error("Sending cart data failed");
            }
            dispatch(
                uiActions.showNotification({
                    status: "success",
                    title: "Success!",
                    message: "Send cart data successfully",
                })
            );

            sendCartData().catch((error) => {
                dispatch(
                    uiActions.showNotification({
                        status: "error",
                        title: "Error!",
                        message: "Sending cart data failed!",
                    })
                );
            });
        };
    }, [cart, dispatch]);
    return (
        <Layout>
            {showCart && <Cart />}
            <Products />
        </Layout>
    );
}

export default App;
