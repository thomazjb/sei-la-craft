import Navbar from "./components/Navbar"
import React from "react"

import { Flex, Heading, Text } from "@chakra-ui/react"

export default function Dashboard() {


  return (
    <div >
      <Navbar />
      <Flex
      flexDirection="column"
      width="100wh"
      height="100vh"
      p='20px'
      backdropFilter='blur(5px)'
      // justifyContent="center"
      // alignItems="center"
    >

    <Flex
      borderRadius='20px'
      bg={["primary.500", "primary.500"]}
      p='20px'
      h='345px'
      w={{ base: "315px", md: "345px" }}
      alignItems='center'
      direction='column'>

        <Text
          fontWeight='900'
          color='white'
          textAlign='center'
          fontSize='xl'>
          TITULO
        </Text>
      
    </Flex>
    
  
    </Flex>
     
    </div>
   
  )


}