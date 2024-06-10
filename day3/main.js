// function square(n){
//     return n*n;
// }
// function cube(n){
//     return n*n*n;
// }

// function sum_of_something(a,b,cb){
//     let a_cb = cb(a);
//     let b_cb = cb(b);
//     return a_cb+b_cb;
// }

// let ans = sum_of_something(2,2,square);
// console.log(ans);

function myOwnSetTimeout(){
    const p = new Promise(function(resolve){
        setTimeout(resolve,1000);
    })
    return p;
}

let ans = myOwnSetTimeout().then(function(){
    console.log("Timeout Done");
})