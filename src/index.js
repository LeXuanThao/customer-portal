import React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';

import App from "./App";

import store from "./redux/store";

import "bootstrap/scss/bootstrap.scss";
import "./style.scss";

library.add(fas);

const rootElement = document.getElementById("root");
render(<Provider store={store}><App /></Provider>, rootElement);