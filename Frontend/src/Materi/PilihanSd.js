import React from "react";
import { Link } from "react-router-dom";
import { Grid, GridItem, Flex, Box, Image, Button, Center } from '@chakra-ui/react'
import "./Pilihan.css";


export default function PilihanSd() {
    return (
        <Flex direction={"column"} alignItems="center" justifyContent="center" marginTop={30}>
            <Button fontSize="20px" bg="#006D77" color="white" h="60px" w="200px" borderRadius="50px">Sekolah<br></br> Dasar</Button>
            <Grid marginTop={100} className="kotak" gridTemplateColumns={'repeat(3, 1fr)'} gap={12}>

                <GridItem background="gray.100" borderRadius={20} maxWidth={400}>
                    <Box position={"relative"} borderRadius={20} transition={'.2s'} _hover={{ transform: 'scale(1.1)', zIndex: 5, boxShadow: '0 0 10px rgba(0, 0, 0, 0.2)', cursor: 'pointer' }}>
                        <Image className="gambar" height="-moz-min-content" src="https://executive-education.id/wp-content/uploads/2021/12/sekolah-dasar-executive-education.png" alt='Content image' />
                        <Center><Button to={"/"} as={Link} className="nama" width={150} colorScheme="teal" borderRadius={15} marginBottom={3} _hover={{background:'red', cursor: 'pointer'}}>Beasiswa</Button></Center>
                    </Box>
                </GridItem>
                <GridItem background="gray.100" borderRadius={20} maxWidth={400}>
                    <Box position={"relative"} borderRadius={20} transition={'.2s'} _hover={{ transform: 'scale(1.1)', zIndex: 5, boxShadow: '0 0 10px rgba(0, 0, 0, 0.2)', cursor: 'pointer' }}>
                        <Image className="gambar" height="-moz-min-content" src="https://executive-education.id/wp-content/uploads/2021/12/sekolah-menengah-pertama-smp.png" alt='Content image' />
                        <Center><Button className="nama" width={150} colorScheme="teal" borderRadius={15} marginBottom={3} _hover={{background:'#004D78', cursor: 'pointer'}}>Lomba-Lomba</Button></Center>
                    </Box>
                </GridItem>
                <GridItem background="gray.100" borderRadius={20} maxWidth={400}>
                    <Box position={"relative"} borderRadius={20} transition={'.2s'} _hover={{ transform: 'scale(1.1)', zIndex: 5, boxShadow: '0 0 10px rgba(0, 0, 0, 0.2)', cursor: 'pointer' }}>
                        <Image className="gambar" height="-moz-min-content" src="https://executive-education.id/wp-content/uploads/2021/12/sekolah-menengah-atas-sma.png" alt='Content image' />
                        <Center><Button className="nama" width={150} colorScheme="teal" borderRadius={15} marginBottom={3} _hover={{background:'#79A2BC', cursor: 'pointer'}}>Seminar</Button></Center>
                    </Box>
                </GridItem>
            </Grid>
        </Flex>
    )
}