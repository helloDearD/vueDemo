const fs =require("fs");
// let promise = new Promise(()=>{
//     fs.readFile("./1.txt","utf-8",(err,data)=>{
//         if(err)throw err
//         console.log(data)
//     })
// })
function getFile(path){
    let promise = new Promise((res,rej)=>{
        fs.readFile(path,"utf-8",(err,data)=>{
            if(err)  rej(err)
            res(data)
        })
    })
    return promise
}
getFile("./2.txt").then(res=>{
    console.log(res);
    return getFile("./1.txt")
})
.then(data=>{
    console.log(data)
})
.catch(e=>{
    
})

//当出现错，可以为每个添加错误处理，这样，前边的出差，后边的还可以执行
//如果想前边的错了，后边的就不执行了，后边的依赖前边的数据，这样在最后添加catch