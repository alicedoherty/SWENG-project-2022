// SPDX-License-Identifier: MIT
pragma solidity >=0.4.21 <8.10.0;

contract PublishContent {

    struct Posts {
        string text;        // e.g. blogpost
        string postTitle;
        string date; 
        uint postId;
    }

     struct User {
        uint id;            // identification used for quick searching
        string name;        // e.g. author's name
        uint[] postIds;     // post id's for all the posts the user owns
    }

    Posts[] public posts;   // all posts 
    User[] public users;
    uint public nextId = 0;

    function createPost(string memory _text, 
                        string memory _postTitle, 
                        string memory _date,
                        uint _postId) public {             
        posts.push(Posts(_text, _postTitle, _date, _postId));
    }

    // creates new User and initialises postIds[] with postId of their first post
    function create(uint _id, string memory _name, uint[] memory postIds) public {
        users.push(User(_id, _name, postIds));
        nextId++;
    }

    function pushPostToUser(uint _id, uint[] memory arrayId) public {
        users[_id].postIds = arrayId;
    }

    function renamePostTitle(uint _id, string memory _postTitle) public mustBeUser(_id) {
        posts[_id].postTitle = _postTitle;
    }

    // basically deletes any post given an id 
    function removePublish(uint _id) public mustBeUser(_id) { 
        delete users[_id];
    }

    function readName(uint _id) view public returns(string memory) {
        if (searchUser(_id)) return(users[_id].name);
        userError();
    }

    function readPostsIdsOfUser(uint _id) view public returns(uint[] memory) {
        return(users[_id].postIds);
    }

    function readText(uint _id) view public returns(string memory) {
        return(posts[_id].text);
    }

    function readPostTitle(uint _id) view public returns(string memory) {
        return(posts[_id].postTitle);
    }

    // be very careful when deleting users, because even with mustBeUser, it will cost money, just how solidity works
    function del(uint _id) public mustBeUser(_id) { // del user, will del the user and make the index unusable, *BAD IMPLEMENTATION*
        delete users[_id];
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

    function getNextId() public view returns (uint) {
        return nextId;
    }
}
