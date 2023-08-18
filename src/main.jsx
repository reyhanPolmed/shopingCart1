import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";

import productReducer, { productsFetch } from "./features/productSlice.js";
import { productApi } from './features/productsApi.js';
import cartSlice from './features/cartSlice.js';

const store = configureStore({
  reducer: {
    product: productReducer,
    cart: cartSlice,
    [productApi.reducerPath]: productApi.reducer,
  },
    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(productApi.middleware),
});

store.dispatch(productsFetch())

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
        <App />
    </Provider>
  </React.StrictMode>,
)
