import React, { Component, createContext } from "react";
import PublishContentContract from "./contracts/PublishContent.json"
import getWeb3 from "./getWeb3";

import "./App.css";

class App extends Component {
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
      this.setState({ web3, accounts, contract: instance }, this.runExample);
      
    } catch (error) {
      // Catch any errors for any of the above operations.
      alert(
        `Failed to load web3, accounts, or contract. Check console for details.`,
      );
      console.error(error);
    }
  };

  runExample = async () => {
    const { accounts, contract } = this.state;

    await contract.methods.create("John Doe", "Hello World!", "Post Title :)").send({ from: accounts[0] });

    // // Get the value from the contract to prove it worked.
    const name = await contract.methods.readName(1).call();
    const text = await contract.methods.readtext(1).call();
    const title = await contract.methods.readPost(1).call();

    // // Update state with the result.
    this.setState({ authorName: name, blogText: text, blogTitle : title});
  };

  createUserAndPost(user, text, title) {
    const { accounts, contract } = this.state;
    contract.methods.create(user, text, title).send({ from: accounts[0] });
    //this.renderData();
  }

  renderData = async () => {
    const { contract } = this.state;

    const latestUserId = await contract.methods.getNextId().call();
    const name = await contract.methods.readName(latestUserId-1).call();
    const text = await contract.methods.readtext(latestUserId-1).call();
    const title = await contract.methods.readPost(latestUserId-1).call();

    // Update state with the result.
    this.setState({ inputName: name, inputText: text, inputTitle : title });
  }

  render() {
    if (!this.state.web3) {
      return <div>Loading Web3, accounts, and contract...</div>;
    }
    return (
      <div className="App">
        <h1>Example Blog Post</h1>
        <h3>Expected Values</h3>
        <p>
          Author Name: John Doe
          <br />
          Blog Post: Hello World!
          <br />
          Blog Title: Cool Title!
        </p>

        <h3>Values Retrieved from Blockchain</h3>
        <div>Stored Author Name: {this.state.authorName}</div>
        <div>Stored Blog Post: {this.state.blogText}</div>
        <div>Stored Blog Title: {this.state.blogTitle}</div>

        <br />

        <h3>User Inputted Post</h3>
        <form onSubmit={(event) => {
          event.preventDefault();
          this.createUserAndPost(this.user.value, this.text.value, this.title.value);
        }}>
          <input 
            id="newUser"
            ref={(input) => {
              this.user = input;
            }}
            type="text"
            placeholder="Username" 
            equired />
          <br />
          <input
            id="newText"
            type="text"
            ref={(input) => {
              this.text = input;
            }}
            placeholder="Text"
            required />
          <br />
          <input
            id="newTitle"
            type="title"
            ref={(input) => {
              this.title = input;
            }}
            placeholder="Title"
            required />

          <br />
          <input type="submit" hidden="" />

          <br />

          <h3>Values Retrieved from Blockchain</h3>
          <div>Stored Author Name: {this.state.inputName}</div>
          <div>Stored Blog Post: {this.state.inputText}</div>
          <div>Stored Blog Title: {this.state.inputTitle}</div>
        </form>

        <br />

        <form onSubmit={(event) => {
          event.preventDefault();
          this.renderData();
        }}>
          <input type="submit" value="Get Post" />
        </form>
      </div>
    );
  }
}

export default App;
