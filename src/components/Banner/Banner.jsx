
import { Box, Button, Grid, Typography } from '@mui/material';
import bannerImg from '../../assets/banner-img.jpg'

const Banner = () => {
    return (
        <div>
            <Grid container sx={{ background: '#A9D6E5', py : '100px'}} >
                <Grid item xs={12} md={6}
                    sx={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',

                    }}
                >

                    <Box
                        sx={{
                            position: 'relative',
                            width: '60%',
                            paddingTop: '60%',
                            borderRadius: '50%',
                            background : 'red',
                            overflow: 'hidden',
                        }}
                    >
                        <Box
                            component="img"
                            src={bannerImg}
                            alt="Your Image"
                            sx={{
                                position: 'absolute',
                                top: '0',
                                left: '0',
                                width: '100%',
                                height: '100%',
                                objectFit: 'cover',
                            }}
                        />
                    </Box>


                </Grid>

                <Grid item xs={12} md={6} sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', px: 5, }}>
                    <Box sx={{ position: 'relative', my: '70px' }}>

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

                        <Typography variant='h2' component="h1" fontWeight={700} sx={{ color: '#012A4A' }}>ABDUR RAHMAN</Typography>
                        <Typography variant='body1' sx={{ color: '#012A4A' }}>I am a front-end developer with expertise in MongoDB, React, Firebase, and Node.js.
</Typography>
                        <Button variant="contained" sx={{
                    background : "#012A4A",
                    fontWeight : '600',
                    border : '3px solid #012A4A',
                    mt : "15px",
                    '&:hover' : {
                        background : 'white',
                        border : '3px solid #012A4A',
                        color : '#012A4A',
                        fontWeight : '600'
                    }
                    
                }}>
                    <Typography variant="body1" fontWeight={300}>Donwdload CV</Typography>
                </Button>

                    </Box>

                </Grid >

            </Grid>
        </div>
    );
};

export default Banner;