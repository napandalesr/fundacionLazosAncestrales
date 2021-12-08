import React, { useState } from "react";
import { Col, Drawer, Row } from "antd";
import { useSelector } from "react-redux";
import { Button } from "antd";
import {
  faBars,
} from '@fortawesome/free-solid-svg-icons';

import logo from "../../images/logo.jpg";
import { _Routes } from "../../Utils/constanst";

import "./style.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Header:React.FC = () => {
  const {scroll} = useSelector((state:any) => state.scroll);
  const {width} = useSelector((state:any) => state.width);

  const setScroll = (elementId:string) => {
    let mover=0;
    let position = document.getElementById(elementId)?.offsetTop;
    if(position!== undefined){
      mover=position;
    }
    document.documentElement.scrollTop=mover-200;
  };

  const getScroll = (elementId:string) => {
    let mover:number=0;
    let position = document.getElementById(elementId)?.offsetTop;
    if(position!== undefined){
      mover=position;
    }
    return mover-350;
  };

  const [visible, setVisible] = useState(false);

  const showDrawer = () => {
    setVisible(true);
  };

  const onClose = () => {
    setVisible(false);
  };

  return <Row id="header" style={{backgroundColor:scroll>50 ? 'black' : 'white'}}>
    <Col id="containerLogo" offset={1}><img id="logo" src={logo}/></Col>
    {
      width<=900 ?
      <Button type="primary" onClick={showDrawer} style={{position:"absolute", right: "130px", top: "10px", height:"80px"}}>
        <FontAwesomeIcon icon={faBars} style={{fontSize:"50px"}} />
      </Button>
      :
      <>
      <Col 
    className={(scroll >= getScroll(_Routes.Home.slice(1, _Routes.Home.length)) && scroll <= getScroll(_Routes.About.slice(1, _Routes.About.length))) ? "navItem active": "navItem"} 
    offset={width<1125 ? 8 :11} onClick={()=>{setScroll(_Routes.Home.slice(1, _Routes.About.length)); }}>Inicio</Col>
    <Col
    className={(scroll >= getScroll(_Routes.About.slice(1, _Routes.About.length)) && scroll <= getScroll(_Routes.WeDo.slice(1, _Routes.WeDo.length))) ? "navItem active": "navItem"}
    onClick={()=>{setScroll(_Routes.About.slice(1, _Routes.About.length)); }}>
      Sobre nosotros</Col>
    <Col 
    className={(scroll >= getScroll(_Routes.WeDo.slice(1, _Routes.WeDo.length)) && scroll <= getScroll(_Routes.Arts.slice(1, _Routes.Arts.length))) ? "navItem active": "navItem"}
    onClick={()=>{setScroll(_Routes.WeDo.slice(1, _Routes.WeDo.length)); }}>
      ¿Qué hacemos?</Col>
    <Col 
    className={(scroll >= getScroll(_Routes.Arts.slice(1, _Routes.Arts.length)) && scroll <= getScroll(_Routes.Programs.slice(1, _Routes.Programs.length))) ? "navItem active": "navItem"}
    onClick={()=>{setScroll(_Routes.Arts.slice(1, _Routes.Arts.length)); }}>
      Artes</Col>
    <Col 
    className={(scroll >= getScroll(_Routes.Programs.slice(1, _Routes.Programs.length)) && scroll <= getScroll(_Routes.Contact.slice(1, _Routes.Contact.length))) ? "navItem active": "navItem"}
    onClick={()=>{setScroll(_Routes.Programs.slice(1, _Routes.Programs.length)); }}>
      Programas</Col>
    <Col 
    className={(scroll >= getScroll(_Routes.Contact.slice(1, _Routes.Contact.length))) ? "navItem active": "navItem"}
    onClick={()=>{setScroll(_Routes.Contact.slice(1, _Routes.Contact.length)); }}>
      Contacto</Col>
      </>
    }
    <Drawer placement="right" onClose={onClose} visible={visible}>
    <Col 
    className={(scroll >= getScroll(_Routes.Home.slice(1, _Routes.Home.length)) && scroll <= getScroll(_Routes.About.slice(1, _Routes.About.length))) ? "navItem active": "navItem"} 
    offset={1} onClick={()=>{setScroll(_Routes.Home.slice(1, _Routes.About.length)); }}>Inicio</Col>
    <Col
    className={(scroll >= getScroll(_Routes.About.slice(1, _Routes.About.length)) && scroll <= getScroll(_Routes.WeDo.slice(1, _Routes.WeDo.length))) ? "navItem active": "navItem"}
    onClick={()=>{setScroll(_Routes.About.slice(1, _Routes.About.length)); }}>
      Sobre nosotros</Col>
      <Col 
    className={(scroll >= getScroll(_Routes.WeDo.slice(1, _Routes.WeDo.length)) && scroll <= getScroll(_Routes.Arts.slice(1, _Routes.Arts.length))) ? "navItem active": "navItem"}
    onClick={()=>{setScroll(_Routes.WeDo.slice(1, _Routes.WeDo.length)); }}>
      ¿Qué hacemos?</Col>
      <Col 
    className={(scroll >= getScroll(_Routes.Arts.slice(1, _Routes.Arts.length)) && scroll <= getScroll(_Routes.Programs.slice(1, _Routes.Programs.length))) ? "navItem active": "navItem"}
    onClick={()=>{setScroll(_Routes.Arts.slice(1, _Routes.Arts.length)); }}>
      Artes</Col>
      <Col 
    className={(scroll >= getScroll(_Routes.Programs.slice(1, _Routes.Programs.length)) && scroll <= getScroll(_Routes.Contact.slice(1, _Routes.Contact.length))) ? "navItem active": "navItem"}
    onClick={()=>{setScroll(_Routes.Programs.slice(1, _Routes.Programs.length)); }}>
      Programas</Col>
      <Col 
    className={(scroll >= getScroll(_Routes.Contact.slice(1, _Routes.Contact.length))) ? "navItem active": "navItem"}
    onClick={()=>{setScroll(_Routes.Contact.slice(1, _Routes.Contact.length)); }}>
      Contacto</Col>
    </Drawer>
  </Row>;
};

export default Header;