// import { createStore, applyMiddleware } from 'redux';
// import { getDefaultMiddleware } from 'redux';
import { configureStore, combineReducers, getDefaultMiddleware } from '@reduxjs/toolkit';
import { composeWithDevTools } from '@redux-devtools/extension';
import authReducer from './auth/slice';
import dataReducer from './data/slice';
import { prestateReducer } from './prestate/slice';

// import thunk from 'redux-thunk';

const rootReducer = combineReducers({
  auth: authReducer,
  data: dataReducer,
  prestate: prestateReducer,
})

const store = configureStore({
    reducer: rootReducer,
    devTools: true,
    compose: composeWithDevTools(),
  });

// const store = configureStore({ reducer: rootReducer,});


// const store = configureStore({
//   reducer: rootReducer,
//   middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
//   // devTools: process.env.NODE_ENV !== 'production',
//   devTools: true,
//   enhancers: [window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()],
// });

// const middleware = [...getDefaultMiddleware(), thunk];
// const store = configureStore({ reducer: rootReducer, middleware, devTools: true });

// const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
// const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunkMiddleware)));

export default store;