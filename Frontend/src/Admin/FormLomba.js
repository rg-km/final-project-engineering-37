
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
import Sidebar from './Sidebar';

export default function FormBLomba() {
  return (
    <div>
      <Flex Flex direction={"row"}>
        <Sidebar />
        <Flex Flex direction={"column"} alignItems="center" justifyContent="center" marginTop={30} marginLeft="30%">
          <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}>
            <Stack align={'center'}>
              <Heading fontSize={'4xl'}>Form Data Lomba</Heading>
              <Text fontSize={'lg'} color={'gray.600'}>
                Tambahkan data Lomba baru
              </Text>
            </Stack>

            <Stack spacing={4}>
              <FormControl id="image">
                <FormLabel>Poster</FormLabel>
                <Input type="file" />
              </FormControl>
              <FormControl id="deskripsi">
                <FormLabel>Deskripsi Lomba</FormLabel>
                <Input type="text" />
              </FormControl>
              <Stack spacing={10}>
                <Button
                  bg={'blue.400'}
                  color={'white'}
                  _hover={{
                    bg: 'blue.500',
                  }}>
                  Tambahkan Data Lomba
                </Button>
              </Stack>
            </Stack>
          </Stack>
        </Flex>
      </Flex>
    </div>


  )
}
