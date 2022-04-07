import React, { Component, useState } from 'react'
import { useParams } from 'react-router';

import Container from '@mui/material/Container'
import Header from './Header'
import Paper from '@mui/material/Paper'
import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button'
import Stack from '@mui/material/Stack';
import PropTypes from 'prop-types';
import {Link} from "react-router-dom";
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'



// title saying editing: x
// display text of the latest post you just clicked: x
//be able to edit the content: x


// bug
// need to chnage something in all of the fields

// :() emoticon 
class Edit extends Component {
  state = {
    id: null,
    title: null,
    author: null,
    content: null,
  };


  constructor(props) {
    super(props);

    const { id } = this.props.params;
    this.state.id = id;
  }

  createUserAndPost(id, user, text, title) {
    const accounts = this.props.accounts;
    const contract = this.props.contract;

    var today = new Date();
    var date = String(today.getDate()) + '/' + String(today.getMonth() + 1) + '/' + String(today.getFullYear());

    contract.methods.editPost(id, title, user, text, date).send({ from: accounts[0] });
  }

  render() {
    var redid = 0;
    if (!this.props.web3) {
      return <div>Loading Web3, accounts, and contract...</div>;
    }

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
    }

    const post = this.props.postData[this.state.id];
    const latestPost = post.postVersions[post.postVersions.length - 1];

    this.state.title=latestPost.post_title;   //initialise this.variable to match what will be in the field, if user changes values in the field then these variables will be updated
    this.state.author=latestPost.author;      
    this.state.content=latestPost.post_text;   
                        
    return (
      <div className="Edit">
        <Container maxWidth="xs">
          <Header />
          <Paper elevation={1} square sx={{
            width: 600,
            marginTop: 10,
            backgroundColor: "#ecf3ff",
            position: "fixed",
            left: "30%",
            top: "5%"
          }}>
            <Container disableGutters sx={{ padding: 2 }}>
              <TextField
                id="post-title"
                label="Title"
                variant="standard"
                defaultValue={latestPost.post_title}
                onChange={(e) => {
                  // Reads in title
                  this.state.title = e.target.value;
                  
                  // this.state.title = latestPost.post_title;
                  // if (e.target.value ==  null) {
                  //   this.state.title = latestPost.post_title
                  // } else {
                  //   this.state.title = e.target.value
                  // }
                }}
                />
              
                <TextField
                  id="post-author"
                  label="Author"
                  variant="standard"
                  defaultValue={latestPost.author}
                  onChange={(e) => {
                    // Reads in author
                    this.state.author = e.target.value
                  }}
              />
              <Box sx={{ //outer box containing the text box
                borderRadius: '2px',
                boxShadow: 1,
                border: 1, 
                borderColor: "#1c3664",
                position: 'absolute',
                left: "-44%",
                top: "0%",
                width:"35%", height:"10%",
                bgcolor: '#f7faff'}} >

                
                <Box  sx ={{
                  position: "relative",
                  top:8, left: 8,
                  width:1000, height:10,
                  //bgcolor:"#ecf3ff",
                  color:"#1c3564",
               }}>
                
                  <Typography variant = "h4">
                    {'Editing Post:'}
                  </Typography>
                </Box>
              </Box>

                <TextField multiline rows={15} sx={{ marginTop: 2 }}
                  id="post-content"
                  label="Content"
                  fullWidth
                  defaultValue={latestPost.post_text}
                  onChange={(e) => {
                    // Reads in text content
                    this.state.content = e.target.value
                  }}
              />
              <Stack
                position="relative"
                mt="1%"
                mb="3%"
                direction="row"
                justifyContent="center">
                <Button variant="contained" sx={changeButtonStyle} 
                  onClick={(e) => {
                    e.preventDefault();
                    redid = this.state.id;
                    if(this.state.author==latestPost.author && this.state.content==latestPost.post_text && this.state.title == latestPost.post_title){      //prevent user from being charged for edit without actually making any changes
                      //do nothing
                      console.log("no change");
                    }
                    else{
                      this.createUserAndPost(this.state.id, this.state.author, this.state.content, this.state.title);
                    }
                  }}>
                  <Link to={"/"} style = {{color: '#f37026', textDecoration: 'none'}}>Post</Link>
                  {/*<Link to={`/posts/${redid}`} style = {{color: '#f37026', textDecoration: 'none'}}>Edit Post</Link>*/}
                </Button>
              </Stack>
            </Container>
          </Paper>
        </Container>
      </div>
    );
  }
}

Edit.propTypes = {
  web3: PropTypes.object.isRequired,
  accounts: PropTypes.array.isRequired,
  contract: PropTypes.object.isRequired,
  postData: PropTypes.arrayOf(PropTypes.object).isRequired
};

Edit.defaultProps = {
  web3: null,
  accounts: [],
  contract: null,
  postData: []
};

export default (props) => (
  <Edit
    {...props}
    params={useParams()}
  />
);