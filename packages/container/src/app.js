import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { StylesProvider, createGenerateClassName } from '@material-ui/core/styles';
import MarketingApp from '../components/marketingApp';
import Header from '../components/Header';

const generateClassName = createGenerateClassName({
    productionPrefix: 'ca',
});

export default () => {
    return <StylesProvider generateClassName={generateClassName}>
        <BrowserRouter><div>
            <Header />
            <MarketingApp />
        </div>
        </BrowserRouter>
    </StylesProvider>;
}