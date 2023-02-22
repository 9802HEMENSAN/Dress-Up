import {
    Box,
    Flex,
    Text,
    IconButton,
    Button,
    Stack,
    Collapse,
    Icon,
    Link,
    Popover,
    PopoverTrigger,
    PopoverContent,
    useColorModeValue,
    useBreakpointValue,
    useDisclosure,
  } from '@chakra-ui/react';
  import {
    HamburgerIcon,
    CloseIcon,
    ChevronDownIcon,
    ChevronRightIcon,
  } from '@chakra-ui/icons';
 
  import { Link as RouterLink } from 'react-router-dom';
  import   logo1 from "./dressup.png"
  import { Image } from '@chakra-ui/react';
  export default function  Navbar() {
    const { isOpen, onToggle } = useDisclosure();
  
    return (
      <Box >
        <Flex 
          bg={useColorModeValue('black', 'black')}
          color={useColorModeValue('white', 'white')}
          minH={'60px'}
          py={{ base: 2 }}
          px={{ base: 4 }}
          borderBottom={1}
          borderStyle={'solid'}
          borderColor={useColorModeValue('black', 'black')}
          align={'center'}>
          <Flex
            flex={{ base: 1, md: 'auto' }}
            ml={{ base: -2 }}
            display={{ base: 'flex', md: 'none' }}>
            <IconButton
              onClick={onToggle}
              icon={
                isOpen ? <CloseIcon w={3} h={3} /> : <HamburgerIcon w={5} h={5} />
              }
              variant={'ghost'}
              aria-label={'Toggle Navigation'}
            />
          </Flex>
        
          <Flex flex={{ base: 1 }} justify={{ base: 'center', md: 'start' }}>
          <RouterLink to="/"> 
          
               <Image  boxSize='50px' width="200px" src={logo1} alt='Dress-up' />
 
           </RouterLink>
            <Flex display={{ base: 'none', md: 'flex' }} ml={10}>
              <DesktopNav />
            </Flex>
          </Flex>
  
          <Stack
            flex={{ base: 1, md: 0 }}
            justify={'flex-end'}
            direction={'row'}
            spacing={6}>

           <RouterLink to="/register"> 
                <Button
                   display={{ base: 'none', md: 'inline-flex' }}
                   fontSize={'sm'}
                   fontWeight={600}
                   color={'white'}
                   bg={'orange.500'}
                   href={'#'}
                   _hover={{
                     bg: 'orange.400',
                   }} >
                  Sign Up
                </Button>
            </RouterLink>



            {/* <RouterLink to="/admin">  */}
            <Button
              display={{ base: 'none', md: 'inline-flex' }}
              fontSize={'sm'}
              fontWeight={600}
              color={'white'}
              bg={'orange.500'}
              href={'#'}
              _hover={{
                bg: 'orange.400',
              }} >
              Admin
               
            </Button>
            {/* </RouterLink> */}
          </Stack>
        </Flex>
  
        <Collapse in={isOpen} animateOpacity>
          <MobileNav />
        </Collapse>
      </Box>
    );
  }
  
  const DesktopNav = () => {
    const linkColor = useColorModeValue('black', 'black');
    const linkHoverColor = useColorModeValue('black', 'black');
    const popoverContentBgColor = useColorModeValue('black', 'black');
  
    return (
      <Stack direction={'row'} spacing={4}  marginTop="15px">
        {NAV_ITEMS.map((navItem) => (
          <Box key={navItem.label}   >
            <Popover trigger={'hover'} placement={'bottom-start'} >
              <PopoverTrigger>
                <RouterLink  
                  p={2}
                  href={navItem.href ?? '#'}
                  fontSize={'sm'}
                  marginTop="40px"
                  fontWeight={500}
                  color={linkColor}
                  _hover={{
                    textDecoration: 'none',
                    color: linkHoverColor,
                  }}>
                  {navItem.label}
                </RouterLink>
              </PopoverTrigger>
  
              {navItem.children && (
                <PopoverContent 
                  border={0}
                  boxShadow={'xl'}
                  bg={popoverContentBgColor}
                  p={4}
                  rounded={'xl'}
                  minW={'sm'} >
                  <Stack>
                    {navItem.children.map((child) => (
                      <RouterLink to="/products" >  
                         <DesktopSubNav key={child.label} {...child} />
                      </RouterLink>
                    ))}
                  </Stack>
                </PopoverContent>
              )}
            </Popover>
          </Box>
        ))}
      </Stack>
    );
  };
  
  const DesktopSubNav = ({ label, href, subLabel } ) => {
    return (
      <Link
        href={href}
        role={'group'}
        display={'block'}
        p={2}
        rounded={'md'}
        _hover={{ bg: useColorModeValue('pink.50', 'black') }}>
        <Stack direction={'row'} align={'center'} >
          <Box >
            <Text
              transition={'all .3s ease'}
              _groupHover={{ color: 'pink.400' }}
              fontWeight={500}>
              {label}
            </Text>
            <Text fontSize={'sm'}>{subLabel}</Text>
          </Box>
          <Flex
            transition={'all .3s ease'}
            transform={'translateX(-10px)'}
            opacity={0}
            _groupHover={{ opacity: '100%', transform: 'translateX(0)' }}
            justify={'flex-end'}
            align={'center'}
            flex={1}>
            <Icon color={'pink.400'} w={5} h={5} as={ChevronRightIcon} />
          </Flex>
        </Stack>
      </Link>
    );
  };
  
  const MobileNav = () => {
    return (
      <Stack
        bg={useColorModeValue('white', 'gray.800')}
        p={4}
        display={{ md: 'none' }}>
        {NAV_ITEMS.map((navItem) => (
          <MobileNavItem  key={navItem.label} {...navItem} />
        ))}
      </Stack>
    );
  };
  
  const MobileNavItem = ({ label, children, href }) => {
    const { isOpen, onToggle } = useDisclosure();
  
    return (
      <Stack spacing={4} onClick={children && onToggle}>
        <Flex
          py={2}
          as={Link}
          href={href ?? '#'}
          justify={'space-between'}
          align={'center'}
          _hover={{
            textDecoration: 'none',
          }}>
          <Text
            fontWeight={600}
            color={useColorModeValue('gray.600', 'gray.200')}>
            {label}
          </Text>
          {children && (
            <Icon
              as={ChevronDownIcon}
              transition={'all .25s ease-in-out'}
              transform={isOpen ? 'rotate(180deg)' : ''}
              w={6}
              h={6}
            />
          )}
        </Flex>
  
        <Collapse in={isOpen} animateOpacity style={{ marginTop: '0!important' }}>
          <Stack
            mt={2}
            pl={4}
            borderLeft={1}
            borderStyle={'solid'}
            borderColor={useColorModeValue('black', 'black')}
            align={'start'}>
            {children &&
              children.map((child) => (
                <Link key={child.label} py={2} href={child.href}>
                  {child.label}
                </Link>
              ))}
          </Stack>
        </Collapse>
      </Stack>
    );
  };
  
 
  const NAV_ITEMS = [
    {
      label: 'Products',
      children: [
        {
          label: 'trending Products',
          subLabel: 'Top Deals',
          href: '#',
        },
        {
          label: 'Electronics',
          subLabel: 'Unique technology',
          href: '#',
        },
      ],
    },
    {
      label: 'Find Work',
      children: [
        {
          label: 'Job Board',
          subLabel: 'Find your dream design job',
          href: '#',
        },
        {
          label: 'Projects',
          subLabel: 'An exclusive list for contract work',
          href: '#',
        },
      ],
    },
    {
      label: 'Weekly ads',
      href: '#',
    },
    {
      label: 'Carrers',
      href: '#',
    },
    {
      label: 'login',
      href: '#',
    },
  ];
 