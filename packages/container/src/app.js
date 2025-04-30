import React, { lazy, Suspense, useState, useEffect } from 'react';
import { Route, Switch, Redirect, Router } from 'react-router-dom';
import { StylesProvider, createGenerateClassName } from '@material-ui/core/styles';
import Header from '../components/Header';
import Progress from '../components/progress';
import { createBrowserHistory } from 'history';

const MarketingLazy = lazy(() => import('./../components/marketingApp'));
const AuthLazy = lazy(() => import('./../components/authApp'));
const DashBoardLazy = lazy(() => import('./../components/dashboardApp'));

const generateClassName = createGenerateClassName({
    productionPrefix: 'ca',
});
const history = createBrowserHistory();

export default () => {
    const [isSignedIn, setIsSignedIn] = useState(false);

    useEffect(() => {
        if (isSignedIn) {
            history.push('/dashboard');
        }
    }, [isSignedIn]);

    return <StylesProvider generateClassName={generateClassName}>
        <Router history={history}>
            <div>
                <Header isSignedIn={isSignedIn} onSignOut={() => setIsSignedIn(false)} />
                <Suspense fallback={<Progress />}>
                    <Switch>
                        <Route path="/auth"> <AuthLazy onLogIn={() => setIsSignedIn(true)} /> </Route>
                        <Route path="/dashboard" >
                            {!isSignedIn && <Redirect to="/" />}
                            <DashBoardLazy />
                        </Route>
                        <Route path="/" component={MarketingLazy} />
                    </Switch>
                </Suspense>
            </div>
        </Router>
    </StylesProvider>;
}