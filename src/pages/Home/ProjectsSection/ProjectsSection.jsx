import { Height } from "@mui/icons-material";
import { Box, Button, Grid, Typography } from "@mui/material";
import { useEffect, useState } from "react";



const ProjectsSection = () => {
    const [projects, setProjects] = useState([])

    useEffect(() => {
        fetch('http://localhost:3000/projects')
        .then(res => res.json())
        .then(data => setProjects(data))
        .catch(error => console.error(error))
    }, [])

    


    return (
        <Grid container sx={{ background: '#A9D6E5', overflow: 'hidden' }}>
        <Box sx={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
          <Typography variant="h4" fontWeight="500" color="#012A4A" my="15px">
            Projects Gallery
          </Typography>
        </Box>
  
        <Box width="100%">
          <Grid container spacing={2}>
           {
            projects.map(pr =>  <Grid key={pr._id} item xs={12} sm={6} md={4} sx={{
                '& > *' : {
                    m : '10px'
                }
            }}>       
              <Box
                sx={{
                  background: 'white',
                  height: 'auto',
                  pb : '25px',
                borderRadius : '7px',
                
                  '& img' : {
                    '@media (max-width : 600px)' : {
                        width : '100%'
                    },
                    '@media (min-width : 601px) and (max-width : 900px)' : {
                        width : '100%'
                    },
                    '@media (min-width : 901px)' : {
                        width : '100%'
                    } 
                  }  
                }}
              >
                <img src={pr.image} alt="" />
                <Box><Typography align="center" variant="h6">{pr.name}</Typography></Box>

              <Box m="15px">
                <Typography variant="subtitle1" fontWeight="600">Short description:</Typography>
                <Typography>{pr.description.slice(0, 80)}</Typography>
              </Box>
              <Box  m="25px" sx={{display : 'flex', justifyContent : 'center'}}>
                <Button variant="contained" sx={{
                    background : "#012A4A",
                    fontWeight : '600',
                    border : '3px solid #012A4A',
                    '&:hover' : {
                        background : 'white',
                        border : '3px solid #012A4A',
                        color : '#012A4A',
                        fontWeight : '600'
                    }
                    
                }}>
                    <Typography variant="body1" fontWeight={300}>See full details</Typography>
                </Button>
              </Box>
              </Box>
              
            </Grid>
            )
           }
           
     
          </Grid>
        </Box>
      </Grid>
    );
};

export default ProjectsSection;