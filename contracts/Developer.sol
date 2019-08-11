

pragma solidity ^0.4.24;

import "./strings.sol";
contract DeveloperFactory {
    using strings for *;
    event NewDeveloper(uint devId,string _name, string _position,string _review,string _level,uint _experience);
 
    uint maxAge = 100;
    uint minAge = 5;
    uint ranId =1;
    struct Developer {
        uint id;
        string name;
        string review;
        string level;
        string position;
        uint experience;
    }
 
    Developer[] public developers;
 
    mapping (address => uint) public ownerDevCount;
    mapping (uint => address) public devToOwner;
 
    function _createDeveloper( uint _id,string _name, string _position,string _review,string _level,uint _experience ) private{
        uint id = developers.push( Developer(_id, _name,_review,_level,_position,_experience ) ) - 1;
        ownerDevCount[msg.sender]++;
        devToOwner[id] = msg.sender;
        emit NewDeveloper(id,_name,_position,_review,_level, _experience);
    }
 
    function createRandomDeveloper(string _name, string _position,string _review,string _level,uint _experience  ) public payable {
         ranId = ranId+1;
        _createDeveloper( ranId, _name,_position,_review,_level,_experience );
    }
}

