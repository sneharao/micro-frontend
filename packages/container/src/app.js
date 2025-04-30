import React, { lazy, Suspense } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { StylesProvider, createGenerateClassName } from '@material-ui/core/styles';
import Header from '../components/Header';
import Progress from '../components/progress';

const MarketingLazy = lazy(() => import('./../components/marketingApp'));
const AuthLazy = lazy(() => import('./../components/authApp'));
const DashBoardLazy = lazy(() => import('./../components/dashboardApp'));

const generateClassName = createGenerateClassName({
    productionPrefix: 'ca',
});

export default () => {
    const [isSignedIn, setIsSignedIn] = React.useState(false);
    return <StylesProvider generateClassName={generateClassName}>
        <BrowserRouter>
            <div>
                <Header isSignedIn={isSignedIn} onSignOut={() => setIsSignedIn(false)} />
                <Suspense fallback={<Progress />}>
                    <Switch>
                        <Route path="/auth"> <AuthLazy onLogIn={() => setIsSignedIn(true)} /> </Route>
                        <Route path="/dashboard" component={DashBoardLazy} />
                        <Route path="/" component={MarketingLazy} />
                    </Switch>
                </Suspense>
            </div>
        </BrowserRouter>
    </StylesProvider>;
}