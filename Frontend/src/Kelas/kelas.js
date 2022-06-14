import React from "react";
import { Grid, GridItem } from '@chakra-ui/react'

export default function kelas() {
    return (
        <Grid templateColumns='repeat(3, 1fr)' gap={3} marginTop='4vh'>
            <GridItem w='100%' h='10'/>
            <GridItem w='110%' h='10' align='center' fontSize={60} color='black'>
                <h1>Welcome to KEelas!</h1>
            </GridItem>
            <GridItem w='100%' h='10'/>

            <GridItem w='100%' h='10'/>
            <GridItem w='110%' h='10' marginTop='8vh' align='center' fontSize={18} color='black'>
                <p>Situs website yang memberikan sebuah informasi mengenai lomba, seminar, beasiswa dan modul-modul pembelajaran yang up to date</p>
            </GridItem>
        </Grid>
    )
}