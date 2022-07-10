import styled from "styled-components"

const WeatherLogo = styled.img`
width: 140px;
height: 140px;
margin: 40px auto;  
`;

const ChooseCityLabel = styled.span`
color: black;
font-size:18px;
font-weight: bold;
margin: 10px auto;  
`;

const SearchBox = styled.form`
display:flex;
flex-direction: row;
border: black solid 1px;
border-radius: 2px;
color: black;
margin: 20px auto;
& input{
    padding: 10px;
    font-size: 14px;
    border: none;
    outline: none;
    font-weight: bold;
}

& button{
    padding: 10px;
    font-size: 14px;
    color: white;
    background-color: black;
    border: none;
    outline: none;
    font-weight: bold;
    cursor: pointer;
} 
`;
const CityComponent =()=>{
    return(
        <>
        <WeatherLogo src="/icons/perfect-day.svg"/>
        <ChooseCityLabel>Find weather of your city</ChooseCityLabel>
        <SearchBox>
            <input placeholder="Enter Your City"/>
            <button>Search</button>
        </SearchBox> 
        </>
    );
};
export default CityComponent;