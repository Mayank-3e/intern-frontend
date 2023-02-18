import { useState } from "react";
import { Outlet, useNavigation } from "react-router-dom";
import Header from "./Header";
import Cart from "../Cart/Cart";
import LoadingBar from "react-top-loading-bar";

const RootLayout = () =>
{
    const [cartIsShown, setCartIsShown] = useState(false)
    const showCartHandler = () => setCartIsShown(true)
    const hideCartHandler = () => setCartIsShown(false)
    const navigation=useNavigation()

    return (
        <>
            {cartIsShown && <Cart onClose={hideCartHandler} />}
            <Header onShowCart={showCartHandler} />
            <LoadingBar
                color='#f11946'
                progress={navigation.state=="loading"?40:100}
                waitingTime={300}
            />
            <Outlet/>
        </>
    );
}

export default RootLayout