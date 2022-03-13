import React, { useState, Component, createContext } from 'react'

import PublishContentContract from "./contracts/PublishContent.json"
import getWeb3 from "./getWeb3";

import Container from '@mui/material/Container'
import Header from './Header'
import Paper from '@mui/material/Paper'
import Typography from '@mui/material/Typography'
import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button'

class Create extends Component {
  state = { web3: null,
    accounts: null,
    contract: null,
    authorName: null,
    blogText: null,
    blogTitle: null,
    inputName: null,
    inputText: null,
    inputTitle: null
  };

/*function writePostToSystem(post){
      console.log(post)
}
 */
componentDidMount = async () => {
  try {
    // Get network provider and web3 instance.
    const web3 = await getWeb3();

    // Use web3 to get the user's accounts.
    const accounts = await web3.eth.getAccounts();

    // Get the contract instance.
    const networkId = await web3.eth.net.getId();
    const deployedNetwork = PublishContentContract.networks[networkId];
    
    const instance = new web3.eth.Contract(
      PublishContentContract.abi,
      deployedNetwork && deployedNetwork.address,
    );

    // Set web3, accounts, and contract to the state, and then proceed with an
    // example of interacting with the contract's methods.
    this.setState({ web3, accounts, contract: instance },this.runExample);
    
  } catch (error) {
    // Catch any errors for any of the above operations.
    alert(
      `Failed to load web3, accounts, or contract. Check console for details.`,
    );
    console.error(error);
  }
};

runExample = async () => {                                                                                                        //leaving in hello world example for the moment but this can be removed
  const { accounts, contract } = this.state;

  // await contract.methods.create("John Doe", "Hello World!", "Post Title :)").send({ from: accounts[0] });
  await contract.methods.createPost("Hello World!", "Cool Title!", "01/01/2022", 0).send({ from: accounts[0] });
  await contract.methods.create(0, "John Doe", [0]).send({ from: accounts[0] });

  // // Get the value from the contract to prove it worked.
  const name = await contract.methods.readName(0).call();
  const text = await contract.methods.readText(0).call();
  const title = await contract.methods.readPostTitle(0).call();

  // // Update state with the result.
  this.setState({ authorName: name, blogText: text, blogTitle : title});
};

createUserAndPost(user, text, title) {
  const { accounts, contract } = this.state;
  //contract.methods.create(user, text, title).send({ from: accounts[0] });
  contract.methods.createPost(text, title, "01/01/2022", 1).send({ from: accounts[0] });
  contract.methods.create(1, user, [1]).send({ from: accounts[0] });

  //this.renderData();
}

renderData = async () => {
  const { contract } = this.state;

  //const latestUserId = await contract.methods.getNextId().call();
  const name = await contract.methods.readName(1).call();
  const text = await contract.methods.readText(1).call();
  const title = await contract.methods.readPostTitle(1).call();

  // Update state with the result.
  this.setState({ inputName: name, inputText: text, inputTitle : title });
}
    
render() {
  if (!this.state.web3) {
    return <div>Loading Web3, accounts, and contract...</div>;
  }
    this.state.title=""
    this.state.author="Joe Soap"                                         //hardcoded user name
    this.state.content=""

    return(
      <div className = "Create">
        <Container maxWidth="xs">
          <Header/>
          <Paper elevation={1} square sx={{width:600,marginTop:10, backgroundColor:"lightblue", position:"fixed", left:40, top:15}}>
            <Container disableGutters sx={{padding: 2}}>
              <TextField
                id="post-title"
                label="Title"
                variant="standard"
                onChange={(e) => {
                  this.state.title = e.target.value                                                 //reads in title
                  //let cont = post.content
                  //setPost({id:ids, title:tit, author:auth, content:cont})
                }}
              />
              <TextField multiline rows={15} sx={{marginTop:2}}
                id="post-content"
                label="Content"
                fullWidth
                onChange={(e) => {
                  //let tit = post.title  
                  this.state.content = e.target.value                                               //reads in text content
                  //setPost({id:ids, title:tit, author:auth, content:cont})

                }}
              />
              <Button variant="contained"  sx={{marginTop:2}} 
                onClick={(e)=>{
                  //writePostToSystem(post)
                  e.preventDefault();
                  this.createUserAndPost(this.state.author, this.state.content, this.state.title);
                  this.renderData();
                }}>
                Post
              </Button>
            </Container>
          </Paper>
        </Container>

      </div>
      
    );
  }
}

export default Create;