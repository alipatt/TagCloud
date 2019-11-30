import React, { Component } from "react";
import FormInput from "./FormInput";
import Navi from "./Navi";
import TagCloud from "./TagCloud";
import { Container, Row, Col } from "reactstrap";
export default class App extends Component {
  state = { lowerCase: false, data: [] ,wordsProperties : []  };


  convertToArray = (words) => {
    words = words + " ";
    let lengthOfWords = words.length;
    let spaces = [];
    let arr = [];
    for (let i = 0; i < lengthOfWords; i++) {
      if (words[i] === " ") {
        spaces.push(i);
      }
    }

    for(let i = 0 ; i<spaces.length ; i++){
      if(i===0){
        arr.push(words.substring(0,spaces[0]))
      }
      else{
        if(words.substring(spaces[i-1]+1,spaces[i]) !== "")
        arr.push(words.substring(spaces[i-1]+1,spaces[i]))
      }

    }
   this.setState({data:arr})
   this.addWord(arr)
  };

  addWord =(props) => {
    let property = this.state.wordsProperties;  
let counter = 0;
let yaz= "";
let atla = 0;
props.sort();
     for(let i = 0 ; i<props.length ; i++){
       for(let j = 0; j<props.length; j++){
         
         if(i===j){
           yaz=props[i];
           counter +=1
         }
        else if(props[i] === props[j] & i<j){
           counter +=1
           atla +=1
         }
       }  
       
          property.push({value : yaz , count : counter})
       i+=atla
       atla=0;
       counter = 0;
       yaz = "";
       
     }
    
this.setState({wordsProperties : property})
  }
  render() {
    
    return (
      <div>
        <Navi />
        <Container>
          <Row>
            <Col md={6} sm={12}>
              <FormInput
                text={this.state.text}
                convertToArray={this.convertToArray}
              />
            </Col>
            <Col md={6} sm={12}>
              <TagCloud wordsProperties={this.state.wordsProperties} />
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}
