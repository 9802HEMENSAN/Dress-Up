 import { Box, Button, Grid, GridItem, Heading, Image, Text } from '@chakra-ui/react'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
 import { Link as RouterLink } from 'react-router-dom'
 const CartPage = () => {
    const [data, setData] = useState([])
    const [total, setTotal] = useState(0);

   const getCartItems =async ()=> {
    try {
      return axios({
       method : "get" , 
       url : `http://localhost:8080/cart`,
      }).then((res) =>  setData(res.data))
    } catch (error) {
      console.log("err") ; 
    }
}  

const handleDelete = async (id)=>{
     return axios({
      method : "delete",
      url : `http://localhost:8080/cart/${id}`
     }).then(()=> getCartItems());
}

 
useEffect(() => {
  getCartItems()
}, [ ])

// Total
useEffect(()=>{
  let Total=0;
  data?.forEach((item)=>(
   Total+= (+item.discountPrice) * (+item.Quantity)
  ))
   setTotal(Total)
   console.log(typeof Total)
},[data])
 
 

const handleQuantity=(id, Quantity , val)=>{
    data.map((item, index)=> (
    item.id ===id ?   (Quantity = Quantity + val ) :  Quantity 
    ))
  axios.patch(`http://localhost:8080/cart/${id}`,{
    Quantity : Quantity
  }).then(()=> getCartItems())
   
}



   return (
    <Box> 
      <Heading>Cart Page</Heading>
     <Grid  gap={5}>
         {
          data?.map((cart)=>(
            <GridItem key={cart.id} border = {"1px solid red"} display = "flex"   >
              <Image src={cart.src} alt="cart image" h={300} w= {300} />
              <Box> 
               <Text fontSize={25}>{cart.Category}</Text>
               <Text fontSize={20}>Price : {cart.discountPrice}</Text>
               <Text fontSize={20}>discount :{`${cart.discount}% Off`}</Text>
               <Text fontSize={17}>{`Shipping`}</Text>
               <Text>International orders usually arrive within <br />
                   5–13 business days. We'll give you shipping    <br />
                    dates in checkout.</Text>
               {/* Buttons Quantity */}
               <Box>
                <Button isDisabled = {cart.Quantity===1} onClick={()=> handleQuantity(cart.id , cart.Quantity ,  -1)}>-</Button>

                <Button isDisabled>{cart.Quantity}</Button>

                <Button onClick={()=> handleQuantity(cart.id , cart.Quantity , 1)}>+</Button>

               </Box>
               <Button onClick={()=> handleDelete(cart.id)}> Remove</Button>
               </Box>
            </GridItem>
          ))
         }
         <Text fontSize={20}>Subtotal : {total}</Text >
         <RouterLink to="/address"> 
         <Button bg="green" >CheckOut</Button>
         </RouterLink>
     </Grid>
     </Box>
   )
 }
 
 export default CartPage
 