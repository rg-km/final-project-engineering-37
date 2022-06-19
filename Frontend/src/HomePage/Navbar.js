import React, { useState } from "react";
import {
    chakra,
    Flex,
    HStack,
    Button,
    Image,
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalBody,
    ModalCloseButton,
    useDisclosure,
    Center,
    Grid,
    GridItem,
    Box,
    FormControl,
    FormLabel,
    Input,
    Avatar,
    Menu,
    MenuButton,
    MenuItem,
    MenuList,
    Divider,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";


export default function Navbar() {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const [modal, setModal] = useState('login')
    const [user, setUser] = useState(null)

    const submitLogin = (e) => {
        e.preventDefault()
        setUser('login')
    }

    return (
        <React.Fragment>
            <chakra.header
                w="full"
                px={{ base: 2, sm: 4 }}
                py={4}
                shadow="md"
            >

                <Flex alignItems="center" justifyContent="space-between" mx="auto">
                    <Flex>
                        <Image src="https://user-images.githubusercontent.com/30518462/172759353-f055f304-6b47-457b-abb1-ba2c2256c7cd.png" alt="Instagram" maxW={"80px"} aria-label="App Logo" />
                        <chakra.h1 fontSize="xl" fontWeight="medium" ml="2" color={"black"}>
                            EdTech
                        </chakra.h1>
                    </Flex>
                    <HStack display="flex" alignItems="center" spacing={1}>
                        <HStack
                            spacing={1}
                            mr={1}
                            color="black"
                        >
                            <Button to={"/Home"} as={Link} colorScheme='black' variant="ghost">Home</Button>
                            <Button to={"/Kelas"} as={Link} colorScheme='black' variant="ghost">Kelas</Button>
                        </HStack>
                        {(user) ? (
                            <HStack>
                                <Menu>
                                    <MenuButton>
                                        <Avatar src='https://bit.ly/broken-link' bg='teal.500' size='sm' />
                                    </MenuButton>
                                    <MenuList bg="#EFEAEA">
                                        <MenuItem>Profile</MenuItem>
                                        <Divider />
                                        <MenuItem >Setting</MenuItem>
                                        <Divider />
                                        <MenuItem >Logout</MenuItem>
                                    </MenuList>
                                </Menu>
                            </HStack>
                        ) : (
                            <>
                                <HStack
                                    spacing={1}
                                    mr={1}
                                    color={"#006D77"}
                                >
                                    <Button onClick={() => {
                                        setModal('login')
                                        onOpen()
                                    }} colorScheme={"#006D77"} size="sm" variant='ghost'>
                                        Login
                                    </Button>
                                </HStack>
                                <HStack
                                    spacing={1}
                                    mr={1}
                                    color="white"
                                    bg={"#006D77"}
                                    borderRadius='20px'
                                >
                                    <Button onClick={() => {
                                        setModal('register')
                                        onOpen()
                                    }} variant="ghost" borderRadius='20px' size="sm">Register</Button>
                                </HStack>
                            </>
                        )}
                    </HStack>
                </Flex>
            </chakra.header>

            <Modal isCentered isOpen={isOpen} onClose={onClose}>
                <ModalOverlay />
                {(modal === 'login') ? (
                    <ModalContent borderRadius="20" width={{ md: "400px", base: "400px" }} height={{ md: "500px", base: "500px" }}>
                        <ModalHeader color="#006D77" fontSize={30}><Center>Login EdTech</Center></ModalHeader>
                        <Grid templateColumns='repeat(10, 1fr)' gap={1}>
                            <GridItem colSpan={6} textAlign="right">Don't have account?</GridItem>
                            <GridItem colStart={8}>
                                <Button color="red" variant='link' onClick={() => {
                                    onClose()
                                    setModal('register')
                                    onOpen()
                                }}>Register</Button>
                            </GridItem>
                        </Grid>
                        <ModalCloseButton />
                        <ModalBody>
                            <Flex width="full" align="center" justifyContent="center">
                                <Box p={2}>
                                    <Box my={4} textAlign="left">
                                        <form onSubmit={submitLogin}>
                                            <FormControl>
                                                <FormLabel>Email</FormLabel>
                                                <Input type="email" placeholder="test@test.com" />
                                            </FormControl>
                                            <FormControl mt={6}>
                                                <FormLabel>Password</FormLabel>
                                                <Input type="password" placeholder="*******" />
                                            </FormControl>
                                            <Button width="full" mt={2} bg="#006D77" type="submit" onClick={() => {onClose()}}>
                                                Sign In
                                            </Button>

                                            <Center fontSize={15} mt={2}><p>Atau Masuk Dengan</p></Center>
                                            <Button width="full" mt={2} type="submit" bg="#CB4539" color={"white"}>
                                                <Image src="https://img.icons8.com/color/20/undefined/google-logo.png" marginRight={5} />
                                                Login with google
                                            </Button>
                                        </form>
                                    </Box>
                                </Box>
                            </Flex>
                        </ModalBody>
                        {/* <ModalFooter>
                        </ModalFooter> */}
                    </ModalContent>
                ) : (
                    <ModalContent borderRadius="20" width={{ md: "400px", base: "400px" }} height={{ md: "600px", base: "600px" }}>
                        <ModalHeader color="#006D77" fontSize={30}><Center>Register EdTech</Center></ModalHeader>
                        <Grid templateColumns='repeat(10, 1fr)' gap={1}>
                            <GridItem colSpan={6} textAlign="right">Already have account?</GridItem>
                            <GridItem colStart={8}><Button color="red" variant='link' onClick={() => {
                                onClose()
                                setModal('login')
                                onOpen()
                            }}>Login</Button></GridItem>
                        </Grid>
                        <ModalCloseButton />
                        <ModalBody>
                            <Flex width="full" align="center" justifyContent="center">
                                <Box p={2}>
                                    <Box my={4} textAlign="left">
                                        <form>
                                            <FormControl>
                                                <FormLabel>Email</FormLabel>
                                                <Input type="email" placeholder="Masukkan Email" />
                                            </FormControl>
                                            <FormControl mt={3}>
                                                <FormLabel>Nama</FormLabel>
                                                <Input type="nama" placeholder="Masukkan nama lengkap" />
                                            </FormControl>
                                            <FormControl mt={3}>
                                                <FormLabel>Nomor Hp</FormLabel>
                                                <Input type="nomor hp" placeholder="Masukkan nomor hp" />
                                            </FormControl>
                                            <FormControl mt={3}>
                                                <FormLabel>Password</FormLabel>
                                                <Input type="password" placeholder="Masukkan Password" />
                                            </FormControl>
                                            <Button width="full" mt={6} type="submit" bg="#006D77" color={"white"} onClick={() => {onClose()}}>
                                                Register
                                            </Button>
                                        </form>
                                    </Box>
                                </Box>
                            </Flex>
                        </ModalBody>
                    </ModalContent>
                )}
            </Modal>
        </React.Fragment>
    );
}