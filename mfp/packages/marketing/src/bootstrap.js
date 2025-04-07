// Mount function for the marketing app

// export mount to be used by container app

import React from 'react';
import ReactDOM from 'react-dom';
import App from './app';

const mount = (el) => {
    ReactDOM.render(
        <App />,
        el
    );
}
// If we are in development and in isolation, call mount immediately
if (process.env.NODE_ENV === 'development') {
    const devRoot = document.querySelector('#marketing_dev_root');
    if (devRoot) {
        mount(devRoot);
    }
}