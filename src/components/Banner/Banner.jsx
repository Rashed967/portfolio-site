
import { Box, Button, Grid, Typography } from '@mui/material';
import bannerImg from '../../assets/banner-img.jpg'

const Banner = () => {
    return (
        <div>
           <Grid container sx={{background : '#A9D6E5'}} >
            <Grid item xs={12} md={5}
            sx={{
                display : 'flex',
                alignItems : 'center',
                justifyContent : 'center',
                position : 'relative',
                
                '& img' : {
                    // width : '50%',
                    height : '50%',
                    zIndex : 2,
                    
                    
                }
            }}
            >
                <img src={bannerImg} alt="" />
                <Box sx={{
                    background : '#012A4A',
                    width : 340,
                    height : 340,
                    borderRadius : 3,
                    position : 'absolute',
                    zIndex : 1,
                    ml : 5,
                    mt : 6,
                    mr : '7px'
                    // my : -15
                }}></Box>
            </Grid>

            <Grid item xs={12} md={7} sx={{display : 'flex', alignItems : 'center', justifyContent : 'center', px : 5, }}>
                <Box sx={{position : 'relative', my : '70px'}}>
                <Typography variant='h2' fontWeight={700} sx={{color : '#012A4A'}}>ABDUR RAHMAN</Typography>
                <Typography variant='body1' sx={{color : '#012A4A'}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur deleniti ipsam nulla? Deserunt, voluptates ratione.</Typography>
                <Button sx={{mt : 2, background : '#012A4A', color : 'white', py : 1, px : 2}} variant="contained"><Typography variant='button' fontWeight={400}>Download CV</Typography></Button>
                <Box sx={{
                    width : '230px',
                    height : '5px',
                    background : '#012A4A',
                    transform : 'rotate(90deg)',
                    transformOrigin : 'top left',
                    position : 'absolute',
                    left : '-20px',
                    top : '-10px',
                
                }}>

                    <Box sx={{
                        width: '15px',
                        height : '15px',
                        borderRadius : '50%',
                        background : '#012A4A',
                        position : 'absolute',
                        left : '-5px',
                        top : '-5px'
                    }}></Box>

                    <Box sx={{
                        width: '15px',
                        height : '15px',
                        borderRadius : '50%',
                        background : '#012A4A',
                        position : 'absolute',
                        right : '-5px',
                        top : '-5px'
                    }}></Box>

                </Box>
                </Box>
                
            </Grid >

           </Grid>
        </div>
    );
};

export default Banner;