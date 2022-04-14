# Propylon - Blockchain Publishing System

## Project Description

Build a web-based application for authoring and publishing content, with published versions being persisted
on the blockchain for auditability and verification. Users of the system should be able to see the current
version of a piece of content (e.g. a blog post), validate it’s authenticity by comparing to a version stored
in the blockchain, and also view previous versions published to the blockchain. The blockchain should provide
a verifiable audit trail for all versions of a piece of content, so consumers can be sure it hasn’t been
tampered with or modified externally.

## Contributers

- Anastasiya Bogoslovskaya
- Steven Cataluna 
- Charles Christiansson  
- Mohamed Difallah  
- Alice Doherty  
- Conor Doherty  
- Alexander Sepelenco

## Dependencies

- [Node.js](https://nodejs.org/en/)
- [Truffle Suite](https://trufflesuite.com/)
  - Install with `npm install -g truffle`
- [Ganache](https://trufflesuite.com/ganache/index.html)
- [MetaMask](https://metamask.io/download/)
- [MUI](https://mui.com/)
  - Install with `npm install` since it is already in package.json

## Running the App

1. Install dependencies listed above

2. Run `npm install` (both within the main `SWENG-project-22` folder and in `client`) to install dependencies

3. Open Ganache and select "Quickstart" (see below for more notes on using Ganache)

- **Note:** you need to keep Ganache running while using the app, not just to compile the code

4. Start development console with

```
truffle develop
```

5. Compile and migrate smart contracts

```
compile
migrate
```

- **Note:** you can also run `migrate --reset` but this will reset all the data stored in the smart contract (basically clears the "database")

6. To run React app

```
cd client
npm run start
```

- At this point the React app will probably display the message: "Loading Web3, accounts, and contract..." (this is because the app is not yet connected to an account on the blockchain network)

7. On MetaMask connect to Ganache network
  - Add MetaMask as an extension to your browser
  - The first time you use it you will have to create an account
  - Locate the "Networks" menu at the top of the extension (by default it most likely is set to "Ethereum Mainnet")
    - Create new network with RPC URL "HTTP://127.0.0.1:7545" and Chain ID "1337"
    - Network Name can be anything you want and leave Currency Symbol blank
  - Open the "My Accounts" tab by clicking on the circle in the top right and select "Import Account"
    - The private key string is the private key of the **first** account on your Ganache network
    - To obtain this click on the "key" symbol at the far right of the first network shown on the "Accounts" page on Ganache
  - Switch to this new account when using the app

## Setting up Ganache
These steps are optional but will make your life easier if you are using the application more than once

1. After creating a new workspace (by selecting "Quickstart"), save it by pressing the "Save" button in the top right.
  - If you save the workspace you will not have to import a new account each time you use the application

2. Press the settings cog in top right, and press "Add Project" and select the `truffle-config.js` file from the main repo folder.

3. Click the "Contracts" tab and then "PublishContent" to see the data stored in the blockchain.

4. In the "Transactions" tab, you can click on a transaction and see the contract function calls, inputs, etc.

## Notes
- Boilerplate template used: https://github.com/truffle-box/react-box
- If the React app only displays: "Loading Web3, accounts, and contract..." this most likely means that the account being used in MetaMask is not correctly connected to your local Ganache network

## UI Screenshots
### Home Page
![Homepage](/images/home-page.png)

### Create Post Page
![Create Post Page](/images/create-post.png)

### Search Page
![Search Page](/images/search-page.png)

### View Post Page
![View Post Page](/images/view-post.png)

### Audit Log
![Audit Log](/images/audit-log.png)

### Edit Post Page
![Edit Post Page](/images/edit-post.png)