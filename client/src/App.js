import React, { Component } from "react";
import SimpleStorageContract from "./contracts/SimpleStorage.json";
import PublishContentContract from "./contracts/PublishContent.json"
import getWeb3 from "./getWeb3";

import "./App.css";

class App extends Component {
  state = { storageValue: 0, web3: null, accounts: null, contract: null, authorName: null, blogText: null };

  componentDidMount = async () => {
    try {
      // Get network provider and web3 instance.
      const web3 = await getWeb3();

      // Use web3 to get the user's accounts.
      const accounts = await web3.eth.getAccounts();

      // this.setState({'account': accounts[0]});
      // Get the contract instance.
      const networkId = await web3.eth.net.getId();
      // const deployedNetwork = SimpleStorageContract.networks[networkId];
      const deployedNetwork = PublishContentContract.networks[networkId];
      
      if (deployedNetwork) {
        const instance = new web3.eth.Contract(
          //SimpleStorageContract.abi,
          PublishContentContract.abi,
          deployedNetwork && deployedNetwork.address,
        );
        // Set web3, accounts, and contract to the state, and then proceed with an
      // example of interacting with the contract's methods.
      this.setState({ web3, accounts, contract: instance }, this.runExample);
      } else {
        window.alert("Error");
      }


      
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

    // Stores a given value, 5 by default.
    await contract.methods.create("John Doe", "Hello World!").send({ from: accounts[0] });

    // Get the value from the contract to prove it worked.
    const name = await contract.methods.readName(1).call();
    const text = await contract.methods.readText(1).call();

    // Update state with the result.
    this.setState({ authorName: name, blogText: text });
  };

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
        </p>

        <h3>Values Retrieved from Blockchain</h3>
        <div>Stored Author Name: {this.state.authorName}</div>
        <div>Stored Blog Post: {this.state.blogText}</div>
      </div>
    );
  }
}

export default App;
