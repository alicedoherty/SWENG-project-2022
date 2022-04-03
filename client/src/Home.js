import React, { useState } from 'react';
import Container from '@mui/material/Container'
import Header from './Header'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import Stack from '@mui/material/Stack';
import "./index.css"
import PropTypes from 'prop-types';

function Home(props) {
    let {
        postData
    } = props;

//constant strings for testing, will be replaced by appropriate data down the line
const defaultString = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
//const testingString = "According to all known laws of aviation, there is no way that a bee should be able to fly. Its wings are too small to get its fat little body off the ground. The bee, of course, flies anyway. Because bees don’t care what humans think is impossible."
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

console.log(postData);
console.log(postData[0]);
//console.log(postData[0].postVersions[0]);
//console.log(postData[0].postVersions.length);

// //hook to change the text inside box
//const [currentTitle, setTitle] = useState("Post")
//const [currentText, setText] = useState(defaultString)
//const [currentTitle, setTitle] = useState(postData[0].postVersions[0].post_title)
//const [currentText, setText] = useState(postData[0].postVersions[0].post_text)

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
                width:"50%", height:"87%",
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
                        {/* {currentTitle} */}
                        {postData[0].postVersions[0].post_title}
                    </Typography>
                    </Box>

                    <Box sx ={{ // actual box for text
                        position: "relative",
                        top:10,
                        width:"100%", height:"80%",
                        bgcolor:"#ecf3ff",}}>

                    <Typography variant = "body1">
                        {/* {currentText} */}
                        {postData[0].postVersions[0].post_text}
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
                        {/* {currentTitle} */}
                        {postData[0].postVersions[0].post_title}
                    </Typography>
                    </Box>

                    <Box sx ={{ // actual box for text
                        position: "relative",
                        top:10,
                        width:"100%", height:"80%",
                        bgcolor:"#ecf3ff",}}>

                    <Typography variant = "body1">
                        {/* {currentText} */}
                        {postData[0].postVersions[0].post_text}
                    </Typography>
                    </Box>
                </Box>
                        
                <Stack
                    position="relative"
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

        
        {/* Recently viewed box */}
        <Box sx={{ //outer box for the recently viewed section
            borderRadius: '4px',
            boxShadow:1,
            border: 1, 
            borderColor: "#1c3664",
            position: 'absolute',
            left:"60%",
            top: "10%",
            width:"35%", height:"42%",
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
                    {"Featured Post"}
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
                    mt="5%"
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

Home.propTypes = {
    postData: PropTypes.arrayOf(PropTypes.object).isRequired
};
  
Home.defaultProps = {
    postData: [{
        id: 0,
        postVersions: [
            {
                    post_version_id: 0,
                    author: "Adam Hayes",
                    post_title:"Blockchain",
                    post_text:"A blockchain is a distributed database that is shared among the nodes of a computer network. As a database, a blockchain stores information electronically in digital format.",
                    date: "01/01/01",
                    change_type: "Create"
            },
            {
                    post_version_id: 1,
                    author: "JeFreda R. Brown",
                    post_title: "Everything about Blockchain",
                    post_text: `A blockchain is a distributed database that is shared among the nodes of a computer network. 
                    As a database, a blockchain stores information electronically in digital format. 
                    Blockchains are best known for their crucial role in cryptocurrency systems, such as Bitcoin, for maintaining a secure and decentralized record of transactions. 
                    The innovation with a blockchain is that it guarantees the fidelity and security of a record of data and generates trust without the need for a trusted third party.`,
                    date: "02/01/01",
                    change_type: "Edit"
                    //text taken from https://www.investopedia.com/terms/b/blockchain.asp
            }
        ]
    }]
};

export default Home;
