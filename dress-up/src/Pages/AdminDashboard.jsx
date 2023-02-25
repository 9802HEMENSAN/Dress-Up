



import { Box, Button, Flex, Grid, GridItem, Heading, Image, Tab, TabList, TabPanel, TabPanels, Tabs } from '@chakra-ui/react'
import axios from 'axios';
import React, { useEffect, useState } from 'react'

const AdminDashboard = () => {
    const [menData, setMenData] = useState([]);
    const [womenData, setWomenData] = useState([]);
    const [kidsData, setKidsData] = useState([]);

// Men Data Get 
    const GetMenData=()=>{
        axios.get(`http://localhost:8080/men`)
        .then((res)=>{ setMenData(res.data)});

    }

    useEffect(() => {
     GetMenData()
    }, [ ]);

    const handleDelete=(id)=>{

        axios({
            method : "delete",
            url : `http://localhost:8080/men/${id}`
        }).then(()=> GetMenData())
     }

// women Section 
    const GetWomenData=()=>{
        axios.get(`http://localhost:8080/women`)
        .then((res)=>{  setWomenData(res.data)});

    }

    useEffect(() => {
     GetWomenData()
    }, [ ]);

    const  DeleteWomenData  =(id)=>{

        axios({
            method : "delete",
            url : `http://localhost:8080/women/${id}`
        }).then(()=>  GetWomenData())
     }
// get Kids Data 

const GetKidsData=()=>{
    axios.get(`http://localhost:8080/kids`)
    .then((res)=>{  setKidsData(res.data)});

}

useEffect(() => {
 GetKidsData()
}, [ ]);

const  DeleteKidsData  = (id)=>{

    axios({
        method : "delete",
        url : `http://localhost:8080/kids/${id}`
    }).then(()=>  GetKidsData())
 }
    
 

  return (
    <Tabs>
  <TabList>
    <Tab>Men </Tab>
    <Tab>Women</Tab>
    <Tab>Kids</Tab>
  </TabList>

  <TabPanels>
    <TabPanel>
         <Grid  templateColumns='repeat(4, 1fr)' gap={6} >
            {
               menData?.map((item)=> (
                <GridItem key={item.id} 
                boxShadow= "rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px"
                >
                    <Flex gap={7}> 
                    <Box> 
                     <Image h={150} w={150}
                     src={item.src } alt="men"
                    />
                    </Box>

                    <Box>
                        <Heading fontSize={20}>{`₹ ${item.MRP}`}</Heading>
                        <Heading fontSize={16}>{`${item.discount}% Off`}</Heading>
   
                        <Button m={5} onClick={()=> handleDelete(item.id )}>Delete</Button>
                    </Box>
                    </Flex>
                </GridItem>
               ))
            }
         </Grid>
    </TabPanel>
    <TabPanel>
    <Grid  templateColumns='repeat(4, 1fr)' gap={6} >
            {
               womenData?.map((item)=> (
                <GridItem key={item.id} 
                boxShadow= "rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px"
                >
                    <Flex gap={7}> 
                    <Box> 
                     <Image h={150} w={150}
                     src={item.src } alt="men"
                    />
                    </Box>

                    <Box>
                        <Heading fontSize={20}>{`₹ ${item.MRP}`}</Heading>
                        <Heading fontSize={16}>{`${item.discount}% Off`}</Heading>
   
                        <Button m={5} onClick={()=>  DeleteWomenData(item.id )}>Delete</Button>
                    </Box>
                    </Flex>
                </GridItem>
               ))
            }
         </Grid>
    </TabPanel>
    <TabPanel>
    <Grid  templateColumns='repeat(4, 1fr)' gap={6} >
            {
               kidsData?.map((item)=> (
                <GridItem key={item.id} 
                boxShadow= "rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px"
                >
                    <Flex gap={7}> 
                    <Box> 
                     <Image h={150} w={150}
                     src={item.src } alt="men"
                    />
                    </Box>

                    <Box>
                        <Heading fontSize={20}>{`₹ ${item.MRP}`}</Heading>
                        <Heading fontSize={16}>{`${item.discount}% Off`}</Heading>
   
                        <Button m={5} onClick={()=>  DeleteKidsData(item.id )}>Delete</Button>
                    </Box>
                    </Flex>
                </GridItem>
               ))
            }
         </Grid>
    </TabPanel>
  </TabPanels>
</Tabs>
  )
}

export default AdminDashboard;


 

