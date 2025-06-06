import { useEffect, useState } from "react";
import {weatherCodesAndAssociatedSVGDict, weatherCodeAndAssociatedDescriptor} from "../../mui-helpers/open-meteo-weather-codes.js";
import {Card, CardContent, Typography, Box, LinearProgress, Divider} from "@mui/material";

function GetWeatherSVGFromCode(weather_code, isDay) {
    if (weather_code == null) return null;

    const weatherStatusPair = weatherCodesAndAssociatedSVGDict[weather_code.toString()];
    if (weatherStatusPair == null) return null;

    const IconComponent = isDay ? weatherStatusPair.day : weatherStatusPair.night;

    return <IconComponent size={84}/>;
}

const WeatherWidget = () => {
    const [weatherData, setWeatherData] = useState({});
    const [isLoading, setIsLoading] = useState(false);


    useEffect(() => {
        const fetchWeather = async () => {
            setIsLoading(true);
            const url = "https://api.open-meteo.com/v1/forecast?latitude=41.9981&longitude=21.4254&daily=weather_code&hourly=temperature_2m,weather_code&timezone=Europe%2FBerlin&forecast_days=1";
            const response = await fetch(url);
            const json = await response.json();
            const hour = new Date().getHours();

            console.log(json)


            const weatherDataForWidget = {
                'hour': hour,
                'temperature_2m': json.hourly.temperature_2m[hour],
                'weather_code': json.hourly.weather_code[hour]
            }

            console.log(weatherDataForWidget['hour'].toString())

            weatherDataForWidget['isDay'] = !(hour > 17 || hour < 5);


            console.log(weatherDataForWidget);
            setWeatherData(weatherDataForWidget);
            setIsLoading(false);
        };

        fetchWeather();
    }, []);

    return (
        <>
            {
                isLoading ? <LinearProgress></LinearProgress>
                    :
                    <Card sx={{width: '50%', borderRadius: 4, boxShadow: 3}}>
                        <CardContent sx={{ display: 'flex', flexDirection: { xs: 'column', sm: 'column', md: 'row', lg: 'row', xl: 'row' },
                            justifyContent: 'evenly', alignItems: 'center' }}>

                            <Box sx={{ display: 'flex', flexGrow: 1, justifyContent: 'evenly', alignItems: 'center',
                                flexDirection: 'column' }}>
                                <Typography variant="h3" gutterBottom>Skopje</Typography>
                                <Typography variant="h6" color="text.secondary">{weatherData.hour}:00</Typography>
                            </Box>

                            <Divider orientation="vertical"></Divider>

                            <Box sx={{ display: 'flex', flexGrow: 1, justifyContent: 'evenly', alignItems: 'center',
                                flexDirection: 'column' }}>
                                <Box sx={{ display: 'flex', justifyContent: 'end' }}>
                                    {GetWeatherSVGFromCode(weatherData.weather_code, weatherData.isDay)}
                                </Box>
                                <Typography variant="h5" align="center">{
                                    weatherCodeAndAssociatedDescriptor[weatherData['weather_code']]}
                                </Typography>
                                <Typography variant="h5" align="center" mt={1}>{weatherData.temperature_2m}°C</Typography>
                            </Box>
                        </CardContent>
                    </Card>
            }
        </>
    );
};

export default WeatherWidget;
