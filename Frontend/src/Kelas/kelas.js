import React from "react";
import { Button, Flex, Image } from '@chakra-ui/react'

export default function kelas() {
    return (
        <Flex height="100vh" alignItems="center" justifyContent="center">
           <Flex margin="40px" direction="column" background="gray.100" p={12} rounded={6}>
               <Image height="-moz-min-content" src="https://executive-education.id/wp-content/uploads/2021/12/sekolah-dasar-executive-education.png" alt='Content image' />
               <Button colorScheme="teal">SD</Button>
           </Flex> 

           <Flex margin="40px" direction="column" background="gray.100" p={12} rounded={6}>
                <Image height="-moz-min-content" src="https://executive-education.id/wp-content/uploads/2021/12/sekolah-menengah-pertama-smp.png" alt='Content image' />
                <Button colorScheme="teal">SMP</Button>
           </Flex> 

           <Flex margin="40px" direction="column" background="gray.100" p={12} rounded={6}>
               <Image height="-moz-min-content" src="https://executive-education.id/wp-content/uploads/2021/12/sekolah-menengah-atas-sma.png" alt='Content image' />
               <Button colorScheme="teal">SMA</Button>
           </Flex>   
        </Flex>
    )
}