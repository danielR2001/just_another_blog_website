import React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import reducers from "./core/reducers";
import {
  CssBaseline,
  StyledEngineProvider,
  ThemeProvider,
} from "@mui/material";
import Themes from "./ui/theme";
import Router from "./router";

const store = createStore(reducers, compose(applyMiddleware(thunk)));

const rootElement = document.getElementById("root");
render(
  <Provider store={store}>
    <StyledEngineProvider injectFirst>
      <ThemeProvider theme={Themes.default}>
        <CssBaseline />
        <Router />
      </ThemeProvider>
    </StyledEngineProvider>
  </Provider>,
  rootElement
);
