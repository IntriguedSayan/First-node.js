const fileModule=require("fs")
function changeName(name,rename){
    fileModule.rename(`./${name}`,`./${rename}`,(err)=>{
        err?console.log(err):console.log("Rename has been completed");
    })
}
changeName("test2.txt","rename2.txt")