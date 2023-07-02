import { Box, List, ListItem, ListItemText, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';


const SingleProject = () => {
    const {id} = useParams()

    const [project, setProject] = useState([])

    useEffect(() => {
        fetch(`http://localhost:3000/projects/${id}`)
        .then(res => res.json())
        .then(data => setProject(data))
        .catch(error => console.error(error))

    },[id])

    console.log(project)
    return (
        <div>
             <Box sx={{ width: '100%', background : "#A9D6E5"}}>
                <Typography variant='h4'fontWeight={600} py="30px" color="#012A4A" align="center">Projects Details</Typography>
            </Box>
            <Box sx={{widht : "100%"}}>
                <img width="100%" src={project.image} alt="" />
            </Box>
            <Box sx={{width : "100%", background :"#014F86", display : "flex", justifyContent : "center", alginItmes :"center"}}>
                <Box sx={{  width : "90%"}}>
                    <Box>
                    <Typography variant='subtitle1' color="white">Project description:</Typography>
                    <Typography color="white" variant='body2' fontWeight={300}>{project.description}</Typography>
                    </Box>
                    <Box>
                    <Typography variant='subtitle1' color="white">Project Features:</Typography>
                    <List>
                        {
                            project.features?.map(feature => <ListItem key={feature}>
                                <ListItemText><Typography variant='body2' color="white" fontWeight={300}>{feature}</Typography></ListItemText>
                            </ListItem>)
                        }
                    </List>
                </Box>

                <Box>
                    <Typography variant='subtitle1' color="white">Project duration:</Typography>
                    <Typography color="white" variant='body2' fontWeight={300}>{project.duration}</Typography>
                </Box>
                
                <Box>
                    <Typography variant='subtitle1' color="white">Used technologies:</Typography>
                    <List>
                        {
                            project.technologis?.map(technology => <ListItem key={technology}>
                                <ListItemText><Typography variant='body2' color="white" fontWeight={300}>{technology}</Typography></ListItemText>
                            </ListItem>)
                        }
                    </List>
                </Box>


                <Box>
                    <Typography variant='subtitle1' color="white">Project Challanges:</Typography>
                    <Typography color="white" variant='body2' fontWeight={300}>{project.challanges}</Typography>
                </Box>

                
                </Box> 
                
            </Box>
            
        </div>
    );
};

export default SingleProject;