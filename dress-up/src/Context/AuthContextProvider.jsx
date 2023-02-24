

import React, {   createContext, useState } from 'react'


export const AuthContext=createContext( );

const AuthContextProvider = ({children}) => {
  const [state, setState] = useState({
                                 isAuth : false,
                                 token : null 
                                         })

    const Login=(token)=>{
        setState({
            isAuth : true,
            token : token
        })
    }

    const Logout = ()=> {
        setState({
            ...state,
            isAuth :   false ,
            token : null 
        })
    }

  return (
     <AuthContext.Provider value={{authState : state, Login , Logout}}> 
        {children}
     </AuthContext.Provider>
  )
}

export default AuthContextProvider