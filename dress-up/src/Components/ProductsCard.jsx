import {
    Box,
    Center,
    useColorModeValue,
    Heading,
    Text,
    Stack,
    Image,
  } from '@chakra-ui/react';
  import {Link as RouterLink } from "react-router-dom";
 
  
  export default function ProductCard(props) {
    const {category ,id,image,price,discount }=props
     
    return (
        <Center py={12}>
          <RouterLink to={`/men/${id}`}> 
        <Box
          role={'group'}
          p={6}
          maxW={'330px'}
          w={'full'}
          bg={useColorModeValue('white', 'gray.800')}
          boxShadow={'2xl'}
          rounded={'lg'}
          pos={'relative'}
          zIndex={1}>
          <Box
            rounded={'lg'}
            mt={-12}
            pos={'relative'}
            height={'400px'}
            _after={{
              transition: 'all .3s ease',
              content: '""',
              w: 'full',
              h: 'full',
              pos: 'absolute',
              top: 5,
              left: 0,
              
              filter: 'blur(15px)',
              zIndex: -1,
            }}
            _groupHover={{
              _after: {
                filter: 'blur(20px)',
              },
            }}>
            <Image
              rounded={'lg'}
              height={420}
              width={282}
              objectFit={'cover'}
              src={image}
            />
          </Box>
          <Stack pt={10} align={'center'}>
            <Text color={'gray.500'} fontSize={'sm'} textTransform={'uppercase'}>
             {discount}
            </Text>
            <Heading fontSize={'2xl'} fontFamily={'body'} fontWeight={500}>
              {category}
            </Heading>
            <Stack direction={'row'} align={'center'}>
              
              <Heading fontSize={'2xl'} fontFamily={'body'} fontWeight={500}>
              Price: {price}
            </Heading>
             
            </Stack>
              <Heading fontSize={'2xl'} fontFamily={'body'} fontWeight={500}>
               Rating : 4.1
            </Heading>
          </Stack>
        </Box>
        </RouterLink>
      </Center>
    );
  }