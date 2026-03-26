import './App.css'
import {createBrowserRouter,Route,Link,Outlet, RouterProvider} from 'react-router-dom'
import Home from './Pages/Home/Home.jsx'
import Users from './Pages/Users/Users.jsx'
import Products from './Pages/Products/Products.jsx'
import Navbar from './Components/Navbar/Navbar.jsx'
import Menu from './Components/Menu/Menu.jsx'
import Footer from './Components/Footer/Footer.jsx'
import User from './Pages/user/User.jsx'

function App() {
  
  const Layout = ()=>{
    return(
      <div className='main'>
      <Navbar />
      <div className='container'>
        <div className="menuContainer">
          <Menu />
          
        </div> 
        <div className="contentContainer">
          <Outlet />
        </div>

      </div>
      <Footer />

      </div>
    );
  }

  const rooter = createBrowserRouter([
    {element:<Layout />,children:[
    {path:"/",element:<Home />},
    {path:"/users",element:<Users />},
    {path:"/products",element:<Products />},
    {path:"/users/:id",element:<User />}
    ]}
  ])


  return(
    <RouterProvider router={rooter}/>
  );
}

export default App
