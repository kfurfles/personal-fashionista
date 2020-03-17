import * as React from 'react';
import * as ReactDOM from "react-dom";

import { App } from './containers/App';
import { Routes } from './routes';
import "./styles.scss";

var mountNode = document.getElementById("app");
ReactDOM.render(
<App></App>, 
mountNode);
