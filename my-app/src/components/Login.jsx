import React,{ Component } from "react";
import { Col, Row, Button, Form, FormGroup, Label, Input } from 'reactstrap';

class Login extends Component{
    render(){
        return (
            <div class="container">
            {/* <Form className="form">
            <Row>
              <Col md={5}>
                <FormGroup>
                  <Label for="exampleEmail">Email</Label>
                  <Input type="email" name="email" id="exampleEmail" placeholder="with a placeholder" />
                </FormGroup>
              </Col>
              <Col md={5}>
                <FormGroup>
                  <Label for="examplePassword">Password</Label>
                  <Input type="password" name="password" id="examplePassword" placeholder="password placeholder" />
                </FormGroup>
              </Col>
            </Row>
            <FormGroup>
              <Label for="exampleAddress">Address</Label>
              <Input type="text" name="address" id="exampleAddress" placeholder="1234 Main St"/>
            </FormGroup>
            <Button>Sign in</Button>
          </Form> */}
          <div className="container-main">
            <div className="inputs">
                <input className="input-field" type="text" placeholder="Email" onChange={this.handleEmailChange}/>
            </div>
            <div className="inputs">
                <input className="input-field" type="password" placeholder="Password" onChange={this.handlePasswordChange}/>
            </div>

          </div>
          </div>
        );
    }
}
export default Login;