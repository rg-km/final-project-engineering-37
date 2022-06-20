import React, { createContext, useEffect, useState } from "react"
import {
    Container,
    Stack,
    Flex,
    Box,
    Heading,
    Text,
    Image
  } from '@chakra-ui/react';



export default function Profile() {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetch(`https://dummyjson.com/users`)
            .then((response) => {
                if (!response.ok) {
                    throw new Error(
                        `This is an HTTP error: The status is ${response.status}`
                    );
                }
                return response.json();
            })
            .then((actualData) => {
                setData(actualData.users);
                setError(null);
            })
            .catch((err) => {
                setError(err.message);
                setData(null);
            })
            .finally(() => {
                setLoading(false);
            });
    }, []);

    return (



        <div>
            <h1>API Posts</h1>
            {loading && <div>A moment please...</div>}
            <ul>
                {data && data.map((id, index) => (
                        <li key={index}>
                            <h3>{id.firstName}</h3>
                        </li>
                    ))}
            </ul>

            <Container maxW={'7xl'}>
                <Box background='#cecece' align={'center'} rounded={'3xl'}  direction={{ base: 'column', md: 'row' }}>
                    <Box background='#f2f2f2' margin={'10px'} align={'center'} rounded={'3xl'}  direction={{ base: 'column', md: 'row' }}>
                        <Stack margin={'10px'} align={'center'} spacing={{ base: 8, md: 10 }} rounded={'2xl'} py={{ base: 20, md: 28 }} direction={{ base: 'column', md: 'row' }}>
                            <Flex flex={1} justify={'center'} align={'center'} position={'relative'} w={'full'}>
                                <Image alt={'Profile Image'} height={'300px'} align={'center'} src={'https://cdn-icons-png.flaticon.com/512/949/949519.png'}/>
                            </Flex>
                            <Stack flex={1} spacing={{ base: 5, md: 10 }}>
                                <Heading lineHeight={1.1} align={'left'} fontWeight={600} fontSize={{ base: '3xl', sm: '4xl', lg: '6xl' }}>
                                    <Text as={'span'} position={'relative'} color={'#06d6a0'} fontFamily={'poppins'} fontStyle={'italic'}>
                                        Hello, 
                                    </Text>
                                    <Text as={'span'} position={'relative'} fontFamily={'poppins'} fontStyle={'italic'}>
                                        Im
                                    </Text>
                                    <br />
                                    <Text as={'span'} fontFamily={'poppins'} fontStyle={'italic'}>
                                        Nama Users
                                    </Text>
                                </Heading>
                                    <Text as={'span'} align={'left'} fontWeight={500}>
                                        Tanggal Lahir :
                                    <br/>
                                        Alamat :
                                    <br/>
                                        Nomor Hp :
                                    <br/>
                                        Email :
                                    <br/>
                                        Sekolah :
                                    </Text>
                            </Stack>
                        </Stack>
                    </Box>
                </Box>
            </Container>

        </div>
    );
}