import { Box, Grid, LinearProgress, Typography } from '@mui/material';
import React from 'react';

const MySkills = () => {
    return (
        <div>
            <Box sx={{
                width : '100%',
                background : '#014F86',
                py : '40px'
            }}>
                <Box sx={{
                    width : '100%',           
                }}>
                    <Typography variant='h4' align='center' fontWeight={500} color="white">My skills</Typography>
                </Box>

                <Box sx={{
                    width : "100%",
                    mt : '40px'
                }}>
                    <Grid container spacing={2}>
                        <Grid item xs={12} md={6} >
                            <Box sx={{
                                background:"white",
                                height : "100px"
                            }}>
                                <Box>
                                    <Typography variant='h6' color="blue">Html</Typography>
                                </Box>
                                <Box>
                                    <Box sx={{width: "100%"}}>
                                        <Typography>80%</Typography>
                                        <LinearProgress variant="determinate"
                                value={80}
                                sx={{
                                    height : '15px'
                                }}
                                /> 
                                    </Box>
                                
                                </Box>
                                 </Box>
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <Box sx={{
                                background:"red",
                                height : "100px"
                            }}> </Box>
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <Box sx={{
                                background:"red",
                                height : "100px"
                            }}> </Box>
                        </Grid>
                    </Grid>

                </Box>

            </Box>
        </div>
    );
};

export default MySkills;