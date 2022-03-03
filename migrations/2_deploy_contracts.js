var SimpleStorage = artifacts.require("./SimpleStorage.sol");
var PublishContent = artifacts.require("./PublishContent.sol");

module.exports = function(deployer) {
  deployer.deploy(SimpleStorage);
  deployer.deploy(PublishContent);
};
