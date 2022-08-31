const fileModule=require("fs")

function appendFile(loc,data){
    fileModule.appendFile(`./${loc}`,data,(err)=>{
        err?console.log(err):console.log("The data has been appended to the file");
    })
}


function readFile(loc){
    fileModule.readFile(`./${loc}`,{encoding:"utf-8"},(err,data)=>{

        err?console.log(err):console.log(data)

    })
}

function deleteFile(loc){
    fileModule.rm(`./${loc}`,(err)=>{
        err?console.log(err):console.log("File has been deleted successfully");
    })
}

function createFile(name){
    fileModule.createWriteStream(`${name}`)    
}

function changeName(name,rename){
    fileModule.rename(`./${name}`,`./${rename}`,(err)=>{
        err?console.log(err):console.log("Rename has been completed");
    })
}

function lists(){
    fileModule.readdir("./",(err,files)=>{
        files?console.log(files):console.log(err);
    })
}

// readFile("test.txt")
// appendFile("test.txt"," Second append happend")
// deleteFile("test2")
createFile("test4.txt")
// changeName("test3.txt","rename.txt")
// lists()