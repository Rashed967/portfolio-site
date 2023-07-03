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
                    <Typography fontSize="17px" color="black" variant='body2' fontWeight={400}>Welcome to my About page! I'm Abdur Rahman , I am a front-end developer with expertise in MongoDB, React, Firebase, and Node.js. With a strong passion for creating exceptional user experiences, I bring a dynamic skill set to web development.

In MongoDB, I excel at designing efficient database schemas and performing seamless CRUD operations. I prioritize data integrity through meticulous validation, ensuring the reliability and security of applications.

React is my go-to framework for front-end development, enabling me to build interactive and responsive user interfaces. With a deep understanding of state management and component-based architecture, I create reusable UI components that enhance maintainability and scalability.

I am well-versed in Firebase, leveraging its authentication, cloud storage, and real-time database features to streamline user management and data handling. This integration allows me to create powerful and efficient applications.

On the server side, I have experience with Node.js and the Express.js framework. I develop scalable server-side applications and RESTful APIs, ensuring seamless communication between the client and server.

With excellent problem-solving skills and a collaborative mindset, I thrive in team environments. I am committed to delivering outstanding results and effectively collaborating with designers, developers, and stakeholders.

I invite you to explore my portfolio to see examples of my work showcasing my proficiency in MongoDB, React, Firebase, and Node.js. If you have an exciting front-end development opportunity or a project that requires my expertise, I would love to hear from you. Let's collaborate to bring your ideas to life and create remarkable web applications.</Typography>
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