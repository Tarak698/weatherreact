import React from "react";
import styled from "styled-components"
import CityComponent from "./modules/CityComponent";
import WeatherComponent from "./modules/WeatherInfoComponent";
const Container = styled.div`
display: flex;
flex-direction: column;
margin : auto;
align-items: center;
box-shadow: rgba(0, 0, 0, 0.3) 0px 19px 38px, rgba(0, 0, 0, 0.22) 0px 15px 12px;
padding: 20px 10px;
border-radius: 6px;
width: 380px;
background: white;
`;

const AppLabel = styled.span`
color: black;
font-size: 18px;
font-weight: bold;
`;



function App() {
  return( 
  <Container>
  <AppLabel>React Weather App</AppLabel>
  <WeatherComponent/>
  </Container>
  );
}

export default App;
