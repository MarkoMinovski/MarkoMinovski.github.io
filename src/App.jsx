import './App.css'
import Banner from "./ui/components/Banner.jsx";
import SideDrawer from "./ui/navigation/SideDrawer.jsx";
import PLanguageSkillsGrid from "./ui/components/PLanguageSkillsGrid.jsx";
import ToolsGrid from "./ui/components/ToolsGrid.jsx";
import WeatherWidget from "./ui/components/WeatherWidget.jsx";
import {Container, Typography} from "@mui/material";

function App() {


  return (
    <>
        <Banner></Banner>
        <PLanguageSkillsGrid></PLanguageSkillsGrid>
        <ToolsGrid></ToolsGrid>
        <SideDrawer></SideDrawer>
        <Container sx={{ maxWidth: '75vh', display: 'flex', justifyContent: 'center', flexDirection: 'column', alignItems: 'center' }}>
            <Typography variant='h2' sx={{ mb: '5rem' }}>Weather</Typography>
            <WeatherWidget></WeatherWidget>
        </Container>

    </>
  )
}

export default App
