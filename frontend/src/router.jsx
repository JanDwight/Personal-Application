import { createBrowserRouter } from "react-router-dom";
import Login from "./views/login";
import Dashboard from "./views/dashboard";
import GuestLayout from "./components/layouts/guestLayout";
import GroceryPriceList from "./views/groceryPriceList";
import DefaultLayout from "./components/layouts/defaultLayout";

const router = createBrowserRouter ([
  {
    path: '/landingpage',
    element: < GuestLayout />,
    children: [
      {
        path: 'login',
        element: <Login />
      }
    ]
  },

  {
    path: '/defaultlayout',
    element: <DefaultLayout />,
    children: [
      {
        path: 'dashboard',
        element: <Dashboard />
      },
    
      {
        path: 'grocerypricelist',
        element: <GroceryPriceList />
      }
    ]
  },
])

export default router;
