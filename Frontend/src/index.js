import Navbar from "./HomePage/Navbar";
import React from "react";
import ReactDOM from "react-dom";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";



const rootElement = document.getElementById("root");
ReactDOM.render(
  <ChakraProvider >
    <Navbar />
  </ChakraProvider>,
  rootElement
);