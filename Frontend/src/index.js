import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { ChakraProvider } from "@chakra-ui/react";
import { BrowserRouter, Routes, Route, } from "react-router-dom";
import Navbar from './HomePage/Navbar';
import Sidebar from './Admin/Sidebar';
import Kelas from './Kelas/kelas';
import Dashbord from "./HomePage/Dashbord";
import Profile from "./HomePage/Profile";
import FormBeasiswa from "./Admin/FormBeasiswa";
import FormLomba from "./Admin/FormLomba";
import FormSeminar from "./Admin/FormSeminar";
import Setting from "./Setting/setting";
// import PilihanSd from "./Materi/PilihanSd";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ChakraProvider>
      <BrowserRouter>
        {/* <Sidebar />  */}
        
        <Routes>
          <Route path="/" element={<App />}>
            <Route index element={<Dashbord />} />
            <Route path="/Kelas" element={<Kelas />} />
            <Route path="/Profile" element={<Profile />} />
            <Route path="/Setting" element={<Setting />} />
            {/* <Route path="/PilihanSd" element={<PilihanSd />} /> */}
          </Route>
          <Route path="/Sidebar" element={<Sidebar />} />
          <Route path="/FormBeasiswa" element={<FormBeasiswa />} />
          <Route path="/FormLomba" element={<FormLomba />} />
          <Route path="/FormSeminar" element={<FormSeminar />} />
        </Routes>
      </BrowserRouter>
    </ChakraProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
