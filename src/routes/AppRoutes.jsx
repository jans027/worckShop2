import { ChakraProvider } from '@chakra-ui/react';
import React, { Component } from 'react';
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';



import LogIn from '../components/LogIn';
import SingUp from '../components/SingUp';
import Wall from '../components/Wall';
import DetalleUser from '../components/DetalleUser';
import "bootstrap/dist/css/bootstrap.min.css";

class AppRoutes extends Component {
    render() {
        return (
           
            <ChakraProvider>
                <BrowserRouter>
                   
                    <Routes>
                     
                    <Route path="/" element={<LogIn />} />
                    <Route path="/detalleuser" element={<DetalleUser />} />
                    <Route path="/wall" element={<Wall />} />
                        <Route path="/singup" element={<SingUp />} />
                        <Route path="/login" element={<LogIn />} />
                        <Route path="*" element={<Navigate to="/"/>}/> 
                    </Routes>
                </BrowserRouter>
                </ChakraProvider>
           

        );
    }
}

export default AppRoutes;