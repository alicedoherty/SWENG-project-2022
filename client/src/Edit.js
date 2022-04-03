import React, { Component } from 'react'
import { useParams } from 'react-router';

import Container from '@mui/material/Container'
import Header from './Header'
import Paper from '@mui/material/Paper'
import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button'
import Stack from '@mui/material/Stack';
import PropTypes from 'prop-types';


class Edit extends Component {
  state = {
    id: null,
    title: null,
    author: null,
    content: null,
  };

  componentDidMount() {
    // Sets state id to the id of the post being edited
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
    return (
      <div className="Create">
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
                onChange={(e) => {
                  // Reads in title
                  this.state.title = e.target.value
                }}
              />
              <TextField
                id="post-author"
                label="Author"
                variant="standard"
                onChange={(e) => {
                  // Reads in author
                  this.state.author = e.target.value
                }}
              />
              <TextField multiline rows={15} sx={{ marginTop: 2 }}
                id="post-content"
                label="Content"
                fullWidth
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
                    this.createUserAndPost(this.state.id, this.state.author, this.state.content, this.state.title);
                  }}>
                  Edit Post
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
  web3: PropTypes.object,
  accounts: PropTypes.array,
  contract: PropTypes.object
};

Edit.defaultProps = {
  web3: null,
  accounts: [],
  contract: null
};

export default (props) => (
  <Edit
    {...props}
    params={useParams()}
  />
);