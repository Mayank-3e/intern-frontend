import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import RootLayout from './components/Layout/Root'

const router=createBrowserRouter(
  [
    {
      path: '/',
      element: <RootLayout/>
    }
  ]
)

function App()
{
  return <RouterProvider router={router}/>
}

export default App