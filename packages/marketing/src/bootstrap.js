// Mount function for the marketing app

// export mount to be used by container app

import React from 'react';
import ReactDOM from 'react-dom';
import App from './app';
import { createMemoryHistory } from 'history';

const mount = (el, { onNavigate }) => {
    const history = createMemoryHistory();
    // We need to pass the history object to the app
    if (onNavigate) {
        history.listen(onNavigate);
    }
    ReactDOM.render(
        <App history={history} />,
        el
    );
}
// If we are in development and in isolation, call mount immediately
if (process.env.NODE_ENV === 'development') {
    const devRoot = document.querySelector('#marketing_dev_root');
    if (devRoot) {
        mount(devRoot, {});
    }
}

export { mount };