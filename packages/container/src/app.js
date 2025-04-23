import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { StylesProvider, createGenerateClassName } from '@material-ui/core/styles';
import MarketingApp from '../components/marketingApp';
import Header from '../components/Header';
import authApp from '../components/authApp';

const generateClassName = createGenerateClassName({
    productionPrefix: 'ca',
});

export default () => {
    return <StylesProvider generateClassName={generateClassName}>
        <BrowserRouter><div>
            <Header />
            <Switch>
                <Route path="/auth" component={authApp} />
                <Route path="/" component={MarketingApp} />
            </Switch>
        </div>
        </BrowserRouter>
    </StylesProvider>;
}