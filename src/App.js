import React, {useState} from "react";
import styled from "styled-components";
import Axios from "axios";
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
&:hover{
  box-shadow: rgba(50, 50, 93, 0.7) 0px 50px 100px -20px, rgba(0, 0, 0, 0.7) 0px 30px 60px -30px, rgba(10, 37, 64, 0.8) 0px -2px 6px 0px inset;
  transition: 0.6s;
}
@media (max-width:600px){
  width:300px;
}
`;

const AppLabel = styled.span`
color: black;
font-size: 18px;
font-weight: bold;
`;



function App() {
  const [city, updateCity] = useState();
  const [weather, updateWeather] = useState();
  const fetchWeather = async (e) => {
    e.preventDefault();
    const response = await Axios.get(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=fe4feefa8543e06d4f3c66d92c61b69c`,
    );
    updateWeather(response.data);
  };
  return (
    <Container>
      <AppLabel>Weather App</AppLabel>
      {city && weather ? (
        <WeatherComponent weather={weather} city={city} />
      ) : (
        <CityComponent updateCity={updateCity} fetchWeather={fetchWeather} />
      )}
    </Container>
  );
}

export default App;
