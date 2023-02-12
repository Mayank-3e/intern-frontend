import { useState } from "react";
import { Outlet } from "react-router-dom";
import Header from "./Header";

const RootLayout = () =>
{
    const [cartIsShown, setCartIsShown] = useState(false)
    const showCartHandler = () => setCartIsShown(true)
    const hideCartHandler = () => setCartIsShown(false)

    return (
        <>
            <Header onShowCart={showCartHandler} />
            <Outlet/>
        </>
    );
}

export default RootLayout