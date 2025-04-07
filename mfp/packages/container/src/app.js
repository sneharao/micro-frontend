import React from 'react';
import { mount } from 'marketing/MarketingApp';

console.log('Container app is running', mount);


export default () => {
    return <div>
        <h1>Container</h1>
        <p>Container app is running</p>
    </div>;
}