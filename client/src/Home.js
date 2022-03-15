//import React from 'react'
import React, { useState } from 'react';
import Container from '@mui/material/Container'
import Header from './Header'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import Stack from '@mui/material/Stack';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { CardActionArea } from '@mui/material';
import Avatar from '@mui/material/Avatar';
import "./index.css"


export default function Create (){


// constant strings for testing, will be replaced by appropriate data down the line
const defaultString = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
// const testingString = "According to all known laws of aviation, there is no way that a bee should be able to fly. Its wings are too small to get its fat little body off the ground. The bee, of course, flies anyway. Because bees don’t care what humans think is impossible."
const shorterString = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolo";

const changeButtonStyle = { // button styles for buttons under the text box
    position: "relative",
    fontSize:18,
    border:1,
    borderColor:"rgba(28, 54, 100, .6)",
    color:"#f37026",
    bgcolor:"#ecf3ff",
    mt: "2%",
    '&:hover':{
        backgroundColor:"#e6f0f7"
    }
}

//hook to change the text inside box
const [currentTitle, setTitle] = useState("Post")
const [currentText, setText] = useState(defaultString)

return(
    <div className='Home'>
    <Container maxWidth="xs">
        <Header/>
    </Container>

    <Container width="100%" height="100%"> 

        {/* Post box */}
        <Box sx={{ //outer box containing the text box
                borderRadius: '2px',
                boxShadow: 1,
                border: 1, 
                borderColor: "#1c3664",
                position: 'absolute',
                left: "4%",
                top: "10%",
                width:"50%", height:"90%",
                bgcolor: '#f7faff'}} >

                
                <Box m = "auto" sx={{ //inner box where the text box goes
                    padding: 2.5,
                    borderRadius: '2px',
                    boxShadow:1,
                    border: 1, 
                    borderColor: "rgba(28, 54, 100, .4)",
                    position: 'relative',
                    // left: 40,
                    // top: 30,
                    mt: "4%",
                    width:"83.5%", height:"35%",
                    bgcolor: '#ecf3ff'}}>


                    <Box sx ={{ //box for the title
                        position: "relative",
                        width:"100%", height:"20%",
                        bgcolor:"#ecf3ff",
                        left: 0,
                        top: -10,
                        borderBottom:1}}>
                    <Typography variant = "h4">
                        {currentTitle}
                    </Typography>
                    </Box>

                    <Box sx ={{ // actual box for text
                        position: "relative",
                        top:10,
                        width:"100%", height:"80%",
                        bgcolor:"#ecf3ff",}}>

                    <Typography variant = "body1">
                        {currentText}
                    </Typography>
                    </Box>
                </Box>

                <Box m = "auto" sx={{ //inner box where the text box goes
                    padding: 2.5,
                    borderRadius: '2px',
                    boxShadow:1,
                    border: 1, 
                    borderColor: "rgba(28, 54, 100, .4)",
                    position: 'relative',
                    // left: 40,
                    // top: 30,
                    mt: "4%",
                    width:"83.5%", height:"35%",
                    bgcolor: '#ecf3ff'}}>


                    <Box sx ={{ //box for the title
                        position: "relative",
                        width:"100%", height:"20%",
                        bgcolor:"#ecf3ff",
                        left: 0,
                        top: -10,
                        borderBottom:1}}>
                    <Typography variant = "h4">
                        {currentTitle}
                    </Typography>
                    </Box>

                    <Box sx ={{ // actual box for text
                        position: "relative",
                        top:10,
                        width:"100%", height:"80%",
                        bgcolor:"#ecf3ff",}}>

                    <Typography variant = "body1">
                        {currentText}
                    </Typography>
                    </Box>
                </Box>
                        
                <Stack
                    position="relative"
                    mt="1%"
                    mb="1%"
                    direction="row"
                    justifyContent="center"
                    >
                    <Button sx={changeButtonStyle} size="small">
                        View All
                    </Button>
                </Stack>
        </Box>

        {/* User card */}
        <Card sx={{ maxWidth: 345,
            bgcolor:"#f7faff",
            borderRadius: '2px',
            boxShadow:1,
            border: 1, 
            borderColor: "#1c3664",
            position: 'absolute',
            top: "10%",
            left: "65%",
            width:"30%", height:"40%",}}>
            
            <CardActionArea>
                <CardMedia align="center">
                    <Avatar sx={{ 
                        bgcolor: "#f37026", 
                        width: 56, 
                        height: 56,
                        mt:"7%"}}>
                            G
                    </Avatar>
                </CardMedia>
                <CardContent align="center">
                    <Typography gutterBottom variant="h5" component="div">
                        Welcome Greg
                    </Typography>
                <Typography color="text.secondary">
                    Username: asdf123
                </Typography>
                <Typography color="text.secondary">
                    Joined: 1st January 2022
                </Typography>
                <Typography color="text.secondary">
                    Posts: 4
                </Typography>
                </CardContent>
            </CardActionArea>
            <Stack
                    position="relative"
                    mt="1%"
                    mb="3%"
                    direction="row"
                    justifyContent="center">
                <Button size="small"sx={changeButtonStyle}>
                    Edit Profile
                </Button>
            </Stack>
        </Card>
        
        {/* Recently viewed box */}
        <Box sx={{ //outer box for the recently viewed section
            borderRadius: '4px',
            boxShadow:1,
            border: 1, 
            borderColor: "#1c3664",
            position: 'absolute',
            left:"60%",
            top: "55%",
            width:"35%", height:"45%",
            bgcolor: '#f7faff'}} >
            
            <Box m="auto" sx={{ //inner box where the text box goes
                padding: 2.5,
                borderRadius: '2px',
                boxShadow:1,
                border: 1, 
                borderColor: "rgba(28, 54, 100, .4)",
                position: 'relative',
                //left: 40,
                top: "6%",
                width:"83.5%", height:"60%",
                bgcolor: '#ecf3ff'}}>


                <Box sx ={{ //box for the title
                    position: "relative",
                    width:"100%", height:"20%",
                    left: 0,
                    top: -10,
                    borderBottom:1}}>
                <Typography variant = "h4">
                    {"Recently Viewed"}
                </Typography>
                </Box>

                <Box sx ={{ // actual box for text
                    position: "relative",
                    top:10,
                    width:"100%", height:"40%"}}>

                <Typography variant = "body1">
                    {shorterString}
                </Typography>
                </Box>
                

            </Box>
            <Stack
                    position="relative"
                    mt="8%"
                    direction="row"
                    justifyContent="center"
                    >
                    <Button sx={changeButtonStyle} size="small">
                        View Full
                    </Button>
            </Stack>
        </Box>
        
        </Container>
        </div>
        

);
}