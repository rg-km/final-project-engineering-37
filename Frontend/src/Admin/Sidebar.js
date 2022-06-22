import React, { useState } from 'react'
import {
    Flex,
    Text,
    Divider,
    Avatar,
    Heading,
    HStack,
    Button
} from '@chakra-ui/react'
import NavItem from './NavItem'
import { Link } from "react-router-dom";

export default function Sidebar() {
    const [navSize, changeNavSize] = useState("large")
    return (
        <Flex
            pos="sticky"
            left="5"
            h="95vh"
            marginTop="2.5vh"
            boxShadow="0 4px 12px 0 rgba(0, 0, 0, 0.05)"
            borderRadius={navSize == "small" ? "15px" : "30px"}
            w={navSize == "small" ? "75px" : "200px"}
            flexDir="column"
            justifyContent="space-between"
            background={"teal"}
        >
            <Flex
                p="10%"
                flexDir="column"
                w="100%"
                alignItems={navSize == "small" ? "center" : "flex-start"}
                as="nav"
            >
                <Button to={"/"} as={Link} navSize={navSize} mt="50px" fontSize="20px" color="white" variant="ghost" title="Dashboard" description="This is the description for the dashboard.">Dashboard</Button>
                <Button to={"/FormBeasiswa"} as={Link} mt="50px" fontSize="20px" color="white" navSize={navSize} variant="ghost" title="Tambah Beasiswa">Form Besiswa</Button>
                <Button to={"/FormLomba"} as={Link} mt="50px" fontSize="20px" color="white" navSize={navSize} variant="ghost"  title="Tambah Lomba">Form Lomba</Button>
                <Button to={"/FormSeminar"} as={Link} mt="50px" fontSize="20px" color="white" navSize={navSize} variant="ghost"  title="Tambah Seminar">Form Seminar</Button>
            </Flex>

            <Flex
                p="5%"
                flexDir="column"
                w="100%"
                alignItems={navSize == "small" ? "center" : "flex-start"}
                mb={4}
            >
                <Divider display={navSize == "small" ? "none" : "flex"} />
                <Flex mt={4} align="center">
                    <Avatar size="sm" src="avatar-1.jpg" />
                    <Flex flexDir="column" ml={4} display={navSize == "small" ? "none" : "flex"}>
                        <Heading as="h3" size="sm">Sylwia Weller</Heading>
                        <Text color="gray">Admin</Text>
                    </Flex>
                </Flex>
            </Flex>
        </Flex>
    )
}