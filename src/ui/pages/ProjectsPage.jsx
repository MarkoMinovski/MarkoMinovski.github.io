import projectsArray from '../../mui-helpers/projects-array.js'
import {Divider, Typography} from "@mui/material";
import Box from "@mui/material/Box";
import ProjectCard from "../components/projects-page/ProjectCard.jsx";
import FadeInOnScroll from "../../mui-helpers/FadeInOnScroll.jsx";
import {motion} from "framer-motion";
import {FaLongArrowAltLeft} from "react-icons/fa";
import Button from "@mui/material/Button";
import { Link } from 'react-router-dom';

const MotionProjectCard = motion.create(ProjectCard);

const ProjectsPage = () => {
    return (
        <>
            <Box
                sx={{
                    position: 'fixed',
                    top: '2rem',
                    left: '2rem',
                    zIndex: 1000,
                }}
            >
                <Button
                    component={Link}
                    to="/"
                    sx={{
                        fontSize: '2rem',
                        color: 'white',
                        transition: 'transform 0.2s ease',
                        '&:hover': { transform: 'scale(1.1)' },
                    }}
                >
                    <FaLongArrowAltLeft />
                </Button>
            </Box>

            <Typography variant="h2" sx={{ textAlign: 'center', marginTop: '7rem', marginBottom: '10rem' }} gutterBottom>
                Projects I've worked on
            </Typography>

            <Divider/>

            <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                {
                    projectsArray.map((project) => (
                            <MotionProjectCard key={project.id}
                                               name={project.name}
                                               description={project.description}
                                               github_link={project.github_link}
                                               initial={{ opacity: 0, y: 20 }}
                                               whileInView={{ opacity: 1, y: 0 }}
                                               viewport={{ once: true, margin: '-100px' }}
                                               transition={{ duration: 0.6, ease: 'easeOut' }}
                            >


                            </MotionProjectCard>

                    ))
                }
                <FadeInOnScroll>
                    <Box>
                        <Typography variant="h2" sx={{ textAlign: 'center', marginTop: '7rem', marginBottom: '10rem' }} gutterBottom>
                            ... and more!
                        </Typography>
                    </Box>
                </FadeInOnScroll>
            </Box>
        </>
    )
}

export default ProjectsPage;
