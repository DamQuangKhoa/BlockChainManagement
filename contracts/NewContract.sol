pragma solidity ^0.4.24;

contract NewStorage {
 

  uint public storedData;
  

  function set(uint x) public {
    storedData = x;

  
  }
}
