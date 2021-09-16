import React from 'react';
import { Steps,Step } from 'react-step-builder';
import Step1 from "./components/Step1";
import Step2 from "./components/Step2";
import FinalStep from './components/FinalStep';
import { Button,Col,Row } from "antd";
import './App.css';

const Navigation=(props) => {
  return(
      <Row align="center">
        <Col>
          <Button type="primary" onClick={props.prev} style={{marginRight:10}}>Previous</Button>
          </Col>
          <Col>
          <Button type="primary" onClick={props.next} >Next</Button>
          </Col>
      </Row>
  );
  
};

function App(){
const config={
  navigation:{
    component:Navigation,
    location:"after"
  }
};  


  return(
    <div className="App">
      <Steps config={config}>
        <Step component={Step1} />
        <Step component={Step2} />
        <Step component={FinalStep} />
      </Steps>
    </div>
  );
}

export default App;