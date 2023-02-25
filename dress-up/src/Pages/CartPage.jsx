 import { Box, Button, Center, Flex, Grid, GridItem, Heading, HStack, Image, Select, Text } from '@chakra-ui/react'
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
    item.id === id ?   (Quantity = Quantity + val ) :  Quantity 
    ))
  axios.patch(`http://localhost:8080/cart/${id}`,{
    Quantity : Quantity
  }).then(()=> getCartItems())
   
}
 
   return (<> 
      <Heading>Cart Page</Heading>
    <Center  maxWidth={2000} ml={100} > 
    <Flex width={ 1500 } > 
     <Grid  gap={5}>
         {
          data?.map((cart)=>(
            <GridItem key={cart.id}  m={"auto"} display = "flex" boxSizing='border-box'  >
               <HStack gap={4}> 
               <Box> 
              <Image src={cart.src} alt="cart image" h={150} w= {150} />
              </Box>
              <Box> 
               <Text fontSize={18}>{cart.Category}</Text>
              
               <Text fontSize={15}>discount :{`${cart.discount}`}</Text>
         
               {/* Buttons Quantity */}
               </Box>
               </HStack>
               <HStack gap={10}> 
               <Box ml={10}>
                 
                <Button  bg={"red.700"} isDisabled = {cart.Quantity===1} onClick={()=> handleQuantity(cart.id , cart.Quantity ,  -1)}>-</Button>

                <Button isDisabled>{cart.Quantity}</Button>

                <Button bg={"green.700"} onClick={()=> handleQuantity(cart.id , cart.Quantity , 1)}>+</Button>
                  {/* <Select  onChange ={ handleChange(cart.id, cart.Quantity, ) }>
                    <option value={1}>1</option>
                    <option value={2}>2</option>
                    <option value={3}>3</option>
                    <option value={4}>4</option>
                  </Select> */}
                </Box>
                <Box>
                <Text fontSize={16}>{`₹ ${cart.MRP * cart.Quantity}`}</Text>
                </Box>
                <Box>
                <Button onClick={()=> handleDelete(cart.id)}> Remove</Button>
                </Box>
                </ HStack>
            </GridItem>
          ))
         }
          
     </Grid>
     {/* order Summary */}
     <Box  m={"auto"}  h={400}  w={300} lineHeight={10}
      boxShadow= {"rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px"}
      padding={25} >
      <Heading fontSize={21}  mt={10} >Order Summary </Heading>
      <Flex justifyContent={"space-between"}>
        <Text>Shipping + Tax (18% GST)</Text>
        <Text>{`₹ ${total+100}`}</Text>
      </Flex>
      <Flex justifyContent={"space-between"}>
        <Text>Subtotal</Text>
        <Text>{`₹ ${total+100}`}</Text>
      </Flex>
      <Flex justifyContent={"space-between"}>
        <Text>Coupon Code 10%off </Text>
        <Text>Rishabh40</Text>
      </Flex>
      <Flex justifyContent={"space-between"}>
        <Text>Total</Text>
        <Text>{`${total-((total/100)*10)}`}</Text>
      </Flex>
       <RouterLink to="/address"> 
         <Button bg="blue.300" padding="0,70px">Place Order</Button>
       </RouterLink>
     </Box>
     </Flex>
     </Center>
     </>
   )
 }
 
 export default CartPage
 