import "./App.css";
import React from "react";
import Form from "./components/Form";
import CharCard from "./components/CharCard";
import styled from 'styled-components';

function App() {
  return (
    <div>
      <h1>FFXIV Character Look Up!</h1>
      <p>
        Look up your Characters information by entering your Characters id below
      </p>
      <Form />
      
      <CharCard/>
    </div>
  );
}



export default App;
