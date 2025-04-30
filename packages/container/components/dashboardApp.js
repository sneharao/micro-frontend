// These will ensure even if marketing app changes to flubber or any other tech no changes in technology
import { mount } from 'dashboard/DashboardApp';
import React, { useRef, useEffect } from 'react';

export default () => {
    const ref = useRef(null);
    useEffect(() => {
        mount(ref.current);
        // listen to history changes and call onParentNavigate
    }, []);

    return <div ref={ref} />;

}