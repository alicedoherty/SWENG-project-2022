import React from 'react';
import Container from '@mui/material/Container'
import Header from './Header'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import Stack from '@mui/material/Stack';
import Link from '@mui/material/Link'
import "./index.css"
import PropTypes from 'prop-types';

function Home(props) {
    let {
        postData
    } = props;

    const changeButtonStyle = { // button styles for buttons under the text box
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
    }

    const buttonLinkStyle = {
        color: "#f37026",
        fontSize: 16,
        '&:hover': {
          color: "#f37026",
        },
      }

    return (
        <div className='Home'>
            <Container maxWidth="xs">
                <Header />
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
                    width: "50%", height: "87%",
                    bgcolor: '#f7faff'
                }} >


                    <Box m="auto" sx={{ //inner box where the text box goes
                        padding: 2.5,
                        borderRadius: '2px',
                        boxShadow: 1,
                        border: 1,
                        borderColor: "rgba(28, 54, 100, .4)",
                        position: 'relative',
                        // left: 40,
                        // top: 30,
                        mt: "4%",
                        width: "83.5%", height: "35%",
                        bgcolor: '#ecf3ff'
                    }}>


                        <Box sx={{ //box for the title
                            position: "relative",
                            width: "100%", height: "20%",
                            bgcolor: "#ecf3ff",
                            left: 0,
                            top: -10,
                            borderBottom: 1
                        }}>
                            <Typography variant="h4">
                                {postData[0].postVersions[0].post_title}
                            </Typography>
                        </Box>

                        <Box sx={{ // actual box for text
                            position: "relative",
                            top: 10,
                            width: "100%", height: "80%",
                            bgcolor: "#ecf3ff",
                        }}>

                            <Typography variant="body1">
                                {/* {currentText} */}
                                {postData[0].postVersions[0].post_text}
                            </Typography>
                        </Box>
                    </Box>

                    <Box m="auto" sx={{ //inner box where the text box goes
                        padding: 2.5,
                        borderRadius: '2px',
                        boxShadow: 1,
                        border: 1,
                        borderColor: "rgba(28, 54, 100, .4)",
                        position: 'relative',
                        // left: 40,
                        // top: 30,
                        mt: "4%",
                        width: "83.5%", height: "35%",
                        bgcolor: '#ecf3ff'
                    }}>


                        <Box sx={{ //box for the title
                            position: "relative",
                            width: "100%", height: "20%",
                            bgcolor: "#ecf3ff",
                            left: 0,
                            top: -10,
                            borderBottom: 1
                        }}>
                            <Typography variant="h4">
                                {postData[1].postVersions[0].post_title}
                            </Typography>
                        </Box>

                        <Box sx={{ // actual box for text
                            position: "relative",
                            top: 10,
                            width: "100%", height: "80%",
                            bgcolor: "#ecf3ff",
                        }}>

                            <Typography variant="body1">
                                {postData[1].postVersions[0].post_text}
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
                            <Link underline = "none" href="/search" sx={buttonLinkStyle}>   
                                View All
                            </Link>
                        </Button>
                    </Stack>
                </Box>

                {/* Recently viewed box */}
                <Box sx={{ //outer box for the recently viewed section
                    borderRadius: '4px',
                    boxShadow: 1,
                    border: 1,
                    borderColor: "#1c3664",
                    position: 'absolute',
                    left: "60%",
                    top: "10%",
                    width: "35%", height: "42%",
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
                        top: "6%",
                        width: "83.5%", height: "70%",
                        bgcolor: '#ecf3ff'
                    }}>


                        <Box sx={{ //box for the title
                            position: "relative",
                            width: "100%", height: "20%",
                            left: 0,
                            top: -10,
                            borderBottom: 1
                        }}>
                            <Typography variant="h4">
                                {"Featured: "} {postData[2].postVersions[0].post_title}
                            </Typography>
                        </Box>

                        <Box sx={{ // actual box for text
                            position: "relative",
                            top: 10,
                            width: "100%", height: "40%"
                        }}>

                            <Typography variant="body1">
                                {postData[2].postVersions[0].post_text}
                            </Typography>
                        </Box>


                    </Box>
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
                post_title: "Blockchain",
                post_text: "A blockchain is a distributed database that is shared among the nodes of a computer network. As a database, a blockchain stores information electronically in digital format.",
                date: "01/01/01",
            }
        ]
    },
    {
        id: 1,
        postVersions: [
            {
                post_version_id : 0,
                author: "Ben Murphy",
                post_title:"Trinity College Dublin",
                post_text: `Trinity College (Irish: Coláiste na Tríonóide), officially The Provost, Fellows, Foundation Scholars and the other members of Board, 
                of the College of the Holy and Undivided Trinity of Queen Elizabeth near Dublin,
                is the sole constituent college of the University of Dublin, a research university in Dublin, Ireland. 
                Queen Elizabeth I founded the college in 1592 as "the mother of a university" that was modelled after the collegiate universities of Oxford and Cambridge, 
                but unlike these affiliated institutions, only one college was ever established.`,
                date: "12/09/21",
            }
        ]
    },
    {
        id: 3,
        postVersions: [
            {
                post_version_id : 0,
                author: "Jake Frankenfield",
                post_title:"What is BitCoin?",
                post_text: `Bitcoin is a decentralized digital currency created in January 2009.
                It follows the ideas set out in a white paper by the mysterious and pseudonymous Satoshi Nakamoto. `,
                date: "17/01/22",
            }
        ]
    }]
};

export default Home;
