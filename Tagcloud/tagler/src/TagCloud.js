import React, { Component } from "react";
import { TagCloud } from "react-tagcloud";
import {Container , Col , Row , Label} from "reactstrap"
export default class Calculate extends Component {
  
  render() {
    const stl = {
      backgroundColor: "#f1f1f1"
    }
    return (
      <div>
        <Container>
        <Label>Tag Cloud</Label>
          <Row style={stl}>
          <Col md ={12} sd={12}>
          <TagCloud minSize={12} maxSize={35} tags={this.props.wordsProperties} />
          </Col>
          </Row>
        </Container>
       
      </div>
      
    );
  }
}
