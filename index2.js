const args=process.argv

const fs=require("fs")

if(args[2]==="read"){
    if(args.length>4) console.log("Please provide proper file name")
    else{
        fs.readFile(`./${args[3]}`,{encoding:"utf-8"},(err,data)=>{
        
            err?console.log(err):console.log(data)
    
        })
    }
}
else if(args[2]==="append"){
    if(args.length>5) console.log("Please provide proper file name")
    else{
        const data=args[3]
        fs.appendFile(`./${args[4]}`,data,(err)=>{
            err?console.log(err):console.log("Append completed");
        })
    }
}
else if(args[2]==="delete"){
    if(args.length>4) console.log("Please provide proper file name")
    else{
        fs.rm(`./${args[3]}`,(err)=>{
            err?console.log(err):console.log("File has been deleted");
        })
    }
}
else if(args[2]==="create"){
    if(args.length>4) console.log("Please provide proper file name")
    else{
        fs.createWriteStream(`${args[3]}`)
    }
}
else if(args[2]==="rename"){
    if(args.length>5) console.log("Please provide a proper file name")
    else{
        fs.rename(`./${args[3]}`,`./${args[4]}`,(err)=>{
            err?console.log(err):console.log("Rename completed");
        })
    }
}
else if(args[2]==="list"){
    if(args.length>3) console.log("Please provide proper file name")
    else{
        fs.readdir("./",(err,files)=>{
            err?console.log(err):console.log(files)
        })
    }
}