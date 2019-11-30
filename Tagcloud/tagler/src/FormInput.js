import React, { Component } from "react";
import {
  Col,
  Button,
  Label,
  Input,
  Container,
  Row
} from "reactstrap";
export default class FormInput extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: ""
    };

    this.onChangeHandler = this.onChangeHandler.bind(this);
  }

  onChangeHandler = event => {
    this.setState({ value: event.target.value });
  };

  render() {
    const mystyle = {
      height : "100px"
    };
    return (
      <div>
        <Container>
          <Label>Text Area</Label>
          <Row>
            <Col md={10} sd={12}>
            <Input onChange={this.onChangeHandler} value={this.state.value} placeholder="Write Here" type="textarea" style={mystyle}></Input>
            </Col>
            <Col md={2} sd={12}>
        <Button
          onClick={() => this.props.convertToArray(this.state.value)}
          disabled={this.state.value===""?true:false}
          color="info"
        >
          ok
        </Button>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}
