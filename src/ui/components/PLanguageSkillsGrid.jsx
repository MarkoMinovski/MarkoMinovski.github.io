import {Box, Card, CardActions, CardContent, Container, Grid, Typography} from "@mui/material";
import Button from "@mui/material/Button";
import {FaJava, FaReact, FaPython, FaVuejs} from "react-icons/fa6";


const PLanguageSkillsGrid = () => {
    return (
        <>
            <Typography variant="h3" sx={{ fontWeight: 'light', textAlign: 'center', marginBottom: '5rem' }}>
                Highlighted Programming Skills:</Typography>
            <Box maxWidth="xs" className={"hello"} sx={{ display: 'flex', flexGrow: 1, alignItems: "center",
                justifyContent: "center" }}>
                <Grid container spacing={2} sx={{ width: '75%', }}>
                    <Grid size={4}>
                        <Card sx={{ minWidth: 275, borderLeft: '5px solid #306998', boxShadow: 3, borderRadius: 2 }}>
                            <CardContent>
                                <Box display="flex" alignItems="center" mb={1}>
                                    <FaPython size={64} />
                                    <Typography variant="h4">Python</Typography>
                                </Box>

                                <Typography sx={{ color: 'text.secondary', mb: 1, fontStyle: 'oblique' }}>
                                    Intermediate
                                </Typography>

                                <Typography variant="body2" mb={1}>
                                    Comfortable with the core language,
                                    data structures, and Pythonic design.
                                    Experienced in building small-to-mid scale web apps and scripts.
                                    Familiar with the pip ecosystem.
                                </Typography>

                                <Typography variant="body2" color="text.secondary">
                                    🛠 Libraries / Frameworks:
                                    NumPy, Flask, Django, SQLAlchemy, Pygame, MongoDB Driver, scikit-learn
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>

                    <Grid size={4}>
                        <Card sx={{ minWidth: 275, borderLeft: '5px solid #f89820', boxShadow: 3, borderRadius: 2 }}>
                            <CardContent>
                                <Box display="flex" alignItems="center" mb={1}>
                                    <FaJava size={64} />
                                    <Typography variant="h4">Java</Typography>
                                </Box>

                                <Typography sx={{ color: 'text.secondary', mb: 1, fontStyle: 'oblique' }}>
                                    Intermediate
                                </Typography>

                                <Typography variant="body2" mb={1}>
                                    I have an in-depth understanding of modern day Java's
                                    features, particularly the Stream API. I would say Java is my strongest language,
                                    as I've worked with it extensively.
                                </Typography>

                                <Typography variant="body2" color="text.secondary">
                                    🛠 Libraries / Frameworks:
                                    Spring, Spring Web, Spring JWT, Spring Data JPA (& Hibernate),
                                    Selenium, Spring REST API
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>

                    <Grid size={4}>
                        <Card sx={{ minWidth: 275, borderLeft: '5px solid #f7df1e', boxShadow: 3, borderRadius: 2 }}>
                            <CardContent>
                                <Box display="flex" alignItems="center" justifyContent={'evenly'} mb={1}>
                                    <FaReact size={64} />
                                    <Typography variant="h4" sx={{ borderRight: '1px solid black', pr: '30px',
                                        marginRight: '5px' }}>
                                        React
                                    </Typography>
                                    <FaVuejs size={64} />
                                    <Typography variant="h4">
                                        Vue
                                    </Typography>
                                </Box>

                                <Typography sx={{ color: 'text.secondary', mb: 1, fontStyle: 'oblique' }}>
                                    Beginner
                                </Typography>

                                <Typography variant="body2" mb={1}>
                                    Familiar with the overarching concepts of React & Vue, and responsive UI
                                    design. I've only created beginner-level projects, but have done
                                    so successfully multiple times.
                                </Typography>

                                <Typography variant="body2" color="text.secondary">
                                    🛠 Libraries / Frameworks: Axios, MUI, Firebase, Vite, d3.js, TailwindCSS,
                                    Bootstrap, React Router
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                </Grid>
            </Box>

        </>
    )
}

export default PLanguageSkillsGrid;
