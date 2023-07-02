import { Box, Button, TextField, TextareaAutosize, Typography } from '@mui/material';
import React from 'react';

const Contact = () => {
    return (
        <div>
            <Box sx={{ width: '100%', background: "#A9D6E5", }}>
                <Typography variant='h4' fontWeight={600} py="30px" color="#012A4A" align="center">Contact me</Typography>
            </Box>
            <Box sx={{ width: "100%", display: "flex", justifyContent: "center", alignItems: "center", background: "#014F86", py: "70px" }}>
                {/* Main Box  */}
                <Box component="form" sx={{
                    // width: "90%",
                    '@media(max-width : 599px )': {
                        width: '90%'
                    },
                    '@media(min-width : 600px ) and (max-width : 959px)': {
                        width: '80%'
                    },
                    '@media(min-width : 960px )': {
                        width: '60%'
                    },
                    '& > *': {
                        background: "white",
                        color: '#014F86',
                        borderRadius: "11px",
                        // m : '1.3%',
                        '@media (max-width : 599px)': {
                            width: '100%',
                        },
                        '@media (min-width : 600px)': {
                            width: '47%',
                            
                        },


                    }

                }}>
                    <TextField sx={{m : "4px", '@media (max-width : 599px)' : {ml : "0px"}}} type='text' label="Full name" id='outlined' variant='filled' />
                    <TextField sx={{m : "4px"}} type='email' label="Email" id='outlined' variant='filled' />
                    <TextField sx={{m : "4px"}} type='number' label="Phone number" id='outlined' variant='filled' />

                    <TextField sx={{m : "4px"}} type='text' label="Subject" id='outlined' variant='filled' />

                   
                    <TextareaAutosize
                        placeholder="Message"
                        minRows={12}
                        style={{margin : "10px 0 10px", width: '99%', marginBottom: '12px', resize: 'none',  }}
                        
                    />

                    <Button sx={{ width: "96%", background: "white", color: "#014F86", fontWeight: "600", fontSize: "17px" }} type='submit' variant='contained'>Submit</Button>
                 

                </Box>
            </Box>
        </div>
    );
};

export default Contact;