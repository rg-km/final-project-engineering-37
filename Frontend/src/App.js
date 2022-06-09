import React from "react";
import Navbar from './HomePage/Navbar';

const App = () => {
    return (
        <div aria-label="App">
            <Container maxW={'container.lg'} p={'2'} flexGrow='1' overflow={'hidden'} display='flex' flexDirection={'column'} justifyContent='center'>
                <h1 aria-label="App Title" hidden>Edtech</h1>
                <Outlet />
            </Container>
        </div>
    )
}

export default App