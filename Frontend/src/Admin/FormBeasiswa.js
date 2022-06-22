
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

export default function FormBeasiswa() {
  return (
    <div>
      <Flex Flex direction={"column"} alignItems="center" justifyContent="center" marginTop={30}>
        <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}>
          <Stack align={'center'}>
            <Heading fontSize={'4xl'}>Form Data Beasiswa</Heading>
            <Text fontSize={'lg'} color={'gray.600'}>
              Tambahkan data Beasiswa baru
            </Text>
          </Stack>

          <Stack spacing={4}>
            <FormControl id="image">
              <FormLabel>Poster</FormLabel>
              <Input type="image" />
              <Button 
                bg={'blue.400'}
                color={'white'}
                _hover={{
                  bg: 'blue.500',
                }}>
                Tambah Gambar
              </Button>
            </FormControl>
            <FormControl id="deskripsi">
              <FormLabel>Deskripsi Beasiswa</FormLabel>
              <Input type="text" />
            </FormControl>
            <Stack spacing={10}>
              <Button
                bg={'blue.400'}
                color={'white'}
                _hover={{
                  bg: 'blue.500',
                }}>
                Tambahkan Data Beasiswa
              </Button>
            </Stack>
          </Stack>
        </Stack>
      </Flex>


      <Table>
        <Thead>
          <Tr>
            <Th>Poster</Th>
            <Th>Deskripsi</Th>
          </Tr>
        </Thead>
      </Table>
    </div>


  )
}
