import { useEffect } from "react"
 
import axios from "axios"
import { useReducer } from "react";
import { Grid, GridItem } from '@chakra-ui/react'

 
import { Spinner } from '@chakra-ui/react'
import ProductCard from "../Components/ProductsCard";
import { ProductReducer } from "../reducer/reducer";

let initialState={
  products:[],
  isLoading:false,
  isErr:false
}

 

export default   function  Kids(){
    const [state, dispatch] = useReducer( ProductReducer,initialState);
    const {products,isLoading,isErr}=state;

    const getData=async function getUser(){
      dispatch({type : "FETCH_LOADING" })
      try {
        const response=await axios.get("http://localhost:8080/Kids")
        dispatch({type : "FETCH_SUCCESS", payload : response.data})
        // console.log(response.data)
      } catch (error) {
        console.log("error !")
        dispatch({type : "FETCH_FAILURE", payload : []})
      }
    }

    useEffect(()=>{
      getData();
    },[])
  
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
            products?.length>0 && products.map((e)=>{
              return <GridItem key={e.id} w='100%'  >
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
          
      </div>
    )
  }
 
// "href": "https://www.limeroad.com/green-cotton-seva-chikan-p19208496?imgIdx=3&src_id=navdeskKurtas__100",
// "src": "https://img3.junaroad.com/uiproducts/19208496/zoom_0-1674239423.jpg",
// "Category": "kurta",
// "bxs1": "New",
// "discountPrice": "₹ 2249",
// "MRP": "₹2590",
// "discount": "13% off",
// "c9 href": "https://www.limeroad.com/brand/seva-chikan-74729?src_id=navdeskKurtas__100",
// "translation_missing": "Seva Chikan",
// "tdN href": "https://api.whatsapp.com/send?text=Checkout+this+amazing+product+at+Limeroad%21%20Don%27t+miss+out%21%20https://www.limeroad.com/green-cotton-seva-chikan-p19208496?imgIdx=3&src_id=navdeskKurtas__100"
 
 