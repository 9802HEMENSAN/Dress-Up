

import { Box, Button, Center, FormControl, FormHelperText, FormLabel, Heading, Input, Select, Stack } from '@chakra-ui/react'
import axios from 'axios';
import React, { useState } from 'react';
import { Link as RouterLink } from 'react-router-dom';
const initState={
    src: "",
   Category: "men",
   discountPrice: "",
   MRP: "",
   discount: "", 
}

const AdminForm = () => {
  const [formState, setformState] = useState(initState);


  const handleChange=(e)=>{
    const {name,value, type } =e.target;
    
    const val= type==="number" ? Number(value) : value ;
   setformState({...formState, [name] : val  })
  }

  const handleSubmit=(e)=>{
    e.preventDefault();

    console.log(formState);
    axios({
        method : "post",
        url : `http://localhost:8080/${formState.Category}`,
        data : {
            ...formState
        }
    }).then((res)=> console.log(res.data));
  }

  const { src, Category, MRP, discount, discountPrice  } = formState 

  return (
    <Box>
          
        <Heading m = { 5 } fontSize={26} >Welcome to Admin Panel </Heading>
        <Heading fontSize={18}> Add a new Product</Heading>

        <Center>
            <form  onSubmit={handleSubmit}>
            <FormLabel  >Select Category </FormLabel>
            <Select name= "Category"  value={Category}  type= "text" onChange={handleChange} >
                <option value='men'>men</option>
                <option value='women'>women</option>
                <option value='Kids'>Kids</option>
            </Select>
            <FormControl w={1000}>
                <FormLabel>Image Url</FormLabel>
                <Input type='text' 
                name="src"
                value={src}
                onChange={handleChange}
                />
           </FormControl>
            <FormControl w={1000}>
                <FormLabel>  After discount Price</FormLabel>
                <Input type='number'
                 name="discountPrice"
                 value={discountPrice}
                 onChange={handleChange}
                />
           </FormControl>

            <FormControl w={1000}>
                <FormLabel> Real Price</FormLabel>
                <Input type='number'
                 name="MRP"
                 value={MRP}
                 onChange={handleChange}
                />
           </FormControl>
            <FormControl w={1000}>
                <FormLabel>Discount </FormLabel>
                <Input type='number'
                 name="discount"
                 value={ discount}
                 onChange={handleChange}
                />
           </FormControl>
               <Button bg={"tomato"} m={10} type="submit" >Add New Product </Button>
            </form>
        </Center>
    </Box>
  )
}

export default  AdminForm

// "id": 1,
// "href": "https://www.limeroad.com/blue-cotton-shah-fabrics-p13308156?imgIdx=3&src_id=navdeskSarees__001",
// "src": "https://img3.junaroad.com/uiproducts/13308156/zoom_0-1491993425.jpg",
// "Category": "Saree",
// "discountPrice": "1049",
// "MRP": "2100",
// "discount": "50% off",