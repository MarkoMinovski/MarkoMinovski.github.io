import {TiWeatherSunny} from "react-icons/ti";
import {FiMoon} from "react-icons/fi";
import {IoIosPartlySunny, IoMdCloudy} from "react-icons/io";
import {FaCloudMoon} from "react-icons/fa6";
import {WiDayFog, WiNightFog} from "react-icons/wi";
import {IoRainy, IoThunderstorm} from "react-icons/io5";
import {BsCloudSnowFill} from "react-icons/bs";


export const weatherCodesAndAssociatedSVGDict = {
    0: { day: TiWeatherSunny, night: FiMoon },
    1: { day: IoIosPartlySunny, night: FaCloudMoon },
    2: { day: IoIosPartlySunny, night: FaCloudMoon },
    3: { day: IoMdCloudy, night: IoMdCloudy },
    45: { day: WiDayFog, night: WiNightFog  },
    48: { day: WiDayFog, night: WiNightFog },
    51: { day: IoRainy, night: IoRainy },
    53: { day: IoRainy, night: IoRainy },
    55: { day: IoRainy, night: IoRainy },
    56: { day: IoRainy, night: IoRainy },
    57: { day: IoRainy, night: IoRainy },
    61: { day: IoRainy, night: IoRainy },
    63: { day: IoRainy, night: IoRainy },
    65: { day: IoRainy, night: IoRainy },
    66: { day: IoRainy, night: IoRainy },
    67: { day: IoRainy, night: IoRainy },
    71: { day: BsCloudSnowFill, night: BsCloudSnowFill },
    72: { day: BsCloudSnowFill, night: BsCloudSnowFill },
    73: { day: BsCloudSnowFill, night: BsCloudSnowFill },
    75: { day: BsCloudSnowFill, night: BsCloudSnowFill },
    77: { day: BsCloudSnowFill, night: BsCloudSnowFill },
    80: { day: IoRainy, night: IoRainy },
    81: { day: IoRainy, night: IoRainy },
    82: { day: IoRainy, night: IoRainy },
    85: { day: BsCloudSnowFill, night: BsCloudSnowFill },
    86: { day: BsCloudSnowFill, night: BsCloudSnowFill },
    95: { day: IoThunderstorm, night: IoThunderstorm },
}

export const weatherCodeAndAssociatedDescriptor = {
    0: "Clear",
    1: 'Mainly Clear',
    2: 'Partly Cloudy',
    3: 'Overcast',
    45: 'Fog',
    48: 'Depositing Rime Fog',
    51: 'Light Drizzle',
    53: 'Moderate Drizzle',
    55: 'Dense Drizzle',
    56: 'Light Freezing Drizzle',
    57: 'Dense Freezing Drizzle',
    61: 'Light Rain',
    63: 'Moderate Rain',
    65: 'Heavy Rain',
    66: 'Light Freezing Rain',
    67: 'Heavy Freezing Rain',
    71: 'Light Snow Fall',
    72: 'Moderate Snow Fall',
    75: 'Heavy Snow Fall',
    77: 'Snow Grains',
    80: 'Light Rain Showers',
    81: 'Moderate Rain Showers',
    82: 'Violent Rain Showers',
    85: 'Slight Snow Showers',
    86: 'Heavy Snow Showers',
    95: 'Thunderstorm'
}

