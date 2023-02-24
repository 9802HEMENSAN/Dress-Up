

import React, { useContext } from 'react'
import { Navigate } from 'react-router-dom';
import { AuthContext } from '../Context/AuthContextProvider'

const PrivateRoute = ({children}) => {

    const {authState} =useContext(AuthContext);

    // if(authState.token){
    //     return  <Navigate to = "/login" />
    // }

    return children;
}

export default PrivateRoute