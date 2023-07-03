import { Box, Grid, List, ListItem, ListItemText, Typography } from "@mui/material";
import { Link } from "react-router-dom";


const Footer = () => {
    return (
        <div>
            <Box sx={{ width: '100%', background: '#012A4A', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <Box sx={{ width: '90%', p: '30px' }}>
                    <Grid container spacing={2}>
                        <Grid item xs={12} sm={6} md={4} >
                            <Box >
                                <Typography variant="h6" color="white">Important links</Typography>
                                <List>
                                    <ListItem >
                                        <Link to="/about"><ListItemText sx={{ color: 'white', }} primary="About" /></Link>
                                    </ListItem>
                                    <ListItem sx={{ color: 'white' }}>
                                        <Link to="/contact"><ListItemText sx={{ color: 'white' }} primary="Contact me" /></Link>
                                    </ListItem>
                                    <ListItem sx={{ color: 'white' }}>
                                        <Link to="/AllProject"><ListItemText sx={{ color: 'white' }} primary="Projects" /></Link>
                                    </ListItem>
                                    <ListItem sx={{ color: 'white' }}>
                                        <Link to="#"><ListItemText sx={{ color: 'white' }} primary="Resume" /></Link>
                                    </ListItem>
                                </List>
                            </Box>
                        </Grid>
                        <Grid item xs={12} sm={6} md={4} >
                            <Box>
                                <Typography variant="h6" color="white">Social links</Typography>
                                <List>
                                    <ListItem >
                                        <Link to="https://www.facebook.com/abdurRahmanRashed.967"><ListItemText sx={{ color: 'white' }} primary="Facebook" /></Link>
                                    </ListItem>
                                    <ListItem sx={{ color: 'white' }}>
                                        <Link to="https://www.linkedin.com/in/abdur-rahman967/"><ListItemText sx={{ color: 'white' }} primary="Linkedin" /></Link>
                                    </ListItem>
                                    <ListItem sx={{ color: 'white' }}>
                                        <Link to="#"><ListItemText sx={{ color: 'white' }} primary="Instagram" /></Link>
                                    </ListItem>
                                    <ListItem sx={{ color: 'white' }}>
                                        <Link to="#"><ListItemText sx={{ color: 'white' }} primary="Twitter" /></Link>
                                    </ListItem>
                                </List>
                            </Box>
                        </Grid>
                        <Grid item xs={12} sm={6} md={4} >
                            <Box>
                                <Typography variant="h6" color="white">Live site links</Typography>
                                <List>
                                    <ListItem >
                                        <Link to="https://afghan-chef-hunter-by-rashed.web.app/"><ListItemText sx={{ color: 'white' }} primary="Afghan chef hunter" /></Link>
                                    </ListItem>
                                    <ListItem sx={{ color: 'white' }}>
                                        <Link to="https://toy-joy-client.web.app/"><ListItemText sx={{ color: 'white' }} primary="ToyJoy Shop
" /></Link>
                                    </ListItem>
                                    <ListItem sx={{ color: 'white' }}>
                                        <Link to="https://art-and-craft-823bc.web.app/"><ListItemText sx={{ color: 'white' }} primary="Art and craft
" /></Link>
                                    </ListItem>

                                </List>
                            </Box>
                        </Grid>
                    </Grid>
                </Box>
            </Box>
            <Box sx={{ width: '100%', py: '20px', background: "#A9D6E5" }}>
                <Typography variant="subtitle1" align="center" color="#012A4A">@ copyright text</Typography>
                <Typography variant="body1" align="center" color="#012A4A">All copyright reserved by Abdur Rahman, 2023</Typography>
            </Box>
        </div>
    );
};

export default Footer;