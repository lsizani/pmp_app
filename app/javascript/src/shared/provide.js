import React from 'react';
import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { createLogger } from 'redux-logger'
import { Provider } from 'react-redux';
import { reducer } from './reducer';

const middleware = [ thunk ];
if (process.env.NODE_ENV !== 'production') {
  middleware.push(createLogger())
}

const store = createStore(
  reducer,
  applyMiddleware(...middleware)
);

export const provide = WrappedComponent => {
  const Root = props => (
    <Provider store={store}>
      <WrappedComponent {...props} />
    </Provider>
  );
  return Root;
};

