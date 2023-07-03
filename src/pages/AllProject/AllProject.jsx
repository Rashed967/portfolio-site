import { Box, Button, Grid, IconButton, Typography } from '@mui/material';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import LaunchIcon from '@mui/icons-material/Launch';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';


const AllProject = () => {
    const [projects, setProjects] = useState([])

    useEffect(() => {
        fetch('http://localhost:3000/projects')
        .then(res => res.json())
        .then(data => setProjects(data))
        .catch(error => console.error(error))
    },[])

    

    return (
        <div>
            <Box sx={{ width: '100%', background : "#A9D6E5"}}>
                <Typography variant='h4'fontWeight={600} py="30px" color="#012A4A" align="center">Projects Gallery</Typography>
            </Box>

            <Box sx={{width : '100%', display : "flex", justifyContent : "center", alignItems : "center",  background : "#014F86"}}>
                <Box sx={{width : "95%", py :"40px", pb : "70px"}}>

                    <Grid container spacing={2}>

                    {
                        projects.map(pr => <Grid key={pr._id} item xs={12} sm={6} md={4} sx={{
                            '& > *' : {
                                // m : '10px'
                            }
                        }}>       
                          <Box
                            sx={{
                              background: 'white',
                              height: 'auto',
                              pb : '25px',
                            borderRadius : '7px',
                            
                              '& img' : {
                                borderRadius : "7px 7px 0 0 ",
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
                            <Typography variant="subtitle1" fontWeight="600">Projects Description</Typography>
                            <Typography>{pr.description.slice(0,80)}</Typography>
                          </Box>
                          <Box  m="25px" sx={{display : 'flex', justifyContent : 'space-evenly'}}>


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
  <Link to={`${pr.liveSite}`} style={{ textDecoration: 'none' }}>
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
  <Link to={`/singleProject/${pr._id}`} style={{ textDecoration: 'none' }}>
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
        <InfoOutlinedIcon />
      </IconButton>
      Details
    </Typography>
  </Link>
</Button>
                          </Box>
                          </Box>
                          
                                </Grid>)
                    }


                    </Grid>
                </Box>
            </Box>
        </div>
    );
};

export default AllProject; 