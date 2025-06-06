import {Box, Card, CardContent, Grid, Link, Typography} from "@mui/material";
import {FaDocker, FaGitAlt} from "react-icons/fa6";
import {SiKubernetes, SiMongodb, SiPostgresql} from "react-icons/si";
import {VscAzure} from "react-icons/vsc";


const ToolsGrid = () => {
    return (
        <>

            <Typography variant="h3" sx={{ fontWeight: 'light', textAlign: 'center', marginBottom: '5rem' }}>
                Knowledge of Dev Tools:</Typography>
            <Box maxWidth="xs" className={"hello"} sx={{ display: 'flex', flexGrow: 1, alignItems: "center",
                justifyContent: "center", marginBottom: '10rem', textAlign: "center" }}>
                <Grid container spacing={2} sx={{ width: '75%', justifyContent: 'center', alignItems: 'center' }}>
                    <Grid size={{ xs: 12, sm: 6, md: 4, lg: 2 }}>
                        <Card sx={{ minWidth: 137, borderRight: '5px solid #0db7ed', boxShadow: 3, borderRadius: 2 }}>
                            <CardContent>
                                <Box display="flex" alignItems="center" mb={1}>
                                    <FaDocker size={64} />
                                    <Typography variant="h4" sx={{ marginLeft: '1rem' }}>Docker</Typography>
                                </Box>

                                <Typography sx={{ color: 'text.secondary', mb: 1, fontStyle: 'oblique' }}>
                                    Intermediate
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>

                    <Grid size={{ xs: 12, sm: 6, md: 4, lg: 2 }}>
                        <Card sx={{ minWidth: 137, borderRight: '5px solid #f05032', boxShadow: 3, borderRadius: 2 }}>
                            <CardContent>
                                <Box display="flex" alignItems="center" mb={1}>
                                    <FaGitAlt size={64} />
                                    <Typography variant="h4" sx={{ marginLeft: '1rem' }}>Git</Typography>
                                </Box>

                                <Typography sx={{ color: 'text.secondary', mb: 1, fontStyle: 'oblique' }}>
                                    Intermediate
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>

                    <Grid size={{ xs: 12, sm: 6, md: 4, lg: 2 }}>
                        <Card sx={{ minWidth: 137, borderRight: '5px solid #326ce5', boxShadow: 3, borderRadius: 2 }}>
                            <CardContent>
                                <Box display="flex" alignItems="center" mb={1}>
                                    <SiKubernetes size={64} />
                                    <Typography variant="h5" sx={{ marginLeft: '1rem' }}>Kubernetes</Typography>
                                </Box>

                                <Typography sx={{ color: 'text.secondary', mb: 1, fontStyle: 'oblique' }}>
                                    Beginner
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>

                    <Grid size={{ xs: 12, sm: 6, md: 4, lg: 2 }}>
                        <Card sx={{ minWidth: 137, borderRight: '5px solid #47a248', boxShadow: 3, borderRadius: 2 }}>
                            <CardContent>
                                <Box display="flex" alignItems="center" mb={1}>
                                    <SiMongodb size={64} />
                                    <Typography variant="h4" sx={{ marginLeft: '1rem' }}>NoSQL</Typography>
                                </Box>

                                <Typography sx={{ color: 'text.secondary', mb: 1, fontStyle: 'oblique' }}>
                                    Intermediate
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>

                    <Grid size={{ xs: 12, sm: 6, md: 4, lg: 2 }}>
                        <Card sx={{ minWidth: 137, borderRight: '5px solid #0078D4', boxShadow: 3, borderRadius: 2 }}>
                            <CardContent>
                                <Box display="flex" alignItems="center" mb={1}>
                                    <VscAzure size={64} />
                                    <Typography variant="h4" sx={{ marginLeft: '1rem' }}>Azure</Typography>
                                </Box>

                                <Typography sx={{ color: 'text.secondary', mb: 1, fontStyle: 'oblique' }}>
                                    Beginner
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>

                    <Grid size={{ xs: 12, sm: 6, md: 4, lg: 2 }}>
                        <Card sx={{ minWidth: 137, borderRight: '5px solid #336791', boxShadow: 3, borderRadius: 2 }}>
                            <CardContent>
                                <Box display="flex" alignItems="center" mb={1}>
                                    <SiPostgresql size={64}/>
                                    <Typography variant="h4" sx={{ marginLeft: '1rem' }}>SQL</Typography>
                                </Box>

                                <Typography sx={{ color: 'text.secondary', mb: 1, fontStyle: 'oblique' }}>
                                    Intermediate
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>


                </Grid>
            </Box>


        </>
    )
}

export default ToolsGrid;
