import { Box, Grid, Typography } from "@mui/material";
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
        <Grid container sx={{ background: '#A9D6E5' , overflow : 'hidden'}}>
            <Box sx={{ width: '100%', display: 'flex', justifyContent: 'center' }}><Typography variant="h4" fontWeight="500" color="#012A4A" my="15px">Projects Gallery</Typography></Box>

            <Box sx={{ display: 'flex',
            // width : '100%',
            justifyContent: 'center',
            gap : '20px',
            flexWrap :  'wrap',
            '@media (max-width: 576px)': {
                width : '90%',
                '& > *': {
                  flex: '1 1 100%',
                  
                },
              },
            '@media (min-width: 576px) and (max-width : 767px)': {
                width : '70%',
                '& > *': {
                  flex: '1 1 100%',
                  
                },
              },
              '@media (min-width: 768px) and (max-width: 1279px)': {
                '& > *': {
                  flex: '1 1 50%',
                },
              },
              '@media (min-width: 1280px)': {
                '& > *': {
                  flex: '1 1 33.33%',
                },
              },
            
            }}>
          {
            projects.map(pr => <Box key={pr._id}
                sx={{
                  height: '300px',
                  background: 'red',
                  
                }}
              >
               
                <Box sx={{
                    width : '100%',
                    '& img' : {
                        width : '30%',
                        '@media (max-width: 567px)': {
                            width : '70%'
                        },
                        '@media (min-width : 568px) and (max-width: 867px)' : {
                            width : '50%'
                        },
                        '@media (min-width : 868px) and (max-width : 991px)' : {
                            width : '30%'
                        }
                    }
                }}>
                    <img src={pr.image} alt="" />
                </Box>
                <Box><Typography>{pr.name}</Typography></Box>
              </Box>)
          }      

      

    </Box>
        </Grid>
    );
};

export default ProjectsSection;