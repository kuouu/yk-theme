import React from 'react';
import { createRoot } from '@wordpress/element';
import { ChakraProvider } from '@chakra-ui/react';

import theme from './theme';
import Navbar from './components/Navbar';

const navbarElement = document.getElementById('navbar');
if (navbarElement) {
    const root = createRoot(
        navbarElement
    );
    root.render(
        <ChakraProvider theme={theme}>
            <Navbar />
        </ChakraProvider>
    );
}
