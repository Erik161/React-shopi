import { useRoutes, BrowserRouter } from 'react-router-dom'
import Home from './Pages/Home'
import MyAccount from './Pages/MyAccount'
import MyOrder from './Pages/MyOrder'
import MyOrders from './Pages/MyOrders'
import NotFound from './Pages/NotFound'
import SignIn from './Pages/SignIn'
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
    <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>
  )
}

export default App
