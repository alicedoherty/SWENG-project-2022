//import React from 'react'
import React, { useState } from 'react';
import Container from '@mui/material/Container'
import Header from './Header'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import Grid from '@mui/material/Grid'
import Icon from '@mui/material/Icon';
import AccountCircleTwoToneIcon from '@mui/icons-material/AccountCircleTwoTone';

export default function Create (){


  // constant strings for testing, will be replaced by appropriate data down the line
  const defaultString = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
  const testingString = "According to all known laws of aviation, there is no way that a bee should be able to fly. Its wings are too small to get its fat little body off the ground. The bee, of course, flies anyway. Because bees don’t care what humans think is impossible."


  const changeButtonStyle = { // button styles for buttons under the text box
      position: "relative",
      fontSize:18,
      
      '&:hover':{
        backgroundColor:"cfe8fc"
      }
    }
  
  //hook to change the text inside box
  const [currentTitle, setTitle] = useState("Post")
  const [currentText, setText] = useState(defaultString)

  return(
      <div className='Post'>
      <Container maxWidth="xs">
        <Header/>
      </Container>
      
      <Box sx={{ //outer box containing the text box
            borderRadius: '4px',
            boxShadow:10,
            border: 1, 
            borderColor: "rgba(111, 172, 252, .4)",
            position: 'relative',
            left: 70,
            top: 100,
            width:"50%", height:800,
            bgcolor: '#e0f1ff'}} >

            
            <Box sx={{ //inner box where the text box goes
                padding: 2.5,
                borderRadius: '1px',
                boxShadow:1,
                border: 1, 
                borderColor: "rgba(0,0,0,.5)",
                position: 'relative',
                left: 40,
                top: 30,
                width:"83.5%", height:"30%",
                bgcolor: '#e6f0f7'}}>


                <Box sx ={{ //box for the title
                    position: "relative",
                    width:"100%", height:"20%",
                    bgcolor:"#e6f0f7",
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
                    bgcolor:"#e6f0f7",}}>

                <Typography variant = "body1">
                    {currentText}
                </Typography>
                </Box>

            </Box>

            <Box sx={{ //inner box where the text box goes
                padding: 2.5,
                borderRadius: '1px',
                boxShadow:10,
                border: 1, 
                borderColor: "rgba(0,0,0,.5)",
                position: 'relative',
                left: 40,
                top: 70,
                width:"83.5%", height:"30%",
                bgcolor: '#e6f0f7'}}>


                <Box sx ={{ //box for the title
                    position: "relative",
                    width:"100%", height:"20%",
                    bgcolor:"#e6f0f7",
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
                    bgcolor:"#e6f0f7",}}>

                <Typography variant = "body1">
                    {currentText}
                </Typography>
                </Box>

            </Box>

            <Box sx={{ //inner box where the text box goes
                padding: 2.5,
                borderRadius: '1px',
                boxShadow:10,
                border: 1, 
                borderColor: "rgba(0,0,0,.5)",
                position: 'relative',
                left: 40,
                top: 120,
                width:"12.5%", height:"2%",
                bgcolor: '#1976d2'}}>


                <Box sx ={{ // box for view all button
                    position: "relative",
                    top:0.1,
                    width:"100%", height:"80%",
                    left: 0,
                    top: -10,
                    bgcolor:"#1976d2",}}>

                <Typography variant = "h6">
                    {"View All"}
                </Typography>
                </Box>

                <Grid container justify = "center">
                    <Grid item xs={6}>
                        <Button 
                        color = "primary"
                        size = "large"
                        type = "submit"
                        variant = "contained" >

                        </Button>
                    </Grid>
                    
                </Grid>

            </Box>

        </Box>


        <Box sx={{ //outer box for the profile section
            borderRadius: '4px',
            boxShadow:10,
            border: 1, 
            borderColor: "rgba(111, 172, 252, .4)",
            position: 'relative',
            left: 1400,
            top: -700,
            width:"30%", height:350,
            bgcolor: '#e0f1ff'}} >
            

            <Box sx={{ //inner box where the text box goes
                padding: 2.5,
                borderRadius: '1px',
                boxShadow:1,
                border: 1, 
                borderColor: "rgba(0,0,0,.5)",
                position: 'relative',
                left: 40,
                top: 30,
                width:"53.5%", height:"40%",
                bgcolor: '#e6f0f7'}}>


                <Box sx ={{ //box for the title
                    position: "relative",
                    width:"80%", height:"40%",
                    bgcolor:"#e6f0f7",
                    left: 0,
                    top: -10,
                    borderBottom:1}}>
                <Typography variant = "h4">
                    {"Profile"}
                </Typography>
                </Box>

                <Box sx ={{ // actual box for text
                    position: "relative",
                    top:10,
                    width:"100%", height:"40%",
                    bgcolor:"#e6f0f7",}}>

                <Typography variant = "body1">
                    {"Name : Greg"}
                </Typography>
                <Typography variant = "body1">
                    {"Joined : 1st Jan 2022"}
                </Typography>
                <Typography variant = "body1">
                    {"Posts : 4"}
                </Typography>
                </Box>
                

            </Box>

            <AccountCircleTwoToneIcon sx={{ 
                    fontSize: 150,
                    width: "160%", height: "60%",
                    top: -10

                    }} />

            <Box sx ={{ // box for the edit profile button
                position: "relative",
                width:"20%", height:"20%",
                left: 40,
                top: -150,
                bgcolor:"#1976d2",}}>

                <Typography variant = "h6">
                    {"Edit Profile"}
                </Typography>
            </Box>

        </Box>

        <Box sx={{ //outer box for the recently viewed section
            borderRadius: '4px',
            boxShadow:10,
            border: 1, 
            borderColor: "rgba(111, 172, 252, .4)",
            position: 'relative',
            left: 1400,
            top: -650,
            width:"30%", height:400,
            bgcolor: '#e0f1ff'}} >
            


            <Box sx={{ //inner box where the text box goes
                padding: 2.5,
                borderRadius: '1px',
                boxShadow:1,
                border: 1, 
                borderColor: "rgba(0,0,0,.5)",
                position: 'relative',
                left: 40,
                top: 30,
                width:"83.5%", height:"60%",
                bgcolor: '#e6f0f7'}}>


                <Box sx ={{ //box for the title
                    position: "relative",
                    width:"80%", height:"30%",
                    bgcolor:"#e6f0f7",
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
                    width:"100%", height:"40%",
                    bgcolor:"#e6f0f7",}}>

                <Typography variant = "body1">
                    {currentText}
                </Typography>
                </Box>
                

            </Box>

            <Box sx ={{ // box for the view full button
                position: "relative",
                width:"20%", height:"10%",
                left: 40,
                top: 55,
                bgcolor:"#1976d2",}}>

                <Typography variant = "h6">
                    {"View Full"}
                </Typography>
            </Box>

        </Box>

        </div>

  );


/*
    return(
        <Container maxWidth="xs">
          <Header/>
          
        </Container>
    );
    */
}