// SPDX-License-Identifier: MIT
pragma solidity >=0.4.21 <8.10.0;
// pragma experimental ABIEncoderV2;

contract PublishContent {
    struct Post {
        uint postId;
        // A post is associated with one or more "versions" of the post
        // This postVersions[] will contain the indexes of its post versions stored in the public PostVersion[] postVersions array
        uint[] postVersions;
    }

    struct PostVersion {
        uint postVersionid;
        string author;
        string postTitle;
        string postText; 
        string date;
    }

    // struct User {
    //     uint id;            // identification used for quick searching
    //     string name;        // e.g. author's name
    //     uint[] postIds;     // post id's for all the posts the user owns
    // }

    // All posts
    Post[] public posts;

    // All versions of all posts
    PostVersion[] public postVersions;

    uint public nextPostId = 0;
    uint public nextPostVersionId = 0;

    uint[] initialPostVersions;

    function createPost(string memory postTitle, 
                        string memory author, 
                        string memory postText,
                        string memory date) public {   
        delete initialPostVersions;
        initialPostVersions.push(nextPostVersionId);

        posts.push(Post(nextPostId, initialPostVersions)); 

        postVersions.push(PostVersion(nextPostVersionId, author, postTitle, postText, date)); 

        nextPostId++;
        nextPostVersionId++;
    }

    function editPost(uint postId,
                        string memory postTitle,
                        string memory author,
                        string memory postText,
                        string memory date) public {
        postVersions.push(PostVersion(nextPostVersionId, author, postTitle, postText, date));

        posts[postId].postVersions.push(nextPostVersionId);

        nextPostVersionId++;    
    }

    function getPostCount() public view returns(uint) {
        return posts.length;
    }

    function getPostVersions(uint postId) public view returns (uint[] memory) {
        return posts[postId].postVersions;
    }

    // Return number of post versions for a specific post (not public postVersions[])
    function getPostVersionsCount(uint postId) public view returns(uint) {
        return posts[postId].postVersions.length;
    }

    function getPostVersionId(uint postId, uint postVersionPos) view public returns(uint) {
        return posts[postId].postVersions[postVersionPos];
    }

    function readAuthor(uint postVersionId) view public returns(string memory) {
        return postVersions[postVersionId].author;
    }

    function readTitle(uint postVersionId) view public returns(string memory) {
        return postVersions[postVersionId].postTitle;
    }

    function readText(uint postVersionId) view public returns(string memory) {
        return postVersions[postVersionId].postText;
    }

    function readDate(uint postVersionId) view public returns(string memory) {
        return(postVersions[postVersionId].date);
    }
    
    // function readPostsfromPostVersions(uint _id) view public returns(uint[] memory) {
    //     return(posts[_id].postVersions);
    // }

    // function readVersionPostVersionid(uint _id) view public returns(uint) {
    //     return(postVersions[_id].postVersionid);
    // }

    // function readVersionPostTitle(uint _id) view public returns(string memory) {
    //     return(postVersions[_id].postTitle);
    // }

    // function readVersionPostText(uint _id) view public returns(string memory) {
    //     return(postVersions[_id].postText);
    // }

    // function readVerisonDate(uint _id) view public returns(string memory) {
    //     return(postVersions[_id].date);
    // }

    // function readVerisonAuthor(uint _id) view public returns(string memory) {
    //     return(postVersions[_id].author);
    // }

    // function readPostTitle(uint _id) view public returns(string memory) {
    //     return(posts[_id].postTitle);
    // }

    // creates new User and initialises postIds[] with postId of their first post
    // function create(string memory _name, uint[] memory postIds) public {
    //     users.push(User(nextId, _name, postIds));
    //     nextId++;
    // }

    // function pushPostToUser(uint _id, uint[] memory arrayId) public {
    //     users[_id].postIds = arrayId;
    // }

    // function renamePostTitle(uint _id, string memory _postTitle) public mustBeUser(_id) {
    //     posts[_id].postTitle = _postTitle;
    // }

    // basically deletes any post given an id 
    // function removePublish(uint _id) public mustBeUser(_id) { 
    //     delete users[_id];
    // }

    // function readName(uint _id) view public returns(string memory) {
    //     if (searchUser(_id)) return(users[_id].name);
    //     userError();
    // }

    // function readPostsIdsOfUser(uint _id) view public returns(uint[] memory) {
    //     return(users[_id].postIds);
    // }

    // be very careful when deleting users, because even with mustBeUser, it will cost money, just how solidity works
    // function del(uint _id) public mustBeUser(_id) { // del user, will del the user and make the index unusable, *BAD IMPLEMENTATION*
    //     delete users[_id];
    // }

    // internal, call just inside this contract, since view, it will not be on the blockchain view -> read-only function
    // function binarySearch(uint _id, uint start, uint end) view internal returns(bool) {
    //     if (start > end) return false;
    //     uint mid = end - start / 2;
    //     uint userID = users[mid].id;
    //     if (userID == _id) return true;
    //     if (userID > _id) return binarySearch(_id, start, end-1);
    //     else return binarySearch(_id, mid+1, end);
    // }

    // function searchUser(uint _id) view public returns(bool) {
    //     return binarySearch(_id, 0, users.length-1);
    // }

    // function isStrEmpty(uint _id) view internal returns(bool) {
    //     return keccak256(abi.encodePacked(users[_id-1].name)) == keccak256(abi.encodePacked(""));
    // }

	// since pure it will not be on blockchain pure -> do not read or modify the state variables
    // function userError() pure internal {
    //     revert("User does not exist");
    // }

    // modifier mustBeUser(uint _id) {
    //     require(searchUser(_id) == true && _id != 0, "User does not exist");
    //     _;
    // }

    // function getNextId() public view returns (uint) {
    //     return nextId;
    // }
    
}
