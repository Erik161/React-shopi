import { useRoutes, BrowserRouter } from 'react-router-dom'
import { ShoppingCartProvider } from './Context'
import Home from './Pages/Home'
import MyAccount from './Pages/MyAccount'
import MyOrder from './Pages/MyOrder'
import MyOrders from './Pages/MyOrders'
import NotFound from './Pages/NotFound'
import SignIn from './Pages/SignIn'
import NavBar from './Components/NavBar'
import './App.css'


const AppRoutes = () => {

  let routes = useRoutes([
    {path:'/', element: <Home />},
    {path:'/my-account', element: <MyAccount />},
    {path:'/my-order', element: <MyOrder />},
    {path:'/my-orders', element: <MyOrders />},
    {path:'/*', element: <NotFound />},
    {path:'/sign-in', element: <SignIn />},
  ])

  return routes
}



const App = () => {

  return (
    <ShoppingCartProvider>
      <BrowserRouter>
        <AppRoutes />
        <NavBar />
      </BrowserRouter>
    </ShoppingCartProvider>
  )
}

export default App
