// Mount function for the marketing app

// export mount to be used by container app

import React from 'react';
import ReactDOM from 'react-dom';
import App from './app';
import { createMemoryHistory } from 'history';

const mount = (el) => {
    const history = createMemoryHistory();
    // We are using memory history for the sub-apps
    ReactDOM.render(
        <App history={history} />,
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

export { mount };