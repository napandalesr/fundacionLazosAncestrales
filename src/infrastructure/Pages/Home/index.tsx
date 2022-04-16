import { notification } from "antd";
import React from "react";

import AboutMain from "../../Containers/AboutMain";
import Arts from "../../Containers/Arts";
import Contact from "../../Containers/Contact";
import Main from "../../Containers/Main";
import Programs from "../../Containers/Programs";
import WeDoMain from "../../Containers/WeDoMain";
import { post } from "../../Http/module/email";

import "./style.scss";

class Home extends React.Component {
  async sendEmail (data:any) {
      try {
        const response = await post(
          "kevinernestopandales@gmail.com",
          data.email,data.subject,
          `<h3>Hola Kevin, Alguien quiere contactar contigo desde https://fundalazosancestrales.co/</h3>
          <h4>Soy ${data.name}</h4><br/>${data.message}`);
          if([200, 201, 202, 203, 204].indexOf(response.status) > -1){
            notification.success({
              message: 'El mensaje fué enviado exitosamente',
              duration: 400
            });
          }
      } catch (error) {
        notification.error({
          message: 'Ha ocurrido un error intente más tarde',
          duration: 400
        });
      }
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