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
  Select,
  Tabs,
  Tab,
  TabList,
  TabPanels,
  TabPanel,
  Image,
} from "@chakra-ui/react";
import React, { useState } from "react";
import AlertDialogExample from "../Components/AlertDialog";
import { Link as RouterLink, useNavigate } from "react-router-dom";
import axios from "axios";

const initAddress= {
  "email" : "",
  "first_Name" : "",
  "Last_Name" : "",
  "Address" : "",
  "Address2" :"",
  "Postal_Code" : "",
  "City" : "",
  "Region" : "",
  "Phone" : "",
  "Location" : ""
}
 const  AddressPage = () => {
  const [FormState, setFormState] = useState(initAddress);
   const navigate = useNavigate();
  const handleChange=(e)=>{
    const  {name , value , type } = e.target ; 
  console.log(name, value, type )
  console.log(e.target.value)
    const val= type === "number" ? Number(value) : value ;

    setFormState({...FormState, [name] : val })
  }

  const handleSubmit= (e)=>{
    e.preventDefault();
     
   return axios({
      method : "post",
      url : `http://localhost:8080/address`,
       data : FormState
    }).then((res)=>{ 
      console.log(res)
        if(res.status===201){
          navigate("/payment")
        }
    })
  }

  return (
    <div  > 
      <Heading>Welcome to Payment Page</Heading>
      <Text>powered by Borderfree</Text>
      <Text>Already have a Borderfree account? Click here. </Text>
 
            <Box rounded={"lg"} boxShadow={"lg"} p={2}>
              <form onSubmit={handleSubmit }>
                <Stack spacing={4}>
                  <FormControl>
                    <FormLabel>Delivery</FormLabel>
                    <Input type="email" placeholder="Email"
                     name="email"
                     value={FormState.email}
                     onChange={handleChange}
                    />
                  </FormControl>

                  <Flex>
                    <FormControl>
                      <Input type="text" placeholder="First Name" 
                       name="first_Name"
                       value={FormState.first_Name}
                       onChange={handleChange}
                      />
                    </FormControl>
                    <FormControl>
                      <Input type="text" placeholder="Last Name"
                       name="Last_Name"
                       value={FormState.Last_Name}
                       onChange={handleChange}
                      />
                    </FormControl>
                  </Flex>

                  <FormControl>
                    <Input type="text" placeholder="Address"
                     name="Address"
                     value={FormState.Address}
                     onChange={handleChange}
                    />
                  </FormControl>

                  <Flex>
                    <FormControl>
                      <Input type="text" placeholder="Address2" 
                       name="Address2"
                       value={FormState.Address2}
                       onChange={handleChange}
                      />
                    </FormControl>
                    <FormControl>
                      <Input type="number" placeholder="Postal Code" 
                       name="Postal_Code"
                       value={FormState.Postal_Code}
                       onChange={handleChange}
                      />
                    </FormControl>
                  </Flex>
                  <Flex>
                    <FormControl>
                      <Input type="text" placeholder="City" 
                       name="City"
                       value={FormState.City}
                       onChange={handleChange}
                      />
                    </FormControl>
                    <FormControl>
                      <Input type="text" placeholder="Region (Optional)" 
                       name="Region"
                       value={FormState.Region}
                       onChange={handleChange}
                      />
                    </FormControl>
                  </Flex>

                  <Flex>
                    <FormControl>
                      <Input type="text" placeholder="Phone"
                      
                      name="Phone"
                      value={FormState.Phone}
                      onChange={handleChange}
                      />
                    </FormControl>
                    <Select placeholder="Location" color="black" 
                     name="Location"
                     value={FormState.Location}
                     onChange={handleChange}
                    >
                      <option value="India">India</option>
                      <option value="USA">USA</option>
                      <option value="Russia">Russia</option>
                    </Select>
                  </Flex>
                  <Stack spacing={10}>
                    {/* <RouterLink to="/payment">  */}
                      <Button
                        bg={"green.400"}
                        color={"white"}
                        _hover={{
                          bg: "green.500",
                        }}
                        type="submit"
                      >
                         Submit 
                      </Button>
                    {/* </RouterLink> */}
                  </Stack>
                </Stack>
              </form>
            </Box>     
      <Image src="https://www.braintreepayments.com/images/features/payment-methods/payment-methods.png" alt="payment options" />
    </div>
  );
};

export default  AddressPage;
