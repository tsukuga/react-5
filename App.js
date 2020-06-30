import React from 'react';
import {Footer, Loading, ScrollToTop} from './components/UIkit'
import {Header} from './components/Header'
import Router from "./Router";

const App = () => {
    return (
            <main className="c-main">
                <Router />
            </main>
    );
};

export default App;