const yargs=require("yargs");
let argv=yargs(process.argv.slice(2)).argv;
let operation=argv.operation;
let vals=argv._.map((e)=>Number(e));
// console.log(vals);
switch(operation){
    case "addition":
        add();
        break;
    case "subtraction":
        subtract();
        break;
    case "multiply":
        multiply()   
        break;
    case "division":
       divide();   
       break;
    default:
        console.log("You have entered a wrong arithmetic operation. Please try again");
        break;
}

function add(){
    if(vals.some((e)=>isNaN(e)))
        console.log("Please enter only numbers to Add");
    else
        console.log(vals.reduce((p,c)=>p+c));
}

function subtract(){
    if(vals.length>2)
        console.log("Please enter only two operands for subtraction");
    else if(isNaN(vals[0]) || isNaN(vals[1]))
        console.log("Please enter only numbers to Subtract");
    else 
        console.log(vals[0]-vals[1]);
}

function multiply(){
    if(vals.some((e)=>isNaN(e)))
        console.log("Please enter only numbers to Multiply"); 
    else
        console.log(vals.reduce((p,c)=>p*c));
}

function divide(){
    if(vals.length>2)
        console.log("Please enter only two operands for Division");
    else if(isNaN(vals[0]) || isNaN(vals[1]))
        console.log("Please enter only numbers to Divide");
    else if(vals[1]==0)
        console.log("Divisor can't be Zero");
    else 
        console.log(vals[0]/vals[1]);
}

