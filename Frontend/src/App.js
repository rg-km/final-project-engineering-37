import logo from './logo.svg';
import './App.css';
import React from "react";
import Dashbord from "./HomePage/Dashbord";
import Sidebar from "./Admin/Sidebar"
import FormBeasiswa from "./Admin/FormBeasiswa"


const App = () => {
    return (
        <div aria-label="App">
            <h1 aria-label="App Title" hidden>EdTech</h1>
            
            <Dashbord />
            
        </div>
    );
}

export default App
