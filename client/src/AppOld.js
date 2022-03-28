// Old App.js file used for testing blockchain functions - not currently used

import React, { Component, createContext } from "react";
import PublishContentContract from "./contracts/PublishContent.json"
import getWeb3 from "./getWeb3";

import "./App.css";

class App extends Component {
  state = {
    web3: null,
    accounts: null,
    contract: null,
    authorName: null,
    blogText: null,
    blogTitle: null,
    authorName1: null,
    blogText1: null,
    blogTitle1: null,
    authorName2: null,
    blogText2: null,
    blogTitle2: null,
    authorName3: null,
    blogText3: null,
    blogTitle3: null,
    // inputName: null,
    // inputText: null,
    // inputTitle: null
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

    // await contract.methods.create("John Doe", "Hello World!", "Post Title :)").send({ from: accounts[0] });
    //await contract.methods.createPost("Hello World!", "Cool Title!", "01/01/2022", 0).send({ from: accounts[0] });
    //await contract.methods.create(0, "John Doe", [0]).send({ from: accounts[0] });

    await contract.methods.createPost("Cool Title!1.1", "John Doe1.1", "Hello World!1.1", "01/01/2022").send({ from: accounts[0] });
    await contract.methods.editPost(0, "Cool Title!1.2", "John Doe1.2", "Hello World!1.2", "01/01/2022").send({ from: accounts[0] });
    await contract.methods.createPost("Cool Title!2.1", "John Doe2.1", "Hello World!2.1", "01/01/2022").send({ from: accounts[0] });
    await contract.methods.editPost(1, "Cool Title!2.2", "John Doe2.2", "Hello World!2.2", "01/01/2022").send({ from: accounts[0] });
    // // Get the value from the contract to prove it worked.
    const postZeroVersionCount = await contract.methods.getPostVersions(0).call();
    const postOneVersionCount = await contract.methods.getPostVersionsCount(1).call();

    //const id = postZeroVersions;
    // const name = await contract.methods.readAuthor(id).call();
    // const title = await contract.methods.readPostTitle(id).call();
    // const text = await contract.methods.readPostText(id).call();
    // // // Update state with the result.
    //this.setState({ authorName: name, blogText: text, blogTitle : title});
    this.setState({ authorName: postZeroVersionCount });

    // const name1 = await contract.methods.readAuthor(postZeroVersions[1].parseInt()).call();
    // const title1 = await contract.methods.readPostTitle(postZeroVersions[1].parseInt()).call();
    // const text1 = await contract.methods.readPostText(postZeroVersions[1].parseInt()).call();

    // // // // Update state with the result.
    // this.setState({ authorName1: name1, blogText1: text1, blogTitle1 : title1});

  };

  // createUserAndPost(user, text, title) {
  //   const { accounts, contract } = this.state;
  //   //contract.methods.create(user, text, title).send({ from: accounts[0] });
  //   contract.methods.createPost(text, title, "01/01/2022", 1).send({ from: accounts[0] });
  //   contract.methods.create(1, user, [1]).send({ from: accounts[0] });

  //   //this.renderData();
  // }

  // renderData = async () => {
  //   const { contract } = this.state;

  //   //const latestUserId = await contract.methods.getNextId().call();
  //   const name = await contract.methods.readName(1).call();
  //   const text = await contract.methods.readText(1).call();
  //   const title = await contract.methods.readPostTitle(1).call();

  //   // Update state with the result.
  //   this.setState({ inputName: name, inputText: text, inputTitle : title });
  // }

  render() {
    if (!this.state.web3) {
      return <div>Loading Web3, accounts, and contract...</div>;
    }
    return (
      <div className="App">
        <h1>Example Blog Post 1.1</h1>
        <h3>Expected Values</h3>
        <p>
          Author Name: John Doe1.1
          <br />
          Blog Post: Hello World!1.1
          <br />
          Blog Title: Cool Title!1.1
        </p>

        <h3>Values Retrieved from Blockchain</h3>
        <div>Stored Author Name: {this.state.authorName}</div>
        <div>Stored Blog Post: {this.state.blogText}</div>
        <div>Stored Blog Title: {this.state.blogTitle}</div>

        <br />

        <h1>Example Blog Post 1.2</h1>
        <h3>Expected Values</h3>
        <p>
          Author Name: John Doe1.2
          <br />
          Blog Post: Hello World!1.2
          <br />
          Blog Title: Cool Title!1.2
        </p>

        <h3>Values Retrieved from Blockchain</h3>
        <div>Stored Author Name: {this.state.authorName1}</div>
        <div>Stored Blog Post: {this.state.blogText1}</div>
        <div>Stored Blog Title: {this.state.blogTitle1}</div>

        <br />

        <h1>Example Blog Post 2.1</h1>
        <h3>Expected Values</h3>
        <p>
          Author Name: John Doe2.1
          <br />
          Blog Post: Hello World!2.1
          <br />
          Blog Title: Cool Title!2.1
        </p>

        <h3>Values Retrieved from Blockchain</h3>
        <div>Stored Author Name: {this.state.authorName2}</div>
        <div>Stored Blog Post: {this.state.blogText2}</div>
        <div>Stored Blog Title: {this.state.blogTitle2}</div>

        <br />

        <h1>Example Blog Post 2.2</h1>
        <h3>Expected Values</h3>
        <p>
          Author Name: John Doe2.2
          <br />
          Blog Post: Hello World!2.2
          <br />
          Blog Title: Cool Title!2.2
        </p>

        <h3>Values Retrieved from Blockchain</h3>
        <div>Stored Author Name: {this.state.authorName3}</div>
        <div>Stored Blog Post: {this.state.blogText3}</div>
        <div>Stored Blog Title: {this.state.blogTitle3}</div>

        <br />


        {/* <h3>User Inputted Post</h3>
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
        </form> */}
      </div>
    );
  }
}

export default App;
