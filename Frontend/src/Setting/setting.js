import React from 'react'
import {
    Flex,
    Table,
    Thead,
    Tr,
    Th,
    Box,
    FormControl,
    FormLabel,
    Input,
    Checkbox,
    Stack,
    Link,
    Button,
    Heading,
    Text,
} from '@chakra-ui/react';

export default function setting() {
    return (
        <Flex Flex direction={"column"} alignItems="center" justifyContent="center" marginTop={30}>
            <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}>
                <Stack align={'center'}>
                    <Heading fontSize={'4xl'}>Setting</Heading>
                </Stack>

                <Stack spacing={4}>
                    <FormControl id="image">
                        <FormLabel>Foto Profil</FormLabel>
                        <Input type="file" />
                    </FormControl>
                    <FormControl id="firstName">
                        <FormLabel>First Name</FormLabel>
                        <Input type="text" />
                    </FormControl>
                    <FormControl id="Last Name">
                        <FormLabel>Last Name</FormLabel>
                        <Input type="text" />
                    </FormControl>
                    <FormControl id="ttl">
                        <FormLabel>Tanggal Lahir</FormLabel>
                        <Input type="text" />
                    </FormControl>
                    <FormControl id="alamat">
                        <FormLabel>Alamat</FormLabel>
                        <Input type="text" />
                    </FormControl>
                    <FormControl id="Nomor Hp">
                        <FormLabel>Nomor Hp</FormLabel>
                        <Input type="text" />
                    </FormControl>
                    <FormControl id="email">
                        <FormLabel>Email</FormLabel>
                        <Input type="text" />
                    </FormControl>
                    <FormControl id="sekolaj">
                        <FormLabel>Sekolah</FormLabel>
                        <Input type="text" />
                    </FormControl>
                    <Stack spacing={10}>
                        <Button
                            bg={'blue.400'}
                            color={'white'}
                            _hover={{
                                bg: 'blue.500',
                            }}>
                            Ubah Profile
                        </Button>
                    </Stack>
                </Stack>
            </Stack>

        </Flex>
    )
}
