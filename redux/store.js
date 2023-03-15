// import { createStore, applyMiddleware } from 'redux';
import { configureStore, combineReducers  } from '@reduxjs/toolkit';
import { composeWithDevTools } from '@redux-devtools/extension';
import { authReducer } from './auth/slice';


const rootReducer = combineReducers({
  auth: authReducer,
})

export const store = configureStore({
    reducer: rootReducer,
    devTools: true,
    compose: composeWithDevTools
  });

