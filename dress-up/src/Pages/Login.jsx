import {
    Flex,
    Box,
    FormControl,
    FormLabel,
    Input,
    Checkbox,
    Stack,
    Link,
    Button,
    Heading,
    Text,
    useColorModeValue,
  } from '@chakra-ui/react';
import axios from 'axios';
import { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../Context/AuthContextProvider';
 
const users={
  email : "",
  password : ""
}
  export default function  Login() {
      const [User, setUser] = useState(users);
      const {Login,token }=useContext(AuthContext);
          const   navigate =  useNavigate()
      const handleChange=(e)=>{
         const { name , value } = e.target; 
        
         setUser({...User, [name] : value })
      }

      const handleSubmit=(e)=>{
        e.preventDefault();
        
        handlePost();
        console.log(User)
      }

      const handlePost=async()=>{
        try {
          return axios({
            method : "post",
            url : `https://reqres.in/api/login`,
            data : User
          }).then((res)=>{ 
            if(res.data.token){
              console.log(res.data.token)
              Login(res.data.token)
              navigate("/")
            }
          })
        } catch (error) {
          console.log("err")
        }
      }

  const {email, password } = User;
    return (
      <Flex
        minH={'100vh'}
        align={'center'}
        justify={'center'}
        bg={useColorModeValue('gray.50', 'gray.800')}>
        <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}>
          <Stack align={'center'}>
            <Heading fontSize={'4xl'}>Sign in to your account</Heading>
            <Text fontSize={'lg'} color={'gray.600'}>
              to enjoy all of our cool <Link color={'blue.400'}>features</Link> ✌️
            </Text>
          </Stack>
          <Box
            rounded={'lg'}
            bg={useColorModeValue('white', 'gray.700')}
            boxShadow={'lg'}
            p={8}>
              <form onSubmit={handleSubmit}> 
            <Stack spacing={4}>
              {/* email  */}
              <FormControl id="email">
                <FormLabel>Email address</FormLabel>
                <Input type="email" 
                name="email"
                value={email}
                onChange={handleChange}
                />
              </FormControl>

            {/* password */}
              <FormControl id="password">
                <FormLabel>Password</FormLabel>
                <Input type="password" 
                name="password"
                value={password}
                onChange={handleChange}               
                />
              </FormControl>

              <Stack spacing={10}>
                <Stack
                  direction={{ base: 'column', sm: 'row' }}
                  align={'start'}
                  justify={'space-between'}>
                  <Checkbox>Remember me</Checkbox>
                  <Link color={'blue.400'}>Forgot password?</Link>
                </Stack>
                <Button
                  bg={'blue.400'}
                  color={'white'}
                  _hover={{
                    bg: 'blue.500',
                  }}
                  type="submit"
                  >
                  Sign in
                </Button>
              </Stack>
            </Stack>
              </form> 
          </Box>
        </Stack>
      </Flex>
    );
  }