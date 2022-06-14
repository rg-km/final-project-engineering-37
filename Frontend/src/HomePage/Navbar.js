import React from "react";
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
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    useDisclosure,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";

export default function Navbar() {
    const { isOpen, onOpen, onClose } = useDisclosure();

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
                        <HStack
                            spacing={1}
                            mr={1}
                            color={"#006D77"}
                        >
                            <Button onClick={onOpen} colorScheme={"#006D77"} size="sm" variant='ghost'>
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
                            <Button variant="ghost" borderRadius='20px' size="sm">Register</Button>
                        </HStack>
                    </HStack>
                </Flex>
            </chakra.header>

            <Modal isCentered isOpen={isOpen} onClose={onClose}>
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader>Login</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>
                        <p count={2}></p>
                    </ModalBody>

                    {/* <ModalFooter>
                        <Button colorScheme='blue' mr={3} onClick={onClose}>
                            Close
                        </Button>
                        <Button variant='ghost'>Secondary Action</Button>
                    </ModalFooter> */}
                </ModalContent>
            </Modal>

        </React.Fragment>
    );
}