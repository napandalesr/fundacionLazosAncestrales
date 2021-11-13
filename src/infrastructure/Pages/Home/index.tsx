import React from "react";

import AboutMain from "../../Containers/AboutMain";
import Arts from "../../Containers/Arts";
import Contact from "../../Containers/Contact";
import Main from "../../Containers/Main";
import Programs from "../../Containers/Programs";
import WeDoMain from "../../Containers/WeDoMain";

import "./style.scss";

class Home extends React.Component {
  render() {
    return <div id="home">
      <Main/>
      <AboutMain/>
      <WeDoMain/>
      <Arts/>
      <Programs/>
      <Contact/>
    </div>;
  }
}

export default Home;