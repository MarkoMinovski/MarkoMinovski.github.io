import Banner from "../components/Banner.jsx";
import PLanguageSkillsGrid from "../components/PLanguageSkillsGrid.jsx";
import ToolsGrid from "../components/ToolsGrid.jsx";
import SideDrawer from "../navigation/SideDrawer.jsx";
import {Container, Typography} from "@mui/material";
import WeatherWidget from "../components/WeatherWidget.jsx";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import { Link } from 'react-router-dom';


const MainPage = () => {

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

            <Box sx={{ fontWeight: 'light', textAlign: 'center', marginBottom: '5rem' }}>
                <Button component={Link} to="/projects" variant="contained">Check out my projects</Button>
            </Box>

            <Typography variant="h5"
                        sx={{ fontWeight: 'light', marginTop: '7.5rem', textAlign: 'center', marginBottom: '5rem' }}>
                <Link href={"https://github.com/MarkoMinovski/MarkoMinovski.github.io"}
                      underline={"hover"} target={"_blank"}>Source code</Link>
            </Typography>


        </>
    )
}

export default MainPage;
