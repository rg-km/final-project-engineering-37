import React from "react";
import { Link } from "react-router-dom";
import { Grid, GridItem, Flex, Box, Image, Button, Center } from '@chakra-ui/react'
import "./Pilihan.css";


export default function PilihanSmp() {
    return (
        <Flex direction={"column"} alignItems="center" justifyContent="center" marginTop={30}>
            <Button fontSize="20px" bg="#006D77" color="white" h="60px" w="200px" borderRadius="50px">Sekolah Menengah<br></br> Pertama</Button>
            <Grid marginTop={40} className="kotak" gridTemplateColumns={'repeat(3, 1fr)'} gap={12}>

                <GridItem background="gray.100" borderRadius={20} maxWidth={400}>
                    <Box position={"relative"} borderRadius={20} transition={'.2s'} _hover={{ transform: 'scale(1.1)', zIndex: 5, boxShadow: '0 0 10px rgba(0, 0, 0, 0.2)', cursor: 'pointer' }}>
                        <Image className="gambar" height="-moz-min-content" p={"60px"} src="https://cdn-icons.flaticon.com/png/512/2997/premium/2997322.png?token=exp=1655962850~hmac=c03ff66542345ba49ab85aea45f3b1c4" alt='Content image' />
                        <Center><Button to={"/"} as={Link} className="nama" width={150} colorScheme="teal" borderRadius={15} marginBottom={3} _hover={{background:'red', cursor: 'pointer'}}>Beasiswa</Button></Center>
                    </Box>
                </GridItem>
                <GridItem background="gray.100" borderRadius={20} maxWidth={400}>
                    <Box position={"relative"} borderRadius={20} transition={'.2s'} _hover={{ transform: 'scale(1.1)', zIndex: 5, boxShadow: '0 0 10px rgba(0, 0, 0, 0.2)', cursor: 'pointer' }}>
                        <Image className="gambar" height="-moz-min-content" p={"60px"} src="https://cdn-icons.flaticon.com/png/512/3285/premium/3285494.png?token=exp=1655965034~hmac=1f937ba89cef09e6e560cad86ca0ef2a" alt='Content image' />
                        <Center><Button className="nama" width={150} colorScheme="teal" borderRadius={15} marginBottom={3} _hover={{background:'#004D78', cursor: 'pointer'}}>Lomba-Lomba</Button></Center>
                    </Box>
                </GridItem>
                <GridItem background="gray.100" borderRadius={20} maxWidth={400}>
                    <Box position={"relative"} borderRadius={20} transition={'.2s'} _hover={{ transform: 'scale(1.1)', zIndex: 5, boxShadow: '0 0 10px rgba(0, 0, 0, 0.2)', cursor: 'pointer' }}>
                        <Image className="gambar" height="-moz-min-content" p={"60px"} src="https://cdn-icons-png.flaticon.com/512/2037/2037855.png" alt='Content image' />
                        <Center><Button className="nama" width={150} colorScheme="teal" borderRadius={15} marginBottom={3} _hover={{background:'#79A2BC', cursor: 'pointer'}}>Seminar</Button></Center>
                    </Box>
                </GridItem>
            </Grid>
        </Flex>
    )
}