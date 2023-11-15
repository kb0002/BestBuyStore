import { Box, Grid, Image, SimpleGrid, Text } from '@chakra-ui/react'
import React from 'react'
import logo from "../../images/StyleHub.png";
// import Footercont from './Footercont';
import formImage from "../../images/formImage.png"
import Footercont from './Footercont';

const Footer = () => {
  return (
    <Box p={"2% 4%"} mt={"1%"} color={"black"} bgColor={'#eeeeee'}>
        <Box w={["50%","40%","20%"]} m={"3% 0%"}>
            <Image src={logo} w={["40%","40%%","40%"]}/>
        </Box>

        {/* care@healthkart.com
0124-4616444
The Presidency Tower, Tower-B, 2nd Floor, 46/4, Mehrauli Rd opp. government girls college, Anamika Enclave, Sector 14, Gurugram, Haryana */}



{/* Blog
Careers
Site Map
Corporate Information
Whitehat
CUSTOMER POLICIES

Contact Us
FAQ
T&C
Terms Of Use
Track Orders
Shipping
Cancellation
Returns
Privacy policy
Grievance Officer */}


        <SimpleGrid columns={[2,2,6]} gap={"1%"} pb={"6%"}>
            <Box w={"100%"}><Footercont arr={["About Us", "Conatct Us", "Refer & Earn","Loyalti Program", "Brand Directory","Careers"]} title={"BestBuy"}/></Box>
            <Box w={"100%"}><Footercont arr={["Men", "Women", "Kids","Home & Living", "Beauty","Gritzo","Gift Cards","BestBuy Insider"]} title={"ONLINE SHOPPING"}/></Box>
            <Box w={"100%"}><Footercont arr={["Blog", "Careers", "Site Map","Corporate Information", "Whitehat","CUSTOMER POLICIES"]} title={"Usefull links"}/></Box>
            <Box w={"100%"}><Footercont arr={["My Account", "Track Your Order", "Store Locator","FAQs","Sell On BestBuy"]} title={"Quick Links"}/></Box>
            <Box w={"100%"}><Footercont arr={["0124-4616444", "Bengaluru - Karnataka – 560103, India"]} title={"BestBuy.com"}/></Box>
            {/* <Box w={"100%"}><Image src={formImage} borderRadius={"10px"} /></Box> */}
        </SimpleGrid>
        <hr/>  

        <SimpleGrid columns={[2,2]} gap={"10"} pb={"2%"}>
            <Text className="foot"><span className="foot">Copyright © 2023, Kumar B</span></Text>
            
        </SimpleGrid>    
    </Box>
  )
}

export default Footer
