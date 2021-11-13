import React from "react";
import ReacDom from "react-dom";
import { ConfigProvider } from 'antd';
import { Provider } from 'react-redux';
import es_ES from 'antd/lib/locale/es_ES';

import store from './infrastructure/Redux/store';
import Layout from './infrastructure/Containers/Layout';

import 'antd/dist/antd.css';
import 'bootstrap/dist/css/bootstrap.min.css';

ReacDom.render(
  <React.StrictMode>
    <Provider store={store}>
      <ConfigProvider locale={es_ES}>
        <Layout/>
      </ConfigProvider>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);