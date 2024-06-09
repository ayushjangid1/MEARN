// Promise (then) syntax

// function ayushAsyncFunction(){
//     console.log("checkpoint 1");
//     let p = new Promise(function(resolve){
//         console.log("checkpoint 2");
//         resolve("Hello World");
//         console.log("checkpoint 3");
//     });
//     console.log("checkpoint 4");
//     return p;
// }

// function main(){
//     ayushAsyncFunction().then(function(value){
//         console.log("checkpoint 6");
//         console.log(value);
//     });
//     console.log("checkpoint 7");
// }

// main();


//callback syntax

// function ayushCallback(callback){
//     console.log("Checkpoint 1")
//     callback("Hello world");
//     console.log("Checkpoint 2")
// }

// async function main(){
//     console.log("Checkpoint 3")
//     ayushCallback(function (value){
//         console.log("Checkpoint 4")
//         console.log(value);
//         console.log("Checkpoint 5")
//     });
//     console.log("Checkpoint 6")
// }

// main();


//Async/Await

function ayushAsyncFunction(){
    console.log("checkpoint 1");
    let p = new Promise(function(resolve){
        console.log("checkpoint 2");
        resolve("Hello World");
        console.log("checkpoint 3");
    });
    console.log("checkpoint 4");
    return p;
}

async function main(){
    console.log("checkpoint 6")
    let value = await ayushAsyncFunction();
    console.log("checkpoint 7")
    console.log(value);
    console.log("checkpoint 8");
}

main();