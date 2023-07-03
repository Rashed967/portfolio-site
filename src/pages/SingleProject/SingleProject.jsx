import { FiberManualRecord } from '@mui/icons-material';
import { Box, Button, Grid, IconButton, List, ListItem, ListItemIcon, ListItemText, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import LaunchIcon from '@mui/icons-material/Launch';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';
import GitHubIcon from '@mui/icons-material/GitHub';
import CodeIcon from '@mui/icons-material/Code';




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
                    <Box>
                    <Box  m="25px" >

        <Grid container spacing={2}>
            <Grid item xs={10} sm={4}>
            <Button
variant="contained"
sx={{
background: "#012A4A",
fontWeight: '600',
border: '3px solid #012A4A',
'&:hover': {
background: 'white',
border: '3px solid #012A4A',
fontWeight: '600',
'& .MuiIconButton-root': {
color: '#012A4A'
},
'& .MuiTypography-root': {
color: "#012A4A"
}
}
}}
>

<Link to={project.liveSite} style={{ textDecoration: 'none' }}>
<Typography
color="white"
variant="body1"
fontWeight={300}
sx={{ display: 'flex', alignItems: 'center' }}
>
<IconButton
size="small"
sx={{
color: 'white',
'&:hover': {
background: "none"
}
}}
>
<LaunchIcon />
</IconButton>
Live site
</Typography>
</Link>
</Button>
            </Grid>

            <Grid item xs={10} sm={4}>
{/* 2nd button  */}
<Button
variant="contained"
sx={{
background: "#012A4A",
fontWeight: '600',
border: '3px solid #012A4A',
'&:hover': {
background: 'white',
border: '3px solid #012A4A',
fontWeight: '600',
'& .MuiIconButton-root': {
color: '#012A4A'
},
'& .MuiTypography-root': {
color: "#012A4A"
}
}
}}
>
<Link to={project.serverSide} style={{ textDecoration: 'none' }}>
<Typography
color="white"
variant="body1"
fontWeight={300}
sx={{ display: 'flex', alignItems: 'center' }}
>
<IconButton
size="small"
sx={{
color: 'white',
'&:hover': {
background: "none"
}
}}
>
<GitHubIcon />
</IconButton>
Client side
</Typography>
</Link>
</Button>
            </Grid>

            <Grid item xs={10} sm={4}>
{/* 3r button  */}
<Button
variant="contained"
sx={{
background: "#012A4A",
fontWeight: '600',
border: '3px solid #012A4A',
'&:hover': {
background: 'white',
border: '3px solid #012A4A',
fontWeight: '600',
'& .MuiIconButton-root': {
color: '#012A4A'
},
'& .MuiTypography-root': {
color: "#012A4A"
}
}
}}
>
<Link to={project.serverSide} style={{ textDecoration: 'none' }}>
<Typography
color="white"
variant="body1"
fontWeight={300}
sx={{ display: 'flex', alignItems: 'center' }}
>
<IconButton
size="small"
sx={{
color: 'white',
'&:hover': {
background: "none"
}
}}
>
<CodeIcon />
</IconButton>
Server side
</Typography>
</Link>
</Button>

            </Grid>
        </Grid>








</Box>

{/* button end  */}
                    </Box>
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