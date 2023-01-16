import React from "react";
import "./extra.css"

export default function WeatherInfo(props){
    const {name, temp, clouds, sys, wind} = props
    return(
        <>
        <div className="city_detail">
        <h3 className="city_name">{name}, {sys ? <span className="country_name">{sys.country}</span> : null }</h3>
        </div>
        <div className="weather__info">
            <div className="weather_city_detail">
            <h3 className="temp">{temp ? temp.temp : null}°</h3>
            <div className="weather_feels">
               {temp ? <p className="feels">max {Math.round(temp.temp_max)}°</p> : null}
               {temp ? <p className="feels">min {temp.temp_min}°</p> : null}
               {temp ? <p className="feels">feels like {temp.feels_like}°</p> : null}
            </div>
            </div>
            {clouds ? <p className="clouds_details">{clouds[0].main} </p>  : null }
            {/* {clouds ? <img className="icon" alt = "weather" src={`icons/${clouds[0].icon}.png`} /> : null } */}
        </div>
        <div className="weather_info_all">
        {clouds ? <p className="info">Weather  <span className="info_detail">{clouds[0].description} </span></p> : null}
        {temp ? <p className="info">Humidity  <span className="info_detail">{Math.round(temp.humidity)}% </span></p> : null}
        {wind ? <p className="info">Wind Speed  <span className="info_detail">{wind.speed}m/s </span></p> : null}
        {temp ? <p className="info">Visibility  <span className="info_detail">{Math.round(temp.visibility)}km </span></p> : null}
        {temp ? <p className="info">Pressure  <span className="info_detail">{Math.round(temp.pressure)}hpa </span></p> : null}
        </div>
        </>
    )
}