import React from 'react';
import AppProvider from 'store/provider';
import wrapPageElementWithTransition from 'helpers/wrapPageElement';
import 'bootstrap/dist/css/bootstrap.min.css';
// React Context in Browser
// eslint-disable-next-line react/prop-types
export const wrapRootElement = ({ element }) => {
  return <AppProvider>{element}</AppProvider>;
};

// Page Transitions
export const wrapPageElement = wrapPageElementWithTransition;
