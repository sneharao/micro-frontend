// Mount function for the marketing app

// export mount to be used by container app

import React from 'react';
import ReactDOM from 'react-dom';
import App from './app';
import { createMemoryHistory, createBrowserHistory } from 'history';

const mount = (el, { onNavigate, defaultHostory }) => {
    const history = defaultHostory || createMemoryHistory();
    // We need to pass the history object to the app
    if (onNavigate) {
        history.listen(onNavigate);
    }
    ReactDOM.render(
        <App history={history} />,
        el
    );
    return {
        onParentNavigate({ pathname: nextPathname }) {
            const { pathname } = history.location;
            // to check if current location is same as next location
            // if same then do not push to history
            if (pathname !== nextPathname) {
                history.push(nextPathname);
            }

        },
    };
}
// If we are in development and in isolation, call mount immediately
if (process.env.NODE_ENV === 'development') {
    const devRoot = document.querySelector('#marketing_dev_root');
    if (devRoot) {
        mount(devRoot, { defaultHostory: createBrowserHistory() });
    }
}

export { mount };