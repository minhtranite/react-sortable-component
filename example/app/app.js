import 'babel-core/polyfill';

import React from 'react';
import ReactDOM from 'react-dom';
import {createHistory} from 'history';
import {Router, useRouterHistory} from 'react-router';
import App from 'components/App.js';
import {name} from '../../package.json';

import 'bootstrap/dist/css/bootstrap.css';
import 'react-sortable-component/src/sortable.scss';
import 'assets/styles/app.scss';

const routes = {
  path: '/',
  component: App,
  indexRoute: {
    component: require('components/pages/Home')
  },
  childRoutes: [
    require('routes/Nested'),
    require('routes/CustomRoot')
  ]
};

const DEV = process && process.env && process.env.NODE_ENV === 'development';
const history = useRouterHistory(createHistory)({
  basename: '/' + (DEV ? '' : name)
});

const run = () => {
  ReactDOM.render(
    <Router routes={routes} history={history}/>,
    document.getElementById('app')
  );
};

if (window.addEventListener) {
  window.addEventListener('DOMContentLoaded', run);
} else {
  window.attachEvent('onload', run);
}
