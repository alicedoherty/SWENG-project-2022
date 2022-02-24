// SPDX-License-Identifier: MIT
pragma solidity >=0.4.21 <8.10.0;

contract PublishContent {

    struct User {
        uint id; // identification used for quick searching\
        string name; // e.g. author's name
        string text; // e.g. blogpost
    }

    User[] public users;
    uint public nextId;

    function create(string memory name, string memory text) public {
        users.push(User(nextId, name, text));
        nextId++;
    }

    function publish(uint id, string memory _text) public {
        if (binarySearch(id, 0, users.length-1) && !strcmp(id)) users[id].text = _text; 
        else userError();
    }

    function read(uint id) view public returns(uint, string memory, string memory) {
        if (binarySearch(id, 0, users.length-1) && !strcmp(id)) return(users[id].id, users[id].name, users[id].text);
        userError();
    }

    function update(uint id, string memory text) public {
        if (binarySearch(id, 0, users.length-1) && !strcmp(id)) users[id].text = text;
        else userError();
    }

    function del(uint id) public { // will delete the id number and e.g. there will never be id 0 again if id 0 is deleted
        if (binarySearch(id, 0, users.length-1) && !strcmp(id)) delete users[id];
        else userError();
    }

    // internal, call just inside this contract, since view, it will not be on the blockchain view -> read-only function
    function binarySearch(uint id, uint start, uint end) view public returns(bool) {
        if (start > end) return false;
        uint mid = end - start / 2;
        uint userID = users[mid].id;
        if (userID == id) return true;
        if (userID > id) return binarySearch(id, start, end-1);
        else return binarySearch(id, mid+1, end);
    }

    function strcmp(uint id) view internal returns(bool) {
        return keccak256(abi.encodePacked(users[id].name)) == keccak256(abi.encodePacked(""));
    }

	// since pure it will not be on blockchain pure -> do not read or modify the state variables
    function userError() pure internal {
        revert("User does not exist");
    }

}
