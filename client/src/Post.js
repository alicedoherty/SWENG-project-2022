//import React from 'react'
import React, { useState } from 'react';
import Container from '@mui/material/Container'
import Header from './Header'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import AccountCircleIcon from '@mui/icons-material/AccountCircle'
import Stack from '@mui/material/Stack'
import PropTypes from 'prop-types'
import { useParams } from 'react-router';
import post_data from "./data/post_data";


function Post(props) {
    // let {
    //     post
    // } = props;
    const {id} = useParams();
    const post = post_data[id];

    //function createButton()
    
    // constant strings for testing, will be replaced by appropriate data down the line
    const userName = "testUser"
    const defaultString = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
    const testingString = "According to all known laws of aviation, there is no way that a bee should be able to fly. Its wings are too small to get its fat little body off the ground. The bee, of course, flies anyway. Because bees don’t care what humans think is impossible."

    const changeButtonStyle = { // button styles for buttons under the text box
        position: "relative",
        fontSize:18,
        border:1,
        borderColor:"black",
        backgroundColor:"#e6f0f7",
        
        '&:hover':{
          //backgroundColor:"#e6f0f7"
        }
      }

    const textButtonStyle = {
        position: "relative",
        fontSize: 14,

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


        <Container maxWidth="100%" height="100%"> 

        <Box sx={{ //box for buttons
            borderRadius: '4px',
            boxShadow:1,
            border: 1, 
            borderColor: "rgba(111, 172, 252, .4)",
            position: 'absolute',
            left:"75%", top:"10vh",
            width:"15%", height:"60vh",
            bgcolor: '#e0f1ff'}} >

                <Typography variant = "h5" align = "center" sx={{position:'relative', top:"1%", padding:1.5}}>
                    Previous versions
                </Typography>

                <Container>
                <Stack spacing={4}>
                    <Button color="primary" variant="outlined" sx={changeButtonStyle} onClick={() => setText(testingString)}>
                        Change text 1
                    </Button>
                    <Button sx={changeButtonStyle} onClick={() => setText(defaultString)}>
                        Revert Text
                    </Button>

                </Stack>
                </Container>
        </Box>
        
        <Box sx={{ //outer box containing the text box
            borderRadius: '4px',
            boxShadow:1,
            border: 1, 
            borderColor: "rgba(111, 172, 252, .4)",
            position: 'relative',
            left: "5%",
            top: "10vh",
            width:"60%", height:"80vh",
            bgcolor: '#e0f1ff'}} >

            
            <Box m="auto" sx={{ //inner box where the text box goes
                padding: 2.5,
                borderRadius: '1px',
                boxShadow:1,
                border: 1, 
                borderColor: "rgba(0,0,0,.5)",
                position: 'relative',
                //left: 40,
                top: "4%",
                width:"87.5%", height:"75%",
                bgcolor: '#e6f0f7'}}>


                <Box sx ={{ //box for the title
                    position: "relative",
                    width:"100%", height:"10%",
                    bgcolor:"#e6f0f7",
                    display:"flex",
                    borderBottom:1}}>
                        
                <AccountCircleIcon sx={{position:'relative', left:"95%", top:"5%"}}/>


                <Typography variant = "h4">
                    {/* {currentTitle} */}
                    {post.post_title}
                </Typography>

                <Typography variant= "h5" sx={{position:'relative', left:"75%"}}>
                    {/* {userName} */}
                    {post.author}
                </Typography>

                

                
                
                </Box>

                <Box sx ={{ // actual box for text
                    position: "relative",
                    top:"2%",
                    width:"100%", height:"80%",
                    bgcolor:"#e6f0f7",}}>

                <Typography variant = "body1">
                    {currentText}
                </Typography>
                </Box>

            </Box>


            <Stack
            position="relative"
            top="5%" 
            direction="row"
            justifyContent="center"
            alignItems="flex-end"
            spacing={4}>
                
                <Button sx={changeButtonStyle}>
                    Add note
                </Button>

                <Button sx={changeButtonStyle}>
                    Delete
                </Button>

                <Button sx={changeButtonStyle}>
                    Change
                </Button>
            

            </Stack>

        </Box>
        </Container>

        </div>

    );
}

// Post.propTypes = {
//     post: PropTypes.object.isRequired
// };

export default Post;