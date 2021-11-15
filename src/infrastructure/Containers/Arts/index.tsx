import React from "react";
import { Col, Divider, Row } from "antd";

import section3 from "../../images/section3.jpg";
import { _Routes } from "../../Utils/constanst";

import "./style.scss";

const Arts:React.FC = () => {
  return <div id={_Routes.Arts.slice(1, _Routes.Arts.length)}>
  <Row>
    <Col lg={{span:11, offset:1}} xs={{span:22}}>
      <section id="section1">
        <Divider orientation="left"><h2>Artes</h2></Divider>
        <p>La Fundación educativa Lazos Ancestrales reconoce la culturalidad como  un mecanismo que asiste la integración  de niños, adolescentes y jóvenes; además de mejorar  procesos de convivencia a partir de   la practica y realización de diferentes actividades lúdica que les permite recrear el mundo que les rodea con una mirada asertiva.</p>
        <p>Dentro de nuestro portafolio artístico tenemos:</p>
        <ul>
          <li>Manualidades: con un enfoque en la conservación, prevención, y cuidado del medio ambiente,  utilizando técnicas de transformación de materiales reciclables.</li>
          <li>Música: Representaciones musicales con  instrumentos del Pacifico Colombianos, utilizándolos como excusa para conocer la historia de los pueblos afrodescendientes y a partir de allí proyectar procesos de resignificación y convivencia.</li>
          <li>Danza:  representación de los diferentes aires musicales del pacifico colombiano. </li>
          <li>Teatro:  es una estrategia que le permite al ser, fortalecer su espiritualidad y las emociones. </li>
        </ul>
      </section>
    </Col>
    <Col lg={{span:12, offset:0}} xs={{offset:6, span: 22}} id="section1Img">
      <img src={section3} id="imgSection3"/>
    </Col>
  </Row>
</div>;
};

export default Arts;