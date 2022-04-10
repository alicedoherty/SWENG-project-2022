import React from 'react'
import Typography from '@mui/material/Typography'
import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import Button from '@mui/material/Button'
import Container from '@mui/material/Container'
import Link from '@mui/material/Link'
import AccountCircleIcon from '@mui/icons-material/AccountCircle'
import IconButton from '@mui/material/IconButton'
import Box from '@mui/material/Box'

export default function Header() {

  const buttonLinkStyle = {
    color: "#1c3564",
    fontSize: 14,
    '&:hover': {
      color: "#f37026",
    },
  }

  const buttonStyle = {
    '&:hover': {
      boxShadow: "none",
      backgroundColor: "transparent",
    },
  }

  return (
    <AppBar sx={{ bgcolor: "white" }} position="fixed" elevation={0}>
      <Toolbar>
        <Box
          component="img"
          sx={{
            width: 250,
          }}
          alt="Propylon Logo"
          src="../PropylonLogo.png"
        />

        <Container sx={{ flexGrow: 1 }} maxWidth="md" >
          <Button sx={buttonStyle}>
            <Link underline="none" href="/" sx={buttonLinkStyle}>
              Home
            </Link>
          </Button>

          <Button sx={buttonStyle}>
            <Link underline="none" href="/search" sx={buttonLinkStyle}>
              Search
            </Link>
          </Button>

          <Button sx={buttonStyle} >
            <Link underline="none" href="/create" sx={buttonLinkStyle}>
              Create Post
            </Link>
          </Button>
          
        </Container>
      </Toolbar>
    </AppBar>
  );
}