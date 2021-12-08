import React from "react";
import { EmailService } from "../../../domain/services/email.service";

import AboutMain from "../../Containers/AboutMain";
import Arts from "../../Containers/Arts";
import Contact from "../../Containers/Contact";
import Main from "../../Containers/Main";
import Programs from "../../Containers/Programs";
import WeDoMain from "../../Containers/WeDoMain";

import "./style.scss";

class Home extends React.Component {

  async sendEmail () {
    window.location.assign("https://wa.me/3104320575");
    
    await new EmailService().create();
  }

  render() {
    return <div id="home">
      <Main/>
      <AboutMain/>
      <WeDoMain/>
      <Arts/>
      <Programs/>
      <Contact sendEmail={this.sendEmail}/>
    </div>;
  }
}

export default Home;