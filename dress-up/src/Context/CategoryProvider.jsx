import React, { createContext, useState } from 'react'

export const CategoryContext=createContext();

const CategoryProvider = ({children}) => {
   const [category, setCategory] = useState("men");

  return (
     <CategoryContext.Provider value={{category,setCategory}}>
      {children}
     </CategoryContext.Provider>
  )
}

export default CategoryProvider