import React from 'react';
import { createRoot } from '@wordpress/element';
import { ChakraProvider } from '@chakra-ui/react';

import theme from './theme';
import Navbar from './components/Navbar';
import SubscribeModal from './components/SubscribeModal';

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

const subscribeButtonElement = document.getElementById('subscribe-btn');
if (subscribeButtonElement) {
    const userId = Number(themeData.userId);
    const root = createRoot(
        subscribeButtonElement
    );
    root.render(
        <ChakraProvider theme={theme}>
            <SubscribeModal userId={userId}/>
        </ChakraProvider>
    );
}
