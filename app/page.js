//app/page.js 
'use client'
import React from 'react';
import { LocationForm } from "./components/CityForm";
import WeatherSummary from './components/WeatherSummary'; 

export default function Home() {
  return (
    <div>
      <LocationForm/>
      {WeatherSummary()}
    </div>
  )
}