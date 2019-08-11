var SimpleStorage = artifacts.require("SimpleStorage");
var TutorialToken = artifacts.require("TutorialToken");
var ComplexStorage = artifacts.require("ComplexStorage");
var DeveloperFactory = artifacts.require("DeveloperFactory");
var ReviewFactory = artifacts.require("ReviewFactory");
module.exports = function(deployer) {
  deployer.deploy(SimpleStorage);
  deployer.deploy(TutorialToken);
  deployer.deploy(ComplexStorage);
  deployer.deploy(DeveloperFactory);
  deployer.deploy(ReviewFactory);
};
