import { Col, Divider, Row } from "antd";
import React from "react";

import section2 from "../../images/section2.jpg";

import "./style.scss";

const WeDoMain:React.FC = () => {
  return <div>
    <Row>
      <Col span={12}  id="section2Img">
      <img src={section2} id="imgSection1"/>
      </Col>
      <Col span={11}  offset={1}>
        <section id="section2">
          <Divider orientation="left"><h2>¿Qué hacemos?</h2></Divider>
          Brindar educación formal e informal en el nivel de educación básica y media académica de adultos con profundización social comunitaria mediante el programa educativo. realizar, dirigir, organizar, patrocinar y/o colaborar en encuentros charlas, talleres, seminarios, reuniones, simposios, diplomados, jornadas sociales, congresos y cursos ofrecidos a empresas públicas y privadas, personas naturales y jurídicas complementarias a los programas ofrecidos y necesidades en los escenarios productivos.
        </section>
      </Col>
    </Row>
  </div>;
};

export default WeDoMain;