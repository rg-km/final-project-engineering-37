import React from "react";
import Dashbord from "./HomePage/Dashbord";
import Navbar from './HomePage/Navbar';


const App = () => {
    return (
        <div aria-label="App" style={{ backgroundImage: "url(" + "https://user-images.githubusercontent.com/30518462/173477403-b1588cf4-379d-47be-b394-6761f042646b.png" + ")", height:'100vh',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',  }}>
            <h1 aria-label="App Title" hidden>EdTech</h1>
            <Navbar />
            <Dashbord />
        </div>
    );
}

export default App