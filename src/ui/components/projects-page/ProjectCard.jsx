import {Link, Typography} from "@mui/material";
import Box from "@mui/material/Box";
import React from "react";


const ProjectCard =  React.forwardRef(({ name, github_link, description }, ref) => {
    return (
        <>
            <Box sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-evenly', marginBottom: '10rem',
                width: '40%', backgroundColor: '#292929', borderRadius: '16px' }} ref={ref}>
                <Box sx={{ margin: '1rem',
                    display: 'flex', flexDirection: 'column', justifyContent: 'space-between', textAlign: 'center' }}>
                    <Typography variant="h3" sx={{ fontWeight: 'bold', marginBottom: '2rem' }}>{name}</Typography>

                    <Typography variant="body2">
                        <Link href={github_link} target="_blank">
                            Source Code
                        </Link>
                    </Typography>
                </Box>

                <Box sx={{ display:'flex', flexDirection: 'column', justifyContent: 'center',
                    alignItems: 'center', textAlign: 'center' }}>
                    <Box>
                        <Typography variant="body">{description}</Typography>
                    </Box>

                </Box>
            </Box>
        </>
    );
});

export default ProjectCard;
