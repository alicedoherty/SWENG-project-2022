import React, { useState } from 'react';
import Container from '@mui/material/Container'
import Header from './Header'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import AccountCircleIcon from '@mui/icons-material/AccountCircle'
import Stack from '@mui/material/Stack'
import { useParams } from 'react-router';
<<<<<<< HEAD
import post_data from "./data/post_data";
import AuditCard from './AuditCard';
import { List } from '@mui/material';

=======
import { Link } from 'react-router-dom';
>>>>>>> ddb79d310cb791f1c1b77731139818500cc72cc7

function Post(props) {
    let {
        postData
    } = props;

    const { id } = useParams();
    const post = postData[id];

    // Button styles for buttons under the text box
    const changeButtonStyle = {
        position: "relative",
        fontSize: 18,
        border: 1,
        borderColor: "rgba(28, 54, 100, .6)",
        color: "#f37026",
        bgcolor: "#ecf3ff",
        mt: "2%",
        '&:hover': {
            backgroundColor: "#e6f0f7"
        }
<<<<<<< HEAD
      }
    
    //hook to change the text inside box
    
    const [currentTitle, setTitle] = useState(post.postVersions[post.postVersions.length-1].post_title)
    const [currentText, setText] = useState(post.postVersions[post.postVersions.length-1].post_text)
    const [currentAuthor, setAuthor] = useState(post.postVersions[post.postVersions.length-1].author)

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
            borderColor: "#1c3664",
            position: 'absolute',
            left:"70%", top:"10vh",
            width:"20%", height:"60vh",
            bgcolor: '#f7faff'}} >

                <Typography variant = "h5" align = "center" sx={{position:'relative', top:"1%", padding:2, color:"#1c3664"}}>
                    Previous Versions
                </Typography>

                <Container>
                <Stack spacing={3}>
                    {
                        post.postVersions.map(post => 
                            <Button sx={{changeButtonStyle}} onClick={() => [setText(post.post_text), setAuthor(post.author), setTitle(post.post_title)]} >
                                version {post.post_version_id}
                            </Button>)
                    }
                </Stack>
                </Container>
        </Box>
        
        <Box sx={{ //outer box containing the text box
            borderRadius: '4px',
            boxShadow:1,
            border: 1, 
            borderColor: "#1c3664",
            position: 'relative',
            left: "5%",
            top: "10vh",
            width:"60%", height:"80vh",
            bgcolor: '#f7faff'}} >

            
            <Box m="auto" sx={{ //inner box where the text box goes
                padding: 2.5,
                borderRadius: '2px',
                boxShadow:1,
                border: 1, 
                borderColor: "rgba(28, 54, 100, .4)",
                position: 'relative',
                //left: 40,
                top: "4%",
                width:"87.5%", height:"75%",
                bgcolor: '#ecf3ff'}}>


                <Box sx ={{ //box for the title
                    position: "relative",
                    width:"100%", height:"10%",
                    borderBottom:1}}>
                        
                    
                    <Stack // stack for aligning title, author and user icon 
                    direction="row"
                    justifyContent="space-between"
                    alignItems="center"
                    spacing={2}>
                        <Typography variant = "h4" sx={{color:"#1c3664"}}>
                        {/* {currentTitle} */}
                        {currentTitle}
                        </Typography>
                        <Typography variant= "h5" sx={{align:"justify", color:"#1c3664"}}>
                            {/* {userName} */}
                            {currentAuthor}
                            <AccountCircleIcon sx={{marginLeft:2}}/>
                        </Typography>
                    </Stack>
                   
                </Box>
=======
    }
>>>>>>> ddb79d310cb791f1c1b77731139818500cc72cc7

    // Hook to change the text inside box
    // Will display the most recent version of the post (i.e the last object in the postVersions array)
    const [currentTitle, setTitle] = useState(post.postVersions[post.postVersions.length - 1].post_title)
    const [currentText, setText] = useState(post.postVersions[post.postVersions.length - 1].post_text)
    const [currentAuthor, setAuthor] = useState(post.postVersions[post.postVersions.length - 1].author)

    return (
        <div className='Post'>
            <Container maxWidth="xs">
                <Header />
            </Container>

            <Container maxWidth="100%" height="100%">

                <Box sx={{ //box for buttons
                    borderRadius: '4px',
                    boxShadow: 1,
                    border: 1,
                    borderColor: "#1c3664",
                    position: 'absolute',
                    left: "70%", top: "10vh",
                    width: "20%", height: "60vh",
                    bgcolor: '#f7faff'
                }} >

                    <Typography variant="h5" align="center" sx={{ position: 'relative', top: "1%", padding: 2, color: "#1c3664" }}>
                        Previous Versions
                    </Typography>

                    <Container>
                        <Stack spacing={4}>
                            <Button variant="outlined" sx={changeButtonStyle} onClick={() => [setText(post.postVersions[post.postVersions.length - 1].post_text),
                            setAuthor(post.postVersions[post.postVersions.length - 1].author), setTitle(post.postVersions[post.postVersions.length - 1].post_title)]}>
                                Current Version
                            </Button>
                            {/* Previous version button currently sets post to the first version of the post (first entry in postVersions[]) */}
                            <Button sx={changeButtonStyle} onClick={() => [setText(post.postVersions[0].post_text), setAuthor(post.postVersions[0].author), setTitle(post.postVersions[0].post_title)]}>
                                Previous Version
                            </Button>

                        </Stack>
                    </Container>
                </Box>

                <Box sx={{ //outer box containing the text box
                    borderRadius: '4px',
                    boxShadow: 1,
                    border: 1,
                    borderColor: "#1c3664",
                    position: 'relative',
                    left: "5%",
                    top: "10vh",
                    width: "60%", height: "80vh",
                    bgcolor: '#f7faff'
                }} >


                    <Box m="auto" sx={{ //inner box where the text box goes
                        padding: 2.5,
                        borderRadius: '2px',
                        boxShadow: 1,
                        border: 1,
                        borderColor: "rgba(28, 54, 100, .4)",
                        position: 'relative',
                        //left: 40,
                        top: "4%",
                        width: "87.5%", height: "75%",
                        bgcolor: '#ecf3ff'
                    }}>


                        <Box sx={{ //box for the title
                            position: "relative",
                            width: "100%", height: "10%",
                            borderBottom: 1
                        }}>


                            <Stack // stack for aligning title, author and user icon 
                                direction="row"
                                justifyContent="space-between"
                                alignItems="center"
                                spacing={2}>
                                <Typography variant="h4" sx={{ color: "#1c3664" }}>
                                    {/* {currentTitle} */}
                                    {currentTitle}
                                </Typography>
                                <Typography variant="h5" sx={{ align: "justify", color: "#1c3664" }}>
                                    {/* {userName} */}
                                    {currentAuthor}
                                    <AccountCircleIcon sx={{ marginLeft: 2 }} />
                                </Typography>
                            </Stack>

                        </Box>

                        <Box sx={{ // actual box for text
                            position: "relative",
                            top: "2%",
                            width: "100%", height: "80%",
                        }}>

                            <Typography variant="body1" sx={{ color: "#1c3664" }}>
                                {currentText}
                            </Typography>
                        </Box>

                    </Box>


                    <Stack // aligning buttons below text
                        position="relative"
                        top="5%"
                        direction="row"
                        justifyContent="center"
                        alignItems="flex-end"
                        spacing={4}>
                        <Button sx={changeButtonStyle} size="small">
                            {/* Links to edit page for that particular post (id is the id of the post) */}
                            <Link to={`/edit/${id}`}>Edit Post</Link>
                        </Button>

                    </Stack>

<<<<<<< HEAD
        </Box>

        <Container>
            <Box sx={{position:"relative", top:"100%", bgcolor: '#f7faff', border: 1, borderColor:"#1c3664", width:1000}}>
                <List sx={{maxHeight:"100%", overflow:"auto", padding:"10px"}}>
                    {post.postVersions.map(post => <AuditCard post={post}/>)}
                </List>
            </Box>    
        
        </Container>
        
        
        
        </Container>
        
=======
                </Box>
            </Container>
>>>>>>> ddb79d310cb791f1c1b77731139818500cc72cc7

        
        
        </div>

    );
}

Post.propTypes = {
    postData: PropTypes.arrayOf(PropTypes.object).isRequired
};

Post.defaultProps = {
    postData: []
};

export default Post;