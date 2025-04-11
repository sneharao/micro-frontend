import React from 'react';
import ReactDOM from 'react-dom';
import App from './app';
// Contianer doesn't need a mount as it will always be running in isolation
ReactDOM.render(
    <App />,
    document.querySelector('#container_dev_root')
);
