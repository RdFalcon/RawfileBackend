


import {readFile} from "node:fs";
readFile("input.txt",function(err,data){
    if(err){
        console.log("this error run because unable to read of find data");
    }
    console.log(data);
    console.log(data.toString());
    
})