import React from 'react';
import './calendar.css';
import data from "../../data/times.json";
function index() {
    return (
        <div id='calendar'>
            <h1>calendar</h1>
            {data[0].map((start)=>{
                return <div>{start.Date} {start.Fajr}</div>
            })}
        </div>
    )
}

export default index