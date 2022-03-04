// SPDX-License-Identifier: MIT
pragma solidity >=0.4.21 <8.10.0;

contract PublishContent {

    struct User {
        uint id; // identification used for quick searching\
        string name; // e.g. author's name
        string text; // e.g. blogpost
        string postTitle;
    }

    User[] public users;
    uint public nextId = 1; // so many issues with nextId being 0, therefore starting index is 1

    function create(string memory _name, string memory _text, string memory _postTitle) public {
        users.push(User(nextId, _name, _text, _postTitle));
        nextId++;
    }

    // change text e.g. blogpost (modify text)
    // if user does not exist, it will give userError() but cause error, needs fixing
    function publish(uint _id, string memory _text) public mustBeUser(_id) {
        users[_id-1].text = _text;
    }

    function renamePostTitle(uint _id, string memory _postTitle) public mustBeUser(_id) {
        users[_id-1].postTitle = _postTitle;
    }

    function readName(uint _id) view public returns(string memory) {
        require(_id != 0, "User does not exist"); // instead of require, so there aren't warnings
        if (searchUser(_id)) return(users[_id-1].name); // _id - 1 is actually necessary...
        userError();
    }

    function readtext(uint _id) view public returns(string memory) {
        require(_id != 0, "User does not exist"); // instead of require, so there aren't warnings
        if (searchUser(_id)) return(users[_id-1].text); // _id - 1 is actually necessary...
        userError();
    }

    function readPost(uint _id) view public returns(string memory) {
        require(_id != 0, "User does not exist"); // instead of require, so there aren't warnings
        if (searchUser(_id)) return(users[_id-1].postTitle); // _id - 1 is actually necessary...
        userError();
    }
    // be very careful when deleting users, because even with mustBeUser, it will cost money, just how solidity works
    function del(uint _id) public mustBeUser(_id) { // del user, will del the user and make the index unusable, *BAD IMPLEMENTATION*
        delete users[_id-1];
    }

    // internal, call just inside this contract, since view, it will not be on the blockchain view -> read-only function
    function binarySearch(uint _id, uint start, uint end) view internal returns(bool) {
        if (start > end) return false;
        uint mid = end - start / 2;
        uint userID = users[mid].id;
        if (userID == _id) return true;
        if (userID > _id) return binarySearch(_id, start, end-1);
        else return binarySearch(_id, mid+1, end);
    }

    function searchUser(uint _id) view public returns(bool) {
        return binarySearch(_id, 0, users.length-1);
    }

    function isStrEmpty(uint _id) view internal returns(bool) {
        return keccak256(abi.encodePacked(users[_id-1].name)) == keccak256(abi.encodePacked(""));
    }

	// since pure it will not be on blockchain pure -> do not read or modify the state variables
    function userError() pure internal {
        revert("User does not exist");
    }

    modifier mustBeUser(uint _id) {
        require(searchUser(_id) == true && _id != 0, "User does not exist");
        _;
    }

}
