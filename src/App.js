import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Coupons from './components/Coupons';
import RootLayout from './components/Layout/Root'
import Meals from './components/Meals/Meals';
import Orders from './components/Orders';

const router=createBrowserRouter(
  [
    {
      path: '/',
      element: <RootLayout/>,
      children:
      [
        {index: true, element: <Meals/>},
        {path: 'orders', element: <Orders/>},
        {path: 'coupons', element: <Coupons/>}
      ]
    }
  ]
)

function App()
{
  return <RouterProvider router={router}/>
}

export default App