
import React from 'react';
import { hot } from 'react-hot-loader/root';
import { 
  BrowserRouter as Router,
} from 'react-router-dom'

import { Header } from '../../components/header'
import { Routes } from '../../routes'

export function App (){
    return (
        <Router>
            <Header />
            <Routes />
        </Router>
    );
}

export default hot(App);
