import { Box, Grid, Typography } from '@mui/material';
import React from 'react';

const AboteSectoin = () => {
    return (
       
            <Grid>
                <Box>
                    <Typography variant='h3' fontWeight={500} align="center" color="#012A4A" my="30px">Aboute me </Typography>
                </Box>

                <Box position="relative" my="70px" sx={{
                    background : 'red',
                    py : '70px'
                }}>
                <Box sx={{
                            width: '5px',
                            height: '120%',
                            background: '#012A4A',
                            position: 'absolute',
                            left: '-20px',
                            top: '-10px',

                        }}>

                            <Box sx={{
                                width: '15px',
                                height: '15px',
                                borderRadius: '50%',
                                background: '#012A4A',
                                position: 'absolute',
                                left: '-5px',
                                top: '-5px'
                            }}></Box>

                            <Box sx={{
                                width: '15px',
                                height: '15px',
                                borderRadius: '50%',
                                background: '#012A4A',
                                position: 'absolute',
                                right: '-5px',
                                bottom: '-5px'
                            }}></Box>

                        </Box>
                </Box>
            </Grid>
            
        
    );
};

export default AboteSectoin;