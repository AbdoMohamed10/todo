import React, {useEffect, useState} from 'react'
import axios from "axios";
import {Box, Button, Typography} from "@mui/material";
import {useNavigate} from "react-router-dom";

const Weather = () => {
    const navigate = useNavigate()
    const [lat, setLat] = useState(null)
    const [lng, setLng] = useState(null)
    const [currentWeather, setCurrentWeather] = useState(null)

    const getLocation = () => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition((position) => {
                setLat(position.coords.latitude);
                setLng(position.coords.longitude);
            });
        }
    }

    const handleGoToWeatherPage = () => {
        if(lat && lng) {
            navigate(`/weather/${lat}/${lng}`)
        }
    }

    useEffect(() => {
        getLocation()
        if(lat && lng) {
            axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&units=metric&appid=82366c15fda759692fd5df311ea11634`).then(res => {
                setCurrentWeather(res.data)
            })
        }
    }, [lat, lng])

    return (
        <Box sx={{ textAlign: 'center' }}>
            {
                currentWeather ?
                    <Box>
                        <Button onClick={handleGoToWeatherPage}>
                            <Typography variant="h2">
                                    {currentWeather.main.temp} C
                            </Typography>
                        </Button>
                        <Typography variant="h4">
                            {currentWeather.name} - {currentWeather.sys.country}
                        </Typography>
                    </Box>
                :
                    <Typography component="h2">Please allow access to location</Typography>
            }
        </Box>
    )

}

export default Weather
