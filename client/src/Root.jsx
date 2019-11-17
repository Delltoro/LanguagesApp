import React from 'react';
import App from './components/App';
import { Provider } from "react-redux";
import Layout from "./layout/Layout";

import { initializeStore } from './store/index';
const store = initializeStore();
export default function Root() {
    return (
        <Provider store={store}>
          <Layout>
            <App/>
          </Layout>
        </Provider>
    )
}