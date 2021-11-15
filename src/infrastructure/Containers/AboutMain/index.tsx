import React from "react";
import { Col, Divider, Row } from "antd";

import section1 from "../../images/section1.jpg";
import { _Routes } from "../../Utils/constanst";

import "./style.scss";

const AboutMain:React.FC = () => {
  return <div id={_Routes.About.slice(1, _Routes.About.length)}>
  <Row>
    <Col lg={{span:11, offset:1}} xs={{span:22}}>
      <section id="section1">
        <Divider orientation="left"><h2>Sobre nosotros</h2></Divider>
        Somos una fundación sin ánimos de lucro que  trabaja en pro de comunidad bonaverense especialmente en su población mas vulnerable, con la finalidad que aprovechen el tiempo libre en actividades productivas y construyan su proyecto de vida con bases solidas para mejorar su calidad de vida y la de sus familias
      </section>
    </Col>
    <Col lg={{span:12, offset:0}} xs={{offset:6, span: 22}} id="section1Img">
      <img src={section1} id="imgSection1"/>
    </Col>
  </Row>
</div>;
};

export default AboutMain;