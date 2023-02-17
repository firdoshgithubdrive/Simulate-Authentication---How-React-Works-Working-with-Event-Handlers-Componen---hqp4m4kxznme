import React from 'react';
import axios from "axios";
const Data = () => {
const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': 'b88fdc70bamsh054f1d205ea6b83p16f9f0jsn4fdc5d0d49a3',
            'X-RapidAPI-Host': 'timetable-lookup.p.rapidapi.com'
        }
    };

    fetch('https://timetable-lookup.p.rapidapi.com/TimeTable/BOM/DEL/20221212/', options)
        .then(response => response.json())
        .then(response => console.log(response))
        .catch(err => console.error(err));

    return <p>ajau</p>
}
export default Data;
