
 
import React from 'react'
import { Route, Routes } from 'react-router-dom'
import PrivateRoute from '../Components/PrivateRoute'
import AddressPage from '../Pages/AddressPage'
import Admin from '../Pages/Admin'
 
import CartPage from '../Pages/CartPage'
 
import Home from '../Pages/Home'
import Kids from '../Pages/Kids'
import Login from '../Pages/Login'
import Men from '../Pages/Men'
import NotFound from '../Pages/NotFound'
import PaymentPage from '../Pages/PaymentPage'
import SignUp from '../Pages/SignUp'
import SingleUserPage from '../Pages/SingleUserPage'
import Women from '../Pages/Women'

const AllRoutes = () => {
  return (
    <div>     
        <Routes>
            <Route path="/" element={<Home/>}></Route>
            <Route path="/login" element={<Login/>}></Route>
            <Route path="/register" element={<SignUp/>}></Route>
            <Route path="/men" element={<Men/>}></Route>
            <Route path="/women" element={<Women/>}></Route>
            <Route path="/kids" element={<Kids/>}></Route>
            <Route path="/men/:id" element={<SingleUserPage/>}></Route>
            <Route path="/women/:id" element={<SingleUserPage/>}></Route>
            <Route path="/kids/:id" element={<SingleUserPage/>}></Route>
            
            <Route path="*" element={<NotFound/>}></Route>
            
            <Route path="/cart" element={       
                      <CartPage/>  
            }></Route>
            <Route path="/address" element={       
                      <AddressPage/>  
            }></Route>
            <Route path="/payment" element={       
                      <PaymentPage/>  
            }></Route>
            <Route path="/admin" element={       
                      <Admin/>  
            }></Route>

        </Routes>
    </div>
  )
}

export default AllRoutes