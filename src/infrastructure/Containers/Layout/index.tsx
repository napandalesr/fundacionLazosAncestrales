import React from "react";
import { BrowserRouter } from 'react-router-dom';
import { Row } from "antd";

import PrivateRouter from "../../Router/PrivateRouter";
import Header from "../../Components/Header";
import Footer from "../../Components/Footer";

import "./style.scss";

const Layout:React.FC = () => {
  return <BrowserRouter>
    <header>
      <Header/>
    </header>
      <main>
        <Row>
          <PrivateRouter/>
        </Row>
      </main>
    <footer>
      <Footer/>
    </footer>
  </BrowserRouter>;
};

export default Layout;