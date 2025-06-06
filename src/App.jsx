import './App.css'
import Banner from "./ui/components/Banner.jsx";
import SideDrawer from "./ui/navigation/SideDrawer.jsx";
import PLanguageSkillsGrid from "./ui/components/PLanguageSkillsGrid.jsx";
import ToolsGrid from "./ui/components/ToolsGrid.jsx";
import WeatherWidget from "./ui/components/WeatherWidget.jsx";
import {Container, Link, Typography} from "@mui/material";

function App() {


  return (
    <>
        <Banner></Banner>
        <PLanguageSkillsGrid></PLanguageSkillsGrid>
        <ToolsGrid></ToolsGrid>
        <SideDrawer></SideDrawer>
        <Container sx={{ maxWidth: '75vh', display: 'flex', justifyContent: 'center',
            flexDirection: 'column', alignItems: 'center' }}>
            <Typography variant='h2' sx={{ mb: '5rem' }}>Weather</Typography>
            <WeatherWidget></WeatherWidget>
        </Container>
        <Typography variant="subtitle2"
                    sx={{ fontWeight: 'light', fontStyle: 'oblique',
                        marginTop: '1.5rem', textAlign: 'center', marginBottom: '5rem' }}>
            * May be inaccurate. This is using OpenMeteo API Free tier. Updates hourly
        </Typography>
        <Typography variant="h5"
                    sx={{ fontWeight: 'light', marginTop: '7.5rem', textAlign: 'center', marginBottom: '5rem' }}>
            <Link href={"https://github.com/MarkoMinovski/MarkoMinovski.github.io"}
                  underline={"hover"} target={"_blank"}>Source code</Link>
        </Typography>
    </>
  )
}

export default App
