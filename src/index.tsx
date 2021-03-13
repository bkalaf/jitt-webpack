import React from 'react';
import ReactDom from 'react-dom';
import './style/styles.scss';

import 'jquery';
import 'foundation-sites';

$(document).foundation();
import AppRoot from './components/AppRoot';

const element = document.querySelector('#root');
ReactDom.render(<AppRoot />, element);
