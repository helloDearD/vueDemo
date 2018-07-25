const fs = require("fs");
const path = require("path");

// fs.readFile(path.join(__dirname,fpath),"utf-8",(err,datastr)=>{
//     if(err){
//         throw  err
//     }
//     console.log(datastr)
// })

function getFileByPath(fpath,succCb,errCb){
    fs.readFile(fpath,"utf-8",(err,datastr)=>{
        if(err){
            return errCb(err)
        }
        succCb(datastr)
    })
}
getFileByPath(path.join(__dirname,"12.txt"),(err)=>{
    console.log(err)
},(data)=>{
 console.log(data)
});