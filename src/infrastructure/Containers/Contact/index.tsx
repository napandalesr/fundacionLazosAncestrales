import { Col, Form, Input, Row, Button, Spin } from "antd";
import React from "react";
import { _Routes } from "../../Utils/constanst";

import "./style.scss";

type ContactProps = {
  sendEmail: any
}

const Contact:React.FC<ContactProps> = ({sendEmail}) => {
  const [loading, setLoading] = React.useState(false);

  const onFinish = async(data:any) => {
    setLoading(true);
    await sendEmail(data);
    setLoading(false);
  };

  return <div id={_Routes.Contact.slice(1, _Routes.Contact.length)}>
    <Row>
      <Col offset={4}>
        <h2 style={{color:"white", marginBottom:"40px"}}>Contacto</h2>
      </Col>
    </Row>
    <Spin spinning={loading}>
      <Form
      labelCol={{span:6}}
      onFinish={onFinish}>
        <Row>
          <Col lg={{span:9,offset:1}} xs={{span:22,offset:1}}>
            <Form.Item
            name="name"
            label="Nombre">
              <Input/>
            </Form.Item>
          </Col>
          <Col lg={{span:9,offset:1}} xs={{span:22,offset:1}}>
            <Form.Item
            name="email"
            label="Email"
            rules={[
              {
                required:true,
                type: "email"
              }
            ]}>
              <Input/>
            </Form.Item>
          </Col>
        </Row>
        <Row>
          <Col lg={{span:9,offset:1}} xs={{span:22,offset:1}}>
            <Form.Item
            name="subject"
            label="Asunto"
            rules={[
              {
                required:true,
              }
            ]}>
              <Input/>
            </Form.Item>
          </Col>
          <Col lg={{span:9,offset:1}} xs={{span:22,offset:1}}>
            <Form.Item
            name="message"
            label="Mensaje"
            rules={[
              {
                required:true,
              }
            ]}>
              <Input.TextArea/>
            </Form.Item>
          </Col>
        </Row>
        <Row>
          <Col offset={10}>
            <Button type="primary" htmlType="submit">Enviar</Button>
          </Col>
        </Row>
      </Form>
    </Spin>
  </div>;
};

export default Contact;