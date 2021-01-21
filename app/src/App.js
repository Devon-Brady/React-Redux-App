import "./App.css";
import React from "react";
import Form from "./components/Form";
import CharCard from "./components/CharCard";
import styled from 'styled-components';

function App() {
  return (
    <div>
    <StyledDiv>
      <h1>FFXIV Character Look Up!</h1>
      <p>
        Look up your Characters information by entering your Characters id below
      </p>
      <Form />
  </StyledDiv>
      {/* <CharCard/> */}
    </div>
  );
}

const StyledDiv = styled.div`
    margin: 3% auto;
    width: 50%;
    -webkit-box-shadow: 0 10px 6px -6px #777;
    -moz-box-shadow: 0 10px 6px -6px #777;
    box-shadow: 0 10px 6px -6px #777;
    background-color: #dcdcdc;
    padding: 2% ;
  `;

export default App;
