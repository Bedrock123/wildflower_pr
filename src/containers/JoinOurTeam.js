import React from "react";
import { Row, Col } from "antd";
import { Form, Icon, Input, Button, Checkbox } from "antd";
const { TextArea } = Input;
const FormItem = Form.Item;

class JoinOurTeam extends React.Component {
  handleSubmit = e => {
    e.preventDefault();
    console.log(e);
  };
  render() {
    return (
      <div className="home-wrapper">
        <h1 className="main-text-block">We would love to hear from you!?</h1>
        <br />
        <Form onSubmit={this.handleSubmit} className="login-form">
          <Row>
            <Col md={{ span: 6, offset: 5 }} sm={{ span: 20, offset: 2 }}>
              <FormItem>
                <Input placeholder="first name" />
              </FormItem>
              <FormItem>
                <Input placeholder="last name" />
              </FormItem>
              <FormItem>
                <Input placeholder="email" />
              </FormItem>
              <FormItem>
                <Input placeholder="how'd you hear about us?" />
              </FormItem>
            </Col>
            <Col md={{ span: 6, offset: 1 }} sm={{ span: 20, offset: 2 }}>
              <FormItem>
                <Input placeholder="subject" />
              </FormItem>
              <FormItem>
                <TextArea rows={4} placeholder="message" />
              </FormItem>
              <FormItem>
                <Button type="primary">submit</Button>
              </FormItem>
            </Col>
          </Row>
        </Form>
      </div>
    );
  }
}

export default JoinOurTeam;
