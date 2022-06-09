import React from "react";
import {
    chakra,
    Flex,
    useColorModeValue,
    HStack,
    Button,
    Image,
} from "@chakra-ui/react";

export default function Navbar() {
    const bg = useColorModeValue("white", "white");

    return (
        <React.Fragment>
            <chakra.header
                bg={bg}
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
                            <Button colorScheme='black' variant="ghost">Home</Button>
                            <Button colorScheme='black' variant="ghost">Kelas</Button>
                        </HStack>
                        <HStack
                            spacing={1}
                            mr={1}
                            color={"#006D77"}
                        >
                            <Button colorScheme={"#006D77"} size="sm" variant='ghost'>
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
        </React.Fragment>
    );
}
