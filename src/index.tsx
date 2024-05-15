import React from 'react';
import { createRoot } from '@wordpress/element';
import Test from './Test';

const element = document.getElementById('test');
if (element) {
    const root = createRoot(
        element
    );
    root.render(<Test />);
}
