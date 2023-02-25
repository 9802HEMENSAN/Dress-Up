

import { Box, Button, Center, FormControl, FormHelperText, FormLabel, Heading, Input, Select, Stack } from '@chakra-ui/react'
import React from 'react';



const AdminPage = () => {
  return (
    <Box>
        <Button>Switch to Dashboard </Button>
        <Heading fontSize={26} >Welcome to Admin Panel </Heading>
        <Heading fontSize={18}> Add a new Product</Heading>

        <Center>
            <form  >
            <FormLabel  >Select Category </FormLabel>
            <Select >
                <option value='men'>men</option>
                <option value='women'>women</option>
                <option value='Kids'>Kids</option>
            </Select>
            <FormControl w={1000}>
                <FormLabel>Image Url</FormLabel>
                <Input type='text' />
           </FormControl>
            <FormControl w={1000}>
                <FormLabel> Original Price</FormLabel>
                <Input type='number' />
           </FormControl>

            <FormControl w={1000}>
                <FormLabel>  Price</FormLabel>
                <Input type='number' />
           </FormControl>
            <FormControl w={1000}>
                <FormLabel>Discount </FormLabel>
                <Input type='number' />
           </FormControl>
               <Button bg={"tomato"}>Add New Product </Button>
            </form>
        </Center>
    </Box>
  )
}

export default AdminPage

// "id": 1,
// "href": "https://www.limeroad.com/blue-cotton-shah-fabrics-p13308156?imgIdx=3&src_id=navdeskSarees__001",
// "src": "https://img3.junaroad.com/uiproducts/13308156/zoom_0-1491993425.jpg",
// "Category": "Saree",
// "discountPrice": "1049",
// "MRP": "2100",
// "discount": "50% off",