//import React from 'react'
import React, { useState } from 'react';
import Container from '@mui/material/Container'
import Header from './Header'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'



export default function Post() {
    
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
    const [currentTitle, setTitle] = useState("Test")
    const [currentText, setText] = useState(defaultString)

    return(
        <div className='Post'>
        <Container maxWidth="xs">
          <Header/>
        </Container>

        <Box sx={{ //box for buttons
            borderRadius: '4px',
            boxShadow:1,
            border: 1, 
            borderColor: "rgba(111, 172, 252, .4)",
            position: 'absolute',
            left:1500, top:200,
            width:"15%", height:500,
            bgcolor: '#e0f1ff'}} >

                <Button color="primary" sx={changeButtonStyle} onClick={() => setText(testingString)}>
                    Change text 1
                </Button>

                <Button color="primary" sx={changeButtonStyle} onClick={() => setText(defaultString)}>
                    Revert Text
                </Button>
        </Box>

        
        <Box sx={{ //outer box containing the text box
            borderRadius: '4px',
            boxShadow:1,
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
                width:"87.5%", height:"70%",
                bgcolor: '#e6f0f7'}}>


                <Box sx ={{ //box for the title
                    position: "relative",
                    width:"100%", height:"10%",
                    bgcolor:"#e6f0f7",
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

        </Box>

        </div>

    );




}