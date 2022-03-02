
import React from 'react'
import Typography from '@mui/material/Typography'
import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import Button from '@mui/material/Button'
import Container from '@mui/material/Container'
import Link from '@mui/material/Link'
import AccountCircleIcon from '@mui/icons-material/AccountCircle'
import IconButton from '@mui/material/IconButton'


export default function Header(){

    const buttonLinkStyle = {
      color:"white",
      fontSize:12,
    }
    const buttonStyle = {
      '&:hover':{
        backgroundColor:"lightblue"
      }
    }

    return (
        <AppBar position="fixed" color="primary">
          <Toolbar>
            <Typography variant="h6">
              LOGOHEAR
            </Typography>
            <Container sx={{flexGrow:1}} maxWidth="md" >
              <Button color="primary" sx={buttonStyle}>
                <Link underline="none" href="/" sx={buttonLinkStyle}>
                  Home
                </Link>
              </Button>  
              <Button color="primary" sx={buttonStyle} >
                <Link underline="none" href="/create" sx={buttonLinkStyle}>
                  Create
                </Link>
              </Button>
              <Button color="primary" sx={buttonStyle}> 
                <Link underline="none" href="/search" sx={buttonLinkStyle}>
                  Search
                </Link>
              </Button>
              <Button color="primary" sx={buttonStyle}>
                <Link underline="none" href="/about-us" sx={buttonLinkStyle}>
                  About Us
                </Link>
              </Button>
              <Button color="primary" sx={{backgroundColor:"red", "&:hover":{backgroundColor:"gray"}}}>
                <Link underline="none" href="/test" sx={buttonLinkStyle} >
                  TEST!!
                </Link>
              </Button>
              <Button color="primary" sx={buttonStyle}>
                <Link underline="none" href="/post-page" sx={buttonLinkStyle}>
                  Post
                </Link>
              </Button>    
            </Container>
            <Typography variant="h7" > 
                Welcome User
            </Typography>
            <IconButton aria-label="user"  sx={{marginLeft:2}}>
              <AccountCircleIcon/>
            </IconButton>
          </Toolbar>
        </AppBar>
    );
}