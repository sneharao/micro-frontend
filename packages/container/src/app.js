import React, { lazy, Suspense } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { StylesProvider, createGenerateClassName } from '@material-ui/core/styles';
import Header from '../components/Header';
import Progress from '../components/progress';

const marketingLazy = lazy(() => import('./../components/MarketingApp'));
const authLazy = lazy(() => import('./../components/authApp'));

const generateClassName = createGenerateClassName({
    productionPrefix: 'ca',
});

export default () => {
    return <StylesProvider generateClassName={generateClassName}>
        <BrowserRouter><div>
            <Header />
            <Suspense fallback={<Progress />}>
                <Switch>
                    <Route path="/auth" component={authLazy} />
                    <Route path="/" component={marketingLazy} />
                </Switch>
            </Suspense>
        </div>
        </BrowserRouter>
    </StylesProvider>;
}