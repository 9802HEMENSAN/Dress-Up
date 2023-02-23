import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import axios from "axios";
import {  GridItem  } from '@chakra-ui/react';
import SinglePage from '../Components/SinglePage';
 

const SingleUserPage = () => {
  const [data, setData] = useState({});
  let {id}=useParams();
  console.log(id);
    const getData= async (id)=>{
        return axios({
            method : "get" ,
            url : `http://localhost:8080/men/${id}`
        }).then((res)=> {
            console.log(res.data)
            setData(res.data)
        });
    }

    useEffect(() => {
      getData(id);
    }, [id])
    


  return (
            <GridItem>
                 <SinglePage  
                  key={data.id}
                  {...data}
                 />
            </GridItem>
 
  )
}

export default SingleUserPage


// {
//     "id": 2,
//     "href": "https://www.limeroad.com/maroon-poly-cotton-shah-fabrics-p13308180?imgIdx=3&src_id=navdeskSarees__001",
//     "src": "https://img3.junaroad.com/uiproducts/13308180/zoom_0-1491993425.jpg",
//     "Category": "Saree",
//     "discountPrice": "₹ 1299",
//     "MRP": "₹2600",
//     "discount": "50% off",
//     "c9 href": "https://www.limeroad.com/brand/shah-fabrics-48795?src_id=navdeskSarees__001",
//     "translation_missing": "Shah Fabrics",
//     "tdN href": "https://api.whatsapp.com/send?text=Checkout+this+amazing+product+at+Limeroad%21%20Don%27t+miss+out%21%20https://www.limeroad.com/maroon-poly-cotton-shah-fabrics-p13308180?imgIdx=3&src_id=navdeskSarees__001",
//     "bxs1": ""
//     }