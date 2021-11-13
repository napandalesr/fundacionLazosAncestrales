import { Col, Row } from "antd";
import React from "react";
import { useSelector } from "react-redux";

import logo from "../../images/logo.jpg";
import { _Routes } from "../../Utils/constanst";

import "./style.scss";

const Header:React.FC = () => {
  const {scroll} = useSelector((state:any) => state.scroll);

  const setScroll = (elementId:string) => {
    let mover=0;
    let position = document.getElementById(elementId)?.offsetTop;
    if(position!== undefined){
      mover=position;
    }
    document.documentElement.scrollTop=mover;
  };

  const getScroll = (elementId:string) => {
    let mover:number=0;
    let position = document.getElementById(elementId)?.offsetTop;
    if(position!== undefined){
      mover=position;
    }
    return mover;
  };

  return <Row id="header" style={{backgroundColor:scroll>50 ? 'black' : 'white'}}>
    <Col id="containerLogo" offset={1}><img id="logo" src={logo}/></Col>
    <Col 
    className={(scroll >= getScroll(_Routes.Home.slice(0, _Routes.Home.length)) && scroll <= getScroll(_Routes.About.slice(0, _Routes.About.length))) ? "navItem active": "navItem"} 
    offset={11}>Inicio</Col>
    <Col
    className={(scroll >= getScroll(_Routes.About.slice(0, _Routes.About.length)) && scroll <= getScroll(_Routes.WeDo.slice(0, _Routes.WeDo.length))) ? "navItem active": "navItem"}
    onClick={()=>{setScroll(_Routes.About.slice(0, _Routes.About.length)); }}>
      Sobre nosotros</Col>
    <Col className="navItem"
    onClick={()=>{setScroll(_Routes.WeDo.slice(0, _Routes.WeDo.length)); }}>
      ¿Qué hacemos?</Col>
    <Col className="navItem">Artes</Col>
    <Col className="navItem">Programas</Col>
    <Col className="navItem">Contacto</Col>
  </Row>;
};

export default Header;