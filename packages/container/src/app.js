import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import MarketingApp from '../components/marketingApp';
import Header from './Header';


export default () => {
    return <BrowserRouter><div>
        <h1>Container !! </h1>
        <p>Container app is running</p>
        <hr />
        <Header />
        <MarketingApp />
    </div>
    </BrowserRouter>;
}