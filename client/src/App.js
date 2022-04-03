import React, { Component } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import "./App.css";

import Home from "./Home"
import Create from "./Create"
import Post from "./Post";
import Search from "./Search";
import Edit from "./Edit";

import PublishContentContract from "./contracts/PublishContent.json"
import getWeb3 from "./getWeb3";


class App extends Component {
  state = {
    web3: null,
    accounts: null,
    contract: null,
    postData: [],
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
      this.setState({ web3, accounts, contract: instance }, this.loadData);
    } catch (error) {
      // Catch any errors for any of the above operations.
      alert(
        `Failed to load web3, accounts, or contract. Check console for details.`,
      );
      console.error(error);
    }
  };

  // Helper function to populate blockchain with sample data - not currently used
  createTestData = async () => {
    const { accounts, contract } = this.state;

    // Create test posts
    await contract.methods.createPost("Cool Title!1.1", "John Doe1.1", "Hello World!1.1", "01/01/2022").send({ from: accounts[0] });
    await contract.methods.createPost("Cool Title!2.1", "John Doe2.1", "Hello World!2.1", "01/01/2022").send({ from: accounts[0] });

    // Create test edits to posts
    await contract.methods.editPost(0, "Cool Title!1.2", "John Doe1.2", "Hello World!1.2", "01/01/2022").send({ from: accounts[0] });
    await contract.methods.editPost(1, "Cool Title!2.2", "John Doe2.2", "Hello World!2.2", "01/01/2022").send({ from: accounts[0] });
    await contract.methods.editPost(1, "Cool Title!2.3", "John Doe2.3", "Hello World!2.3", "01/01/2022").send({ from: accounts[0] });
  }

  // Load data from blockchain and populate 'postData' state variable with the data
  loadData = async () => {
    const contract = this.state.contract;
    let postData = this.state.postData;

    let postCount = await contract.methods.getPostCount().call();

    for (let x = 0; x < postCount; x++) {
      let postVersionsCount = await contract.methods.getPostVersionsCount(x).call();

      var postVersions = [];
      for (let y = 0; y < postVersionsCount; y++) {
        let postVersionId = await contract.methods.getPostVersionId(x, y).call();
        let author = await contract.methods.readAuthor(postVersionId).call();
        let title = await contract.methods.readTitle(postVersionId).call();
        let text = await contract.methods.readText(postVersionId).call();
        let date = await contract.methods.readDate(postVersionId).call();

        // Note: above postVersionId refers to the position of the postVersion in PostVersion[] postVersions in PublishContent.sol
        // post_version_id in the JSON object refers to version of that specific post (i.e 0, 1, 2, ...)
        var postVersion = {
          "post_version_id": y,
          "author": author,
          "post_title": title,
          "post_text": text,
          "date": date,
        }
        postVersions.push(postVersion);
      }

      var post = {
        "id": x,
        "postVersions": postVersions
      }

      postData.push(post);
      this.setState({ postData: postData });
      //console.log(this.state.postData);
    }
  }

  render() {
    if (!this.state.web3) {
      return <div>Loading Web3, accounts, and contract...</div>;
    }
    return (
      <Router>
        <Routes>
          <Route exact path="/" element={<Home postData={undefined} />} />
          <Route exact path="/create" element={<Create web3={this.state.web3} accounts={this.state.accounts} contract={this.state.contract} />} />
          <Route exact path="/posts/:id" element={<Post postData={this.state.postData} />} />
          <Route exact path="/edit/:id" element={<Edit web3={this.state.web3} accounts={this.state.accounts} contract={this.state.contract} />} />
          <Route exact path="/search" element={<Search postData={this.state.postData} />} />
          <Route exact path="/test" element={<App />} />
        </Routes>
      </Router>
    );
  }
}

export default App;