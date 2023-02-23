import { useContext, useEffect } from "react"
 
import axios from "axios"
import { useReducer ,useState } from "react";
import { Box, Button, Grid, GridItem } from '@chakra-ui/react'

 
import { Spinner } from '@chakra-ui/react'
import ProductCard from "../Components/ProductsCard";
import { ProductReducer } from "../reducer/reducer";
 
let initialState={
  products:[],
  isLoading:false,
  isErr:false
}
 
export default   function  Men(){
    const [state, dispatch] = useReducer( ProductReducer ,initialState);

    const {products,isLoading,isErr}=state;
    const [page, setPage] = useState(1);
 

    const getData=async function getUser(page){
      dispatch({type : "FETCH_LOADING" })
      try {
        const response=await axios.get(`http://localhost:8080/men?_page=${page}&_limit=8`)
        dispatch({type : "FETCH_SUCCESS", payload : response.data})
        // console.log(response.data)
      } catch (error) {
        console.log("error !")
        dispatch({type : "FETCH_FAILURE", payload : []})
      }
    }

    const handlePage=(val)=>{
      const Val=page+val;
      setPage(Val);
    }

    useEffect(()=>{
      getData(page);
    },[page])
  
  return  isLoading  ?            
         (
          <Spinner
          marginTop="300px"
          marginLeft="600px"
          marginBottom="300px"
          thickness='4px'
          speed='0.65s'
          emptyColor='gray.200'
          color='blue.500'
          size='xl'
        />
    )
    : 
          isErr ?   <h1>Something went Wrong ! </h1> :
      (
      <div>
        <Grid  templateColumns="repeat(auto-fill, minmax(300px, 1fr))" gap={6}>
          {
            products?.length>0 && products.map((e,index)=>{
              return <GridItem key={Date.now()+e.src} w='100%'  >
                   <ProductCard
                      id={e.id}
                      category={e.category}
                      image={e.src}
                      price={e.MRP}
                      discount={e.discount}
                   />
              </GridItem>        
            })
          }
          </Grid>      
          <Box>
                <Button isDisabled={page===1} onClick={()=> handlePage(-1)}>PREV</Button>
                <Button isDisabled={page===page}>{page}</Button>
                <Button isDisabled={page===3} onClick={()=> handlePage(1)}>NEXT</Button>
           </Box> 
      </div>
    )
  }
 
 
 