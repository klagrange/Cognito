import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import Home from './routes/Home'
import Modal from 'components/Modal'
import SignUp from './routes/SignUp'

export default () => (
        <Router>
            <Modal isOpen={false} />
            <Route path="/" component={SignUp} />
            <Route exact path="/home" component={Home} />
        </Router>
)