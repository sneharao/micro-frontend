// These will ensure even if marketing app changes to flubber or any other tech no changes in technology
import { mount } from 'marketing/MarketingApp';
import React, { useRef, useEffect } from 'react';
import { useHistory } from 'react-router-dom';

export default () => {
    const ref = useRef(null);
    const history = useHistory();
    useEffect(() => {
        const { onParentNavigate } = mount(ref.current, {
            onNavigate: ({ pathname: nextPathname }) => {
                const { pathname } = history.location;
                // to check if current location is same as next location
                // if same then do not push to history
                if (pathname !== nextPathname) {
                    history.push(nextPathname);
                }
                console.log('onNavigate called from cmarketing', nextPathname);
            }
        });
        history.listen(onParentNavigate);
        // listen to history changes and call onParentNavigate
    }, []);

    return <div ref={ref} />;

}