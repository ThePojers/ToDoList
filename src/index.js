import React from 'react';
import './styles/normalize.scss';
import './styles/global.scss';
import ReactDOM from 'react-dom';
import Home from './components/Home/HomeContainer';
import { Provider } from 'react-redux';
import store from './redux/store';

ReactDOM.render(<Provider store={store}><Home /></Provider>, document.getElementById('app'));


