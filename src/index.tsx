import React from 'react';
import ReactDom from 'react-dom';
import './style/styles.scss';
import './funcs';
import AppRoot from './components/AppRoot';

const element = document.querySelector('#root');
ReactDom.render(<AppRoot />, element);
