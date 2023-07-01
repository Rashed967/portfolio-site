import { Box, Button, Grid, Typography } from '@mui/material';
import React from 'react';

const AboteSectoin = () => {
    return (


        <Grid sx={{ background: '#014F86', py: '30px' }}>
            <Box>
                <Typography variant='h3' fontWeight={500} align="center" color="white" >Aboute me </Typography>
            </Box>

            <Box position="relative" sx={{
                // py : '70px',
                display: 'flex',
                justifyContent: 'center',
                // alignItems : 'center',
                width: '100%',
                height: '150px',
                my: '30px'

            }}>
                <Box sx={{
                    width: '3px',
                    height: '100%',
                    background: 'white',
                    position: 'absolute',
                    // left: '0',
                    // top: '0',

                }}>

                    <Box sx={{
                        width: '15px',
                        height: '15px',
                        borderRadius: '50%',
                        background: 'white',
                        position: 'absolute',
                        left: '-6px',
                        top: '-5px'
                    }}></Box>

                    <Box sx={{
                        width: '15px',
                        height: '15px',
                        borderRadius: '50%',
                        background: 'white',
                        position: 'absolute',
                        right: '-5px',
                        bottom: '-5px'
                    }}></Box>

                </Box>
            </Box>

            <Box sx={{
                display : 'flex',
                justifyContent : 'center'
            }}>
                <Typography align='center' variant='body1' fontWeight="400" color="white" sx={{
                    px : '15px',
                    '@media (min-width : 800px)' : {
                        width : '70%'
                    },
                    '@media (min-width : 1000px)' : {
                        width : '60%'
                    },
                }}>I have been working in the web development sector for one year. I have completed many personal projects. From designing
                    to coding, writing logic, debugging, and testing, I did it alone. I have a strong ability to solve any
                    problem by reading the documentation.</Typography>
                    
            </Box>
            <Box sx={{
                width : '100%',
                py : '20px',
                display : 'flex',
                justifyContent : 'center'
            }}>
            <Button sx={{ mt: 2, background: 'white', color: '#012A4A', py: 1, px: 2 }} variant="contained"><Typography variant='button' fontWeight={400}>More about me</Typography></Button>
            </Box>
        </Grid>




    );
};

export default AboteSectoin;