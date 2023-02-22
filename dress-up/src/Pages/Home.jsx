import { Box, Grid, GridItem, Image } from "@chakra-ui/react";
import React from "react";
import ImageSlider from "../Components/ImageSlider";
import { images1 } from "../StoreImages/images";
import { images2 } from "../StoreImages/images";
import { images3 } from "../StoreImages/images";
import { images4 } from "../StoreImages/images";
import { images5 } from "../StoreImages/images";
import { images6 } from "../StoreImages/images";
import { images7 } from "../StoreImages/images";
import { images8 } from "../StoreImages/images";
import { images9 } from "../StoreImages/images";
import { images10 } from "../StoreImages/images";

const Home = () => {
  return (
    <div>
      <ImageSlider images={images1} />
      <ImageSlider images={images2} />
      <Box>
        <Box marginTop="30px">
        <Image src="https://assets.ajio.com/cms/AJIO/WEB/060123-D-UHP-footwear-accessories-header.jpg" width="100%"></Image>
        </Box>
        <Grid templateColumns='repeat(4, 1fr)'>
         <Image src="https://assets.ajio.com/cms/AJIO/WEB/060123-D-UHP-footwear-accessories-sportsshoes.jpg" width="330px" margin="auto"></Image>
         <Image src="https://assets.ajio.com/cms/AJIO/WEB/060123-D-UHP-footwear-accessories-watches.jpg" width="330px" margin="auto"></Image>
         <Image src="https://assets.ajio.com/cms/AJIO/WEB/060123-D-UHP-footwear-accessories-sandals.jpg" width="330px" margin="auto"></Image>
         <Image src="https://assets.ajio.com/cms/AJIO/WEB/060123-D-UHP-footwear-accessories-home.jpg" width="330px" margin="auto"></Image>
        </Grid>
    </Box>
    
      <ImageSlider images={images3} />
      <Box>
        <Box marginTop="30px">
        <Image src="https://assets.ajio.com/cms/AJIO/WEB/060123-D-UHP-home-header.jpg" width="100%"></Image>
        </Box>
        <Grid templateColumns='repeat(4, 1fr)'>
         <Image src="https://assets.ajio.com/cms/AJIO/WEB/060123-D-UHP-home-portico.jpg" width="330px" margin="auto"></Image>
         <Image src="https://assets.ajio.com/cms/AJIO/WEB/060123-D-UHP-home-quilts.jpg" width="330px" margin="auto"></Image>
         <Image src="https://assets.ajio.com/cms/AJIO/WEB/060123-D-UHP-home-decor.jpg" width="330px" margin="auto"></Image>
         <Image src="https://assets.ajio.com/cms/AJIO/WEB/060123-D-UHP-home-home.jpg" width="330px" margin="auto"></Image>
        </Grid>
    </Box>
      
      <ImageSlider images={images4} />
      <ImageSlider images={images5} />
      <Box>
        <Box marginTop="30px">
        <Image src="https://assets.ajio.com/cms/AJIO/WEB/060123-D-UHP-sponsorbrands-header.jpg" width="100%"></Image>
        </Box>
        <Grid templateColumns='repeat(4, 1fr)'>
            <GridItem><Image src="https://assets.ajio.com/cms/AJIO/WEB/060123-D-UHP-sponsorbrands-puma.jpg" width="330px" margin="auto"></Image></GridItem>
            <GridItem> <Image src="https://assets.ajio.com/cms/AJIO/WEB/060123-D-UHP-sponsorbrands-levis.jpg" width="330px" margin="auto"></Image></GridItem>
            <GridItem><Image src="https://assets.ajio.com/cms/AJIO/WEB/060123-D-UHP-sponsorbrands-adidas.jpg" width="330px" margin="auto"></Image></GridItem> 
            <GridItem>
            <Image src="https://assets.ajio.com/cms/AJIO/WEB/060123-D-UHP-sponsorbrands-campus.jpg" width="330px" margin="auto"></Image>
            </GridItem>
        </Grid>
    </Box>
    <Box>
        <Box marginTop="30px">
        <Image src="https://assets.ajio.com/cms/AJIO/WEB/060123-D-UHP-AJIOexclusive-header.jpg" width="100%"></Image>
        </Box>
        <Grid templateColumns='repeat(4, 1fr)'>
            <GridItem>
            <Image src="https://assets.ajio.com/cms/AJIO/WEB/060123-D-UHP-AJIOexclusive-netplay.jpg" width="330px" margin="auto"></Image>
            </GridItem>
          <GridItem><Image src="https://assets.ajio.com/cms/AJIO/WEB/060123-D-UHP-AJIOexclusive-produktbyJJ.jpg" width="330px" margin="auto"></Image></GridItem>
          <GridItem>
          <Image src="https://assets.ajio.com/cms/AJIO/WEB/060123-D-UHP-AJIOexclusive-avaasa.jpg" width="330px" margin="auto"></Image>
          </GridItem>
          <GridItem>
          <Image src="https://assets.ajio.com/cms/AJIO/WEB/060123-D-UHP-AJIOexclusive-GAS.jpg" width="330px" margin="auto"></Image>
          </GridItem>
         </Grid>
    </Box>

    <Box marginTop="30px">
        <Image src="https://assets.ajio.com/cms/AJIO/WEB/060123-D-UHP-JITstatics-header.jpg" width="100%"></Image>
        <Box>
        <ImageSlider images={images6} />
        </Box>
    </Box>
    {/* Western Wears */}
    <Box>
        <Box marginTop="30px">
        <Image src="https://assets.ajio.com/cms/AJIO/WEB/060123-D-UHP-westernwear-header.jpg" width="100%"></Image>
        </Box>
        <Grid templateColumns='repeat(4, 1fr)'>
            <GridItem>
            <Image src="https://assets.ajio.com/cms/AJIO/WEB/060123-D-UHP-westernwear-topstees.jpg" width="330px" margin="auto"></Image>
            </GridItem>
            <GridItem>
            <Image src="https://assets.ajio.com/cms/AJIO/WEB/060123-D-UHP-westernwear-dresses.jpg" width="330px" margin="auto"></Image>
            </GridItem>
            <GridItem>
                <Image src="https://assets.ajio.com/cms/AJIO/WEB/060123-D-UHP-westernwear-jeans.jpg" width="330px" margin="auto"></Image>
            </GridItem>
            <GridItem>
            <Image src="https://assets.ajio.com/cms/AJIO/WEB/060123-D-UHP-westernwear-formals.jpg" width="330px" margin="auto"></Image>
            </GridItem>
        </Grid>
    </Box>
    <Box marginTop="30px">
        <Image src="https://assets.ajio.com/cms/AJIO/WEB/060123-D-UHP-dailymen-header.jpg" width="100%"></Image>
        <Box>  
            <ImageSlider images={images7} />
        </Box>
    </Box>
    <Box marginTop="30px">
        <Image src="https://assets.ajio.com/cms/AJIO/WEB/060123-D-UHP-dailywomen-header.jpg" width="100%"></Image>
        <Box>          
           <ImageSlider images={images8} />
        </Box>
    </Box>

    {/* for her */}
    <Box>
        <Box marginTop="30px">
        <Image src="https://assets.ajio.com/cms/AJIO/WEB/060123-D-UHP-ethnicwear-header.jpg" width="100%"></Image>
        </Box>
        <Grid templateColumns='repeat(4, 1fr)'>
            <GridItem>
            <Image src="https://assets.ajio.com/cms/AJIO/WEB/060123-D-UHP-ethnicwear-ethnicwear.jpg" width="330px" margin="auto"></Image>
            </GridItem>
            <GridItem>
            <Image src="https://assets.ajio.com/cms/AJIO/WEB/060123-D-UHP-ethnicwear-sarees.jpg" width="330px" margin="auto"></Image>
            </GridItem>
            <GridItem>
            <Image src="https://assets.ajio.com/cms/AJIO/WEB/060123-D-UHP-ethnicwear-handbags.jpg" width="330px" margin="auto"></Image>
            </GridItem>
            <GridItem>
            <Image src="https://assets.ajio.com/cms/AJIO/WEB/060123-D-UHP-ethnicwear-jewellery.jpg" width="330px" margin="auto"></Image>
            </GridItem>
         </Grid>
    </Box>

    <Box marginTop="30px">
        <Image src="https://assets.ajio.com/cms/AJIO/WEB/060123-D-UHP-trendscarousel-header.jpg" width="100%"></Image>
        <Box>
        <ImageSlider images={images9} />
        </Box>
    </Box>
    
    </div>
  );
};

export default Home;

 