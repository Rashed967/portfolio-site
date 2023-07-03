import { Link } from 'react-router-dom';
import image from '../../assets/banner-img.jpg'
import { Box,Button,Typography } from '@mui/material';





const About = () => {

    return (
        <div>
             <Box sx={{ width: '100%', background : "#A9D6E5",}}>
                <Typography variant='h4'fontWeight={600} py="30px" color="#012A4A" align="center">Aboute me</Typography>
            </Box>
            <Box  sx={{widht : "100%", display :"flex", justifyContent : "center", alignItems : "center", py : "60px", background : "#014F86"}}>
                <img width="50%" src={image} alt="" />
            </Box>
            <Box sx={{width : "100%", background :"#A9D6E5", display : "flex", justifyContent : "center", alginItmes :"center", py : "40px"}}>
                <Box sx={{  width : "90%"}}>
                    <Box >
                    <Typography color="black" variant='body2' fontWeight={300}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus ut quos iste vero tempora officiis, eligendi temporibus autem laudantium blanditiis vel. Sint odio delectus deleniti minus beatae ullam veritatis, illum molestiae incidunt fugiat mollitia, facilis, consequuntur in quis aut suscipit nulla amet repudiandae dicta placeat alias quos! Eum saepe vitae unde omnis ipsam molestiae dolorem excepturi obcaecati sed distinctio exercitationem maxime eos doloremque est adipisci fuga officiis, reiciendis atque repellat! Iusto, cumque? Quisquam aut debitis beatae nihil, repellendus ad distinctio, quaerat quasi, dolor corrupti quas omnis. Laboriosam similique corporis distinctio ipsa omnis sed veniam perspiciatis ad deleniti, temporibus iste nihil minus quos eum explicabo molestias? Corporis explicabo nemo non, numquam repellat nisi temporibus nulla recusandae dolorum. Voluptatibus tempore soluta, velit, earum ea possimus iste cum doloremque quo explicabo rem? Vel ut a porro debitis vero cupiditate quisquam reiciendis, repellat id laudantium! Quidem ducimus iusto non, velit magni enim id delectus asperiores, eos consequatur sequi similique dolorem veniam dolores aperiam molestias magnam illum quia omnis provident. Corporis praesentium, et consectetur aperiam sapiente laudantium suscipit ipsa minima sed laborum. Maiores dolores reiciendis deleniti quae id, porro dicta totam fugiat nemo minima delectus, ex, facilis temporibus beatae nam? Nobis vero incidunt voluptatibus! Beatae.</Typography>
                    </Box>
                    <Box sx={{width : "100%" , display : "flex", justifyContent : "center", mt  : "30px"}}>
                    <Button variant="contained" sx={{
                                background : "#012A4A",
                                fontWeight : '600',
                                border : '3px solid #012A4A',
                                '&:hover' : {
                                    background : 'white',
                                    
                                    border : '3px solid #012A4A',
                                    fontWeight : '600'
                                }
                                
                            }}>
                                <Link to="/contact" style={{textDecoration : 'none'}}>
                                <Typography color="white" variant="body1" fontWeight={300}
                                sx={{
                                    '&:hover' : {
                                        color : '#012A4A' 
                                    }
                                }}
                                >HIre me</Typography></Link>
                            </Button>
                    </Box>
 
                </Box> 
                
            </Box>
            
        </div>
    );
};

export default About;