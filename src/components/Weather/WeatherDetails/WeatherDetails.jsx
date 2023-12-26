import React, {useEffect, useState} from 'react'
import axios from "axios";
import {Box, Button, Typography} from "@mui/material";
import {useParams} from "react-router-dom";

const WeatherDetails = () => {
    const {lat, lng} = useParams()
    const [weatherDetails, setWeatherDetails] = useState(null)
    const [weatherDaysDetails, setWeatherDaysDetails] = useState(null)

    useEffect(() => {
        if(lat && lng) {
            axios.get(`https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lng}&units=metric&appid=82366c15fda759692fd5df311ea11634`).then(res => {
                let data = res.data.list
                let organizedData = {}
                data.forEach(item => {
                    let [ day, time ] = item.dt_txt.split(' ')
                    item.day = day
                    item.hour = time
                    if(day in organizedData) {
                        organizedData[day].push(item)
                    } else {
                        organizedData[day] = [item]
                    }
                })
                setWeatherDetails(res.data)
                setWeatherDaysDetails(organizedData)
            })
        }
    }, [lat, lng])

    return (
        <Box sx={{ textAlign: 'center', p: 3 }}>
            {
                weatherDetails ?
                    <Box>
                        <Typography variant="h4" color="common.error">
                            {weatherDetails.city.name} - {weatherDetails.city.country}
                        </Typography>
                        <Box sx={{ textAlign: 'left' }}>
                            {
                                Object.keys(weatherDaysDetails).map((item, index) => (
                                    <Box key={index}>
                                        <Typography variant="h5">{item}</Typography>
                                        <Box sx={{ p: 3 }}>
                                            {
                                                weatherDaysDetails[item].map((hour, hoursIndex) => (
                                                    <Typography key={hoursIndex} variant="h5">{hour.hour}: {hour.main.temp} C</Typography>
                                                ))
                                            }
                                        </Box>
                                    </Box>
                                ))
                            }
                        </Box>
                    </Box>
                    :
                    <Typography component="h2">Please allow access to location</Typography>
            }
        </Box>
    )
}

export default WeatherDetails
