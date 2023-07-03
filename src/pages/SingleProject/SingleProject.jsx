import { FiberManualRecord } from '@mui/icons-material';
import { Box, List, ListItem, ListItemIcon, ListItemText, Typography } from '@mui/material';
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


    return (
        <div>
             <Box sx={{ width: '100%', background : "#A9D6E5",}}>
                <Typography variant='h4'fontWeight={600} py="30px" color="#012A4A" align="center">{project.name}  details</Typography>
            </Box>
            <Box sx={{widht : "100%"}}>
                <img width="100%" src={project.image} alt="" />
            </Box>
            <Box sx={{width : "100%", background :"#014F86", display : "flex", justifyContent : "center", alginItmes :"center", py : "40px"}}>
                <Box sx={{  width : "90%"}}>
                    <Box >
                    <Typography variant='subtitle1' color="white">Project description:</Typography>
                    <Typography color="white" variant='body2' fontWeight={300}>{project.description}</Typography>
                    </Box>
                    <Box  sx={{mt : "15px"}}>
                    <Typography variant='subtitle1' color="white">Project Features:</Typography>
                    <List disablePadding="true" dense="true">
                        {
                            project.features?.map(feature => <ListItem  key={feature}>
                               
                                <ListItemText sx={{py : -1}}>
                                
                                    <Typography variant='body2' color="white" fontWeight={300}>{feature}</Typography></ListItemText>
                            </ListItem>)
                        }
                    </List>
                </Box>

                <Box  sx={{mt : "15px"}}>
                    <Typography variant='subtitle1' color="white">Project duration:</Typography>
                    <Typography color="yellow" variant='body2' fontWeight={300}>{project.duration}</Typography>
                </Box>
                
                <Box  sx={{mt : "15px"}}>
                    <Typography variant='subtitle1' color="white">Used technologies:</Typography>
                    <List>
                        {
                            project.technologis?.map(technology => <ListItem  key={technology}>
                                
                                <ListItemText sx={{py : -1}}>
                                  
                                    <Typography sx={{}} variant='body2' color="white" fontWeight={300}>{technology}</Typography></ListItemText>
                            </ListItem>)
                        }
                    </List>
                </Box>


                <Box  sx={{mt : "15px"}}>
                    <Typography variant='subtitle1' color="white">Project Challanges:</Typography>
                    <Typography color="white" variant='body2' fontWeight={300}>{project.challanges}</Typography>
                </Box>

                
                </Box> 
                
            </Box>
            
        </div>
    );
};

export default SingleProject;