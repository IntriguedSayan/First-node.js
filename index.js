let {sum,mult,subtract}=require("./other_file")

let results=sum(2,3)
let results2=mult(2,3)
let results3=subtract(5,3)
console.log(results)
console.log(results2)
console.log(results3)

const os=require("os")
console.log(os.uptime());

const fileModule=require("fs")
fileModule.readFile("./example.txt",{encoding:"utf-8"},(err,data)=>{
    if(err) console.log(err);

    else console.log(data);
})
