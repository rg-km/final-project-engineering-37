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
                        <Image className="gambar" height="-moz-min-content" p={"60px"} src="https://user-images.githubusercontent.com/30518462/175796886-0b2f195f-1f3a-461e-853b-fccf84393993.png" alt='Content image' />
                        <Center><Button to={"/Beasiswa"} as={Link} className="nama" width={150} colorScheme="teal" borderRadius={15} marginBottom={3} _hover={{background:'red', cursor: 'pointer'}}>Beasiswa</Button></Center>
                    </Box>
                </GridItem>
                <GridItem background="gray.100" borderRadius={20} maxWidth={400}>
                    <Box position={"relative"} borderRadius={20} transition={'.2s'} _hover={{ transform: 'scale(1.1)', zIndex: 5, boxShadow: '0 0 10px rgba(0, 0, 0, 0.2)', cursor: 'pointer' }}>
                        <Image className="gambar" height="-moz-min-content" p={"60px"} src="https://user-images.githubusercontent.com/30518462/175796898-08916595-384c-42fe-bbac-23d753e12d4c.png" alt='Content image' />
                        <Center><Button to={"/Lomba"} as={Link} className="nama" width={150} colorScheme="teal" borderRadius={15} marginBottom={3} _hover={{background:'#004D78', cursor: 'pointer'}}>Lomba-Lomba</Button></Center>
                    </Box>
                </GridItem>
                <GridItem background="gray.100" borderRadius={20} maxWidth={400}>
                    <Box position={"relative"} borderRadius={20} transition={'.2s'} _hover={{ transform: 'scale(1.1)', zIndex: 5, boxShadow: '0 0 10px rgba(0, 0, 0, 0.2)', cursor: 'pointer' }}>
                        <Image className="gambar" height="-moz-min-content" p={"60px"} src="https://cdn-icons-png.flaticon.com/512/2037/2037855.png" alt='Content image' />
                        <Center><Button to={"/Seminar"} as={Link} className="nama" width={150} colorScheme="teal" borderRadius={15} marginBottom={3} _hover={{background:'#79A2BC', cursor: 'pointer'}}>Seminar</Button></Center>
                    </Box>
                </GridItem>
            </Grid>
        </Flex>
    )
}