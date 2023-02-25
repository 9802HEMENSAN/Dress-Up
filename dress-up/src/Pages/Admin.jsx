

import { Box, Button } from '@chakra-ui/react'
import React, { useState } from 'react'
import AdminDashboard from './AdminDashboard'
import AdminForm from './AdminForm'

const Admin = () => {
  const [isFormVisible, setIsFormVisible] = useState(false)
  return (
    <Box>
        <Button bg="pink.600"
        onClick={() => setIsFormVisible(!isFormVisible)} >{isFormVisible ? "Go to Dashboard" : "Add New Products"}</Button>
       {isFormVisible ? <AdminForm/> : <AdminDashboard/> }
    </Box>
    )
}

export default Admin