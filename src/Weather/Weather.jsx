import React, { useEffect, useState } from "react";
import WeatherInfo from "./Information";
import Search from "./Search";
import "./weather.css";

export default function Weather() {
  const [cityName, setCityName] = useState();
  const [data, setData] = useState([]);
 

  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': 'febbe75545msh80c8919c7c6ab42p14c1a0jsn9d79500ca1bd',
      'X-RapidAPI-Host': 'forecast9.p.rapidapi.com'
    }
  };
  
  

  useEffect(()=>{
    fetch('https://forecast9.p.rapidapi.com/status/', options)
    .then(response => response.json())
    .then(response => console.log(response))
    .catch(err => console.error(err));
    
  },[])
  
 

  const api = "5f91578014d0ab5af23452c3f1a37b41";
  const city = "London";

  const Base_URL = "https://api.openweathermap.org/data/2.5/weather";

  function HandleChange(value) {
    
    setCityName(value);
    }

  useEffect(() => {
    fetch(`${Base_URL}?q=${city}&appid=${api}&units=metric`)
      .then((res) => res.json())
      .then((data) => {setData(data)});
  }, []);
  useEffect(() => {
    if(cityName  != null){
        fetch(`${Base_URL}?q=${cityName}&appid=${api}&units=metric`)
        .then((res) => res.json())
        .then(data => {setData(data)} )
    }
  }, [cityName]);
  const name = data.name;
  const Temp = data.main;
  const sys = data.sys;
  const wind = data.wind;

  return (
    <section className="weather">
      <div className="overlay"></div>
      <Search handleChange={HandleChange} />
      <WeatherInfo  name = {name} temp = {Temp}  clouds = {data.weather} sys = {sys} wind = {wind}/>
    </section>
  );
  ;
}
