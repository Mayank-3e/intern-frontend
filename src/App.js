import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Coupons from './components/Coupons';
import RootLayout from './components/Layout/Root'
import Meals from './components/Meals/Meals';
import Orders, { loader } from './components/Orders';

const router=createBrowserRouter(
  [
    {
      path: '/',
      element: <RootLayout/>,
      children:
      [
        {index: true, element: <Meals/>},
        {path: 'orders', element: <Orders/>, loader: loader},
        {path: 'coupons', element: <Coupons/>, loader: loader}
      ]
    }
  ]
)

function App()
{
  return <RouterProvider router={router}/>
}

export default App