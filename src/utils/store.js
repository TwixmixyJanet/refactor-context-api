//Import { createStore } from redux.

import { createStore } from 'redux';

// Import reducers from ./reducers.

import reducers from './reducers';

// Create a default export of createStore that accepts an argument of reducers.

export default createStore(reducers);