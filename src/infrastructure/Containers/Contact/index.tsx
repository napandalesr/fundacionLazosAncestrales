import { Col, Form, Input, Row } from "antd";
import React from "react";

import "./style.scss";

const Contact:React.FC = () => {
  const onFinish = (values:any) => {
    console.log(values);
  };

  return <div id="contact">
    <Form
    labelCol={{span:6}}
    onFinish={onFinish}>
      <Row>
        <Col span={9} offset={1}>
          <Form.Item
          name="name"
          label="Nombre">
            <Input/>
          </Form.Item>
        </Col>
        <Col span={9} offset={1}>
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
        <Col span={9} offset={1}>
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
        <Col span={9} offset={1}>
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
    </Form>
  </div>;
};

export default Contact;