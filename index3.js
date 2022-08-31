

const args = process.argv ;
// sub, mult, divide, sin, cos, tan, random
if(args[2]==="add"){
    if(args.length<4)console.log("Please provide at least 2 arguments");
    let sum=0
    for(let i=3;i<args.length;i++){
        sum+=Number(args[i])
    }
    console.log(sum)
}else if(args[2]==="sub"){
    if (args.length>5||args.length<4)console.log("Please provide at least two arguments")
    else{
        console.log(Math.abs(Number(args[3]-args[4])));
    }
}else if (args[2]==="mult"){
    if(args.length<4)console.log("Please provide at least 2 arguments");
    let prod=1
    for(let i=3;i<args.length;i++){
        prod=prod*Number(args[i])
    }
    console.log(prod);
}else if(args[2]==="divide"){
    if (args.length>5||args.length<4)console.log("Please provide at least two arguments")
    else console.log(Number(args[3])/Number(args[4]));
}else if(args[2]==="sin"){
    if(args.length>4||args.length<4) console.log("Please provide only correct argument");
    else console.log(Math.sin(aNumber(rgs[3])));
}else if(args[2]==="cos"){
    if(args.length>4||args.length<4) console.log("Please provide only correct argument");
    else console.log(Math.cos(Number(args[3])));
}else if(args[2]==="tan"){
    if(args.length>4||args.length<4) console.log("Please provide only correct argument");
    else console.log(Math.tan(Number(args[3])))
}else if(args[2]==="random"){
    const {randomInt}=require("crypto")
    const num=randomInt(1,9999999)
    console.log(num);
}


