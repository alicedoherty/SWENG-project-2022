// SPDX-License-Identifier: MIT
pragma solidity >=0.4.21 <8.10.0;

contract SimpleStorage {
  uint storedData;
  string name;

  function set(uint x) public {
    storedData = x;
  }
  function set(string memory y) public {
	  name = y;
  }

  function get() public view returns (uint) {
    return storedData;
  }

  function getString() public view returns (string memory) {
	  return name; 
  }
}
