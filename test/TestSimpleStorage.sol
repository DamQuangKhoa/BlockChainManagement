pragma solidity ^0.4.2;

import "truffle/Assert.sol";
import "truffle/DeployedAddresses.sol";
import "../contracts/SimpleStorage.sol";
import "../contracts/Developer.sol";

contract TestSimpleStorage {

  function testItStoresAValue() public {
    SimpleStorage simpleStorage = SimpleStorage(DeployedAddresses.SimpleStorage());

    simpleStorage._testString();

    uint expected = 4;
    // string expectedStr = "";

    Assert.equal(simpleStorage.test(), 2, "It should store the value.");
  }
 
}
