import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route , hashHistory} from 'react-router';

//My components
import Container from './components/Container.jsx';

let app = document.getElementById('app');

ReactDOM.render(
    <Container />
    , app);