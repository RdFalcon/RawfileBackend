function showLocation(){


    console.log("from helper.cjs");
    console.log("This file is from helper",__filename);
    console.log("This file is from helper",__dirname);
}

module.exports={showLocation};