

pragma solidity ^0.4.24;

import "./strings.sol";
contract ReviewFactory {
    using strings for *;
    uint ranId =1;
    uint public test =0;
    string test2="";
    // struct Review {
    //     string name;
    //     string project;
    //     string task;
    //     string author; 
    //     string content;  
    // }
    struct ReviewSecond {
        uint id;
        string review;
       
    }
 
     ReviewSecond[] public reviewsSecond;
    
    function setTest(string _value) {
      // test= "Unicode snowman ☃".toSlice().len();
     test2 = _value;
    } 
    

    function _testString() {
      // test= "Unicode snowman ☃".toSlice().len();
      var s = "DevI-ted-ProjectName-TaskName-Author-Content/DevID-ted-ProjectName-TaskName-Author-Content/DevID-ted-ProjectName-TaskName-Author-Content/DevID-ted-ProjectName-TaskName-Author-Content/DevID-ted-ProjectName-TaskName-Author-Content".toSlice();
      var delim = "/".toSlice();
      var res =1;
      var parts = new string[](s.count(delim) + 1);
      for(uint i = 0; i < parts.length; i++) {
        parts[i] = s.split(delim).toString();
       _createReview(parts[i]);
        // newDeveloper(parts[i]);
      // _createDeveloper(dev[0],dev[1],dev[2],dev[3],dev[4],dev[5]);
      }
    } 
 

   function _createReview( string _review) private  {
        var delim = "-".toSlice();
        ranId =ranId+1;
        test= reviewsSecond.push( ReviewSecond(ranId,_review) ) - 1;
    }
}

