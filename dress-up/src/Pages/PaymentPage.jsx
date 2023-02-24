import {
    Box,
    FormControl,
    FormLabel,
    Heading,
    Input,
    Stack,
    Text,
    Button,
    Flex,
    Image,
    AlertDialog,
  } from "@chakra-ui/react";

  
import React, { useState } from 'react'
import AlertDialogExample from "../Components/AlertDialog";
const initState={
  "name" : "",
  "card_Number" : "",
  "Expiry" : "",
  "CVV" : ""
}
const PaymentPage = () => {
  const [state, setState] = useState(initState);


   const handleChange=(e)=>{
    const {name, value  }=e.target;
    
    setState({...state, [name] : value })
   }
 
  return (
    <div> 
           <Box rounded={"lg"} boxShadow={"lg"} p={2}>
              <form>
                <Stack spacing={4}>
                  <FormControl>
                    <FormLabel>Delivery</FormLabel>
                    <Input type="text" placeholder="Card Holder Name" 
                     name = "name"
                     value={state.name}
                     onChange={handleChange}
                    required/>
                  </FormControl>

                  <Flex>
                    <FormControl>
                      <Input type="text" placeholder="Card Number" 
                       name = "card_Number"
                       value={state.card_Number }
                       onChange={handleChange}
                      required/>
                    </FormControl>
                    <FormControl>
                      <Input type="text" placeholder="Expiry"
                        name = "Expiry"
                        value={state.Expiry }
                        onChange={handleChange}
                      required/>
                    </FormControl>
                  </Flex>

                  <FormControl>
                    <Input type="text" placeholder="Expiry"  
                      name = "CVV"
                      value={state.CVV }
                      onChange={handleChange}
                    required/>
                  </FormControl>
 
             
                  <Stack spacing={10}>
                    <Button
                      bg={"green.400"}
                      color={"white"}
                      _hover={{
                        bg: "green.500",
                      }}
                      isDisabled={state.name==="" && state.CVV==="" && state.Expiry===""  && state.card_Number===""}
                     
                    >
                      < AlertDialogExample/>
                    </Button>
                  </Stack>
                </Stack>
              </form>
            </Box>     
    </div>
  )
}

export default PaymentPage