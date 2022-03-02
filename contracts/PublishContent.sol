// SPDX-License-Identifier: MIT
pragma solidity >=0.4.21 <8.10.0;

contract PublishContent {
    struct User {
        uint id; // identification used for quick searching\
        string name; // e.g. author's name
        string[] text; // e.g. blogpost, all posts by this particular user
        uint postAmount; // num of posts user has
    }
    string[] public allTexts; // will start at index 0, this array will contain all posts that exist 
    User[] public users;
    uint public nextId = 1; // so many issues with nextId being 0, therefore starting index is 1

    function create(string memory _name, string memory _text) public {
        allTexts.push(_text);
        users.push(User(nextId, _name, allTexts, 1));
        nextId++;
    }

    // change text e.g. blogpost (modify text)
    // if user does not exist, it will give userError() but cause error, needs fixing
    function publish(uint _id, string memory _text) public mustBeUser(_id) {
        allTexts.push(_text);
        users[_id-1].text = allTexts;
        users[_id-1].postAmount++;
    }

    // basically deletes any post specified in postNum by setting the string to "" the empty string
    function removePublish(uint _id, uint postNum) public mustBeUser(_id) { 
        delete users[_id-1].text[postNum];
    }

    function readName(uint _id) view public returns(string memory) {
        require(_id != 0, "User does not exist"); // instead of require, so there aren't warnings
        if (searchUser(_id)) return(users[_id-1].name); // _id - 1 is actually necessary...
        userError();
    }

    function readtext(uint _id, uint postNum) view public returns(string memory) { // post 0 -> infinity
        require(_id != 0, "User does not exist"); // instead of require, so there aren't warnings
        if (searchUser(_id)) {
            return(users[_id-1].text[postNum]); // _id - 1 is actually necessary...  
        }
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
        return keccak256(abi.encodePacked(users[_id].name)) == keccak256(abi.encodePacked(""));
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
