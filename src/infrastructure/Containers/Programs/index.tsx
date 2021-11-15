import { Col, Divider, Row } from "antd";
import React from "react";

import section4 from "../../images/section4.jpg";
import { _Routes } from "../../Utils/constanst";

import "./style.scss";

const Programs:React.FC = () => {
  return <div id={_Routes.Programs.slice(1, _Routes.Programs.length)}>
    <Row>
      <Col lg={{span:12, offset:1}} xs={{span:16, offset:1}} id="section2Img">
        <img src={section4} id="imgSection3"/>
      </Col>
      <Col lg={{span:10, offset:1}} xs={{span:22, offset:1}}>
        <section id="section2">
          <Divider orientation="left"><h2>Programas</h2></Divider>
          <p>Modelos flexibles</p>
          <p>Son programas del gobierno que busca mitigar el flagelo del analfabetismo en Colombia</p>
          <ul>
            <li>
            Brújula: Es un programa de perfección  educativa que promueve la construcción de competencias en lenguaje, matemáticas, ciencia y cultura cívica y está dirigido a niños y adolescentes en situaciones de extra edad que no asisten a la escuela y que no saben cómo utilizar el código escrito.</li>
            <li>Aceleración del aprendizaje:
            Es un modelo educativo flexible que atiende población en extraedad entre los 10 y los 15 años de edad que no ha podido culminar su primaria, permitiendo a los estudiantes avanzar varios grados en un año y superar su desfase edad-grado; se implementa a través de proyectos interdisciplinarios ..Caminar por la secundaria(6-11)
            </li>
            <li>Caminar en secundaria: Es una opción educativa que facilita el regreso al sistema de aquellos estudiantes que lo han abandonado o nivelar a los que estando dentro del sistema están en riesgo de abandonarlo por estar en extraedad. ... Aunque los estudiantes avanzan a su propio ritmo, los materiales permiten avanzar dos grado en un año lectivo. Nivelación</li>
            <li>Nivelaciones: Consisten en fortalecer los procesos académicos donde los niños adolescentes y jóvenes tengan dificultades en las diferentes áreas del conocimiento</li>
          </ul>
        </section>
      </Col>
    </Row>
  </div>;
};

export default Programs;