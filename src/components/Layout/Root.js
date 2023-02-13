import { useState } from "react";
import { Outlet } from "react-router-dom";
import Header from "./Header";
import Cart from "../Cart/Cart";

const RootLayout = () =>
{
    const [cartIsShown, setCartIsShown] = useState(false)
    const showCartHandler = () => setCartIsShown(true)
    const hideCartHandler = () => setCartIsShown(false)

    return (
        <>
            {cartIsShown && <Cart onClose={hideCartHandler} />}
            <Header onShowCart={showCartHandler} />
            <Outlet/>
        </>
    );
}

export default RootLayout