import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import RootLayout from './components/Layout/Root'
import Meals from './components/Meals/Meals';

const router=createBrowserRouter(
  [
    {
      path: '/',
      element: <RootLayout/>,
      children:
      [
        {index: true, element: <Meals/>}
      ]
    }
  ]
)

function App()
{
  return <RouterProvider router={router}/>
}

export default App