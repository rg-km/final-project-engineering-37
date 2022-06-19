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
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [firstName, setFirstname] = useState("")
    const [phone, setPhone] = useState("")
    const [userName, setUsername] = useState("")


    const submitLogin = (e) => {
        e.preventDefault()

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
                const user = actualData.users;
                const isValid = user.filter(arr => email === arr.email && password === arr.password)[0]
                if (isValid) {
                    onClose();
                    setUser({ image: isValid.image, firstName: isValid.firstName, lastname: isValid.lastName, birthDate: isValid.birthDate, email: isValid.email, phone: isValid.phone })
                }
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
    }

    const submitRegister = (r) => {
        r.preventDefault()

        if (firstName !== "" || email !== "" || phone !== "" || password !== "") {
            fetch('https://dummyjson.com/users', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    firstName: firstName,
                    username: userName,
                    email: email,
                    phone: phone,
                    password: password
                    /* other user data */
                })
            })
        }
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
                        </HStack>
                        {(user) ? (
                            <HStack>
                                <Button to={"/Kelas"} as={Link} colorScheme='black' variant="ghost">Kelas</Button>
                                <Menu>
                                    <MenuButton>
                                        <Avatar src={user.image} bg='teal.500' size='sm' />
                                    </MenuButton>
                                    <MenuList bg="#EFEAEA">
                                        <MenuItem to={"/Profile"} as={Link} >Profile</MenuItem>
                                        <Divider />
                                        <MenuItem >Setting</MenuItem>
                                        <Divider />
                                        <MenuItem onClick={(e) => {
                                            setUser(null)
                                            setEmail(null)
                                            setPassword(null)
                                        }}>Logout</MenuItem>
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
                                                <Input type="email" placeholder="test@test.com" onChange={(e) => { setEmail(e.target.value) }} />
                                            </FormControl>
                                            <FormControl mt={6}>
                                                <FormLabel>Password</FormLabel>
                                                <Input type="password" placeholder="*******" onChange={(e) => { setPassword(e.target.value) }} />
                                            </FormControl>
                                            <Button width="full" mt={2} bg="#006D77" type="submit" color={"white"}>
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
                                        <form onSubmit={submitRegister}>
                                            <FormControl>
                                                <FormLabel>Email</FormLabel>
                                                <Input type="email" placeholder="Masukkan Email" onChange={(r) => { setEmail(r.target.value) }} />
                                            </FormControl>
                                            <FormControl mt={3}>
                                                <FormLabel>Nama</FormLabel>
                                                <Input type="nama" placeholder="Masukkan nama lengkap" onChange={(r) => { setFirstname(r.target.value) }} />
                                            </FormControl>
                                            <FormControl mt={3}>
                                                <FormLabel>Nomor Hp</FormLabel>
                                                <Input type="nomor hp" placeholder="Masukkan nomor hp" onChange={(r) => { setPhone(r.target.value) }} />
                                            </FormControl>
                                            <FormControl mt={3}>
                                                <FormLabel>Password</FormLabel>
                                                <Input type="password" placeholder="Masukkan Password" onChange={(r) => { setPassword(r.target.value) }} />
                                            </FormControl>
                                            <Button width="full" mt={6} type="submit" bg="#006D77" color={"white"}>
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