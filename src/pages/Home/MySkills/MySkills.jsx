import { Box, Grid, LinearProgress, Typography } from '@mui/material';



const MySkills = () => {

    const skills = [
        {
            "name" : "HTML",
            "ratting" : "95%",
            "id" : 1
        },
        {
            "name" : "CSS",
            "ratting" : "85%",
            "id" : 2
        },
        {
            "name" : "Javascript",
            "ratting" : "75%",
            "id" : 3
        },
        {
            "name" : "React",
            "ratting" : "85%",
            "id" : 4
        },
        {
            "name" : "Mongodb",
            "ratting" : "75%",
            "id" : 5
        },
        {
            "name" : "Tailwind",
            "ratting" : "85%",
            "id" : 6
        },
        {
            "name" : "Node js",
            "ratting" : "50%",
            "id" : 7
        },
        {
            "name" : "Git & GitHub",
            "ratting" : "80%",
            "id" : 8
        },

    ]
    return (
        <div >
            <Box sx={{
                width: '100%',
                background: '#014F86',
                py: '40px',
                // px : '3%',
                // gap : '10px',
                display : 'flex',
                justifyContent : 'center'
            }}>
               <Box sx={{width : '95%'}}>
               <Box sx={{
                    width: '100%',
                }}>
                    <Typography variant='h4' align='center' fontWeight={500} color="white">My skills</Typography>
                </Box>

                <Box sx={{
                    width: "100%",
                    mt: '40px'
                }}>
                    <Grid container spacing={2}>
                         
                        {
                            skills.map(skill => <Grid key={skill.id} item xs={12} md={6} >
                                <Box sx={{
                                    
                                    height: "100px",
                                    width : '95%'
                                }}>
                                    <Box>
                                        <Typography variant='h6' color="white" mb="5px" ml="5px">{skill.name}</Typography>
                                    </Box>
                               
                                    <Box sx={{
                                        width: '100%',
                                        background: 'white',
                                        height: '32px',
                                        borderRadius: '15px',
                                        display: 'flex',
                                        justifyContent: 'start',
                                        alignItems: 'center',
                                        pl: '5px',
                                    }}>
    
                                        <Box sx={{
                                            width: `${skill.ratting}`,
                                            height: '24px',
                                            background: '#012A4A',
                                            borderRadius: "15px",
                                            
                                        }}>
                                            <Typography color="white"
                                            align='center'
                                            fontWeight={600}
                                            >
                                                {skill.ratting}
                                            </Typography>
                                        </Box>
                                    </Box>
                                
                                </Box>
                            </Grid>)
                        }
                       
                        
                        

                    </Grid>

                </Box>
               </Box>

            </Box>
        </div>
    );
};

export default MySkills;