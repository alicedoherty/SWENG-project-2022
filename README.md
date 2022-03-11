# SWENG-project-2022

Propylon - Blockchain publishing system

## Project Description

Build a web-based application for authoring and publishing content, with published versions being persisted
on the blockchain for auditability and verification. Users of the system should be able to see the current
version of a piece of content (e.g. a blog post), validate it’s authenticity by comparing to a version stored
in the blockchain, and also view previous versions published to the blockchain. The blockchain should provide
a verifiable audit trail for all versions of a piece of content, so consumers can be sure it hasn’t been
tampered with or modified externally.

## Useful Information

Client: Greg Chapple  
Email: greg.chapple@propylon.com

Demonstrator: Dennis McNulty  
Email: DEMCNULT@tcd.ie

## Contributers

Anastasiya Bogoslovskaya,  
Steven Cataluna,  
Charles Christiansson,  
Mohamed Difallah,  
Alice Doherty,  
Conor Doherty,  
Alexander Sepelenco

## Dependencies

- [Node.js](https://nodejs.org/en/)
- [Truffle Suite](https://trufflesuite.com/)
  - Install with `npm install -g truffle`
- [Ganache](https://trufflesuite.com/ganache/index.html) (scroll to the bottom for working download link)
- [MetaMask](https://metamask.io/download/)
- [MUI](https://mui.com/)
  - Install with `npm install` since it is already in package.json

## Running the App

Boilerplate template used: https://github.com/truffle-box/react-box

1. Install dependencies listed above

2. Run `npm install` (both within the main `SWENG-project-22` folder and in `client`) to install dependencies

2. Open Ganache and select "Quickstart"

3. Start development console with

```
truffle develop
```

4. Compile and migrate smart contracts

```
compile
migrate
```

- You can also run `migrate --reset` but this will reset all the data stored in the smart contract (basically clears the "database")

5. To run React app

```
cd client
npm run start
```

6. Click on "Test!!" button to run boilerplate (blockchain) code

7. On MetaMask connect to Ganache network
  - Create new network with RPC URL "HTTP://127.0.0.1:7545" and Chain ID "1337"
  - "Import account" using private key of first account on Ganache

## Setting up Ganache
1. After creating a new workspace (by selecting "Quickstart"), save it by pressing the "Save" button in the top right.

2. Press the settings cog in top right, and press "Add Project" and select the `truffle-config.js` file from the main repo folder.

3. Click the "Contracts" tab and then "PublishContent" to see the data stored in the blockchain.

4. In the "Transactions" tab, you can click on a transaction and see the contract function calls, inputs, etc.