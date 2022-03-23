// SPDX-License-Identifier: MIT
pragma solidity >=0.4.21 <8.10.0;
pragma experimental ABIEncoderV2;

contract PublishContent {

    //event createPost()

    struct Posts {
        string postTitle;
        uint postId;
        uint[] postVersions;
    }

    struct PostVersion {
        uint postVersionid; // same as postId for Posts
        string author;
        string postTitle; // same as postTitle for Posts
        string postText; 
        string date;
    }

     struct User {
        uint id;            // identification used for quick searching
        string name;        // e.g. author's name
        uint[] postIds;     // post id's for all the posts the user owns
    }

    Posts[] public posts;   // all posts 
    User[] public users;
    PostVersion[] public postVersions; // all versions of posts

    uint public nextId = 0;
    uint public nextPostId = 0;
    uint public nextpostVersionid = 0;

    function createPost(string memory postTitle, 
                        string memory author, 
                        string memory postText, string memory date, 
                        uint[] memory postVersionId) public {     
        postVersions.push(PostVersion(nextpostVersionid, author, postTitle, postText, date));   
        posts.push(Posts(postTitle, nextPostId, postVersionId));
        nextPostId++;
        nextpostVersionid++;
    }
    function editPost(string memory author,
                      string memory postTitle, string memory postText,
                      string memory date) public {
        postVersions.push(PostVersion(nextpostVersionid, author, postTitle, postText, date));
        nextpostVersionid++;
    }

    // creates new User and initialises postIds[] with postId of their first post
    function create(string memory _name, uint[] memory postIds) public {
        users.push(User(nextId, _name, postIds));
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

    function readPostsfromPostVersions(uint _id) view public returns(uint[] memory) {
        return(posts[_id].postVersions);
    }

    function readVersionPostVersionid(uint _id) view public returns(uint) {
        return(postVersions[_id].postVersionid);
    }

    function readVersionPostTitle(uint _id) view public returns(string memory) {
        return(postVersions[_id].postTitle);
    }

    function readVersionPostText(uint _id) view public returns(string memory) {
        return(postVersions[_id].postText);
    }

    function readVerisonDate(uint _id) view public returns(string memory) {
        return(postVersions[_id].date);
    }

    function readVerisonAuthor(uint _id) view public returns(string memory) {
        return(postVersions[_id].author);
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
