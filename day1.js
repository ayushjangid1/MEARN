// const numbers = [21,22,23,24,25,26,27,28];
// const numberOfPeople = numbers.length;

// for(let i = 0;i<numberOfPeople;i++){
//     if(numbers[i] % 2 == 0){
//         console.log(numbers[i]);
//     }
// }

// let maxi = -1;
// for(let i=0;i<numberOfPeople;i++){
//     if(numbers[i] > maxi){
//         maxi = numbers[i];
//     }
// }
// console.log(maxi);

//objects

// const users1 = {
//     firstName: "Ayush",
//     gender: "Male"
// }
// console.log(users1["firstName"]);

// const allUsers = [{
//     firstName: "Ayush",
//     gender: "Male"
// }, {
//     firstName: "Anurag",
//     gender: "Male"
// }, {
//     firstName: "Akshita",
//     gender: "Female"
// }
// ];

// for(let i=0;i<allUsers.length;i++){
//     if(allUsers[i]["gender"] == "Male"){
//         console.log(allUsers[i]["firstName"]);
//     }
// }

// Q1. write a program that reverses all the elements of the array

// const arr = [1,2,3,4,5,6,7,8,9];
// let left=0,right = arr.length -1;
// while(left <= right){
//     let temp = arr[left];
//     arr[left] = arr[right];
//     arr[right] = temp;
//     left++;
//     right--;
// }
// console.log(arr);

// let sum = 0;
// for(let i =0;i<10000000000000;i++){
//     sum += i;
// }
// console.log(sum);


//Functions
// function sum(a,b){
//     return a+b;
// }

// let ele1 = 9;
// let ele2 = 99;
// let ele3 = sum(ele1,ele2);
// console.log(ele3);


//Function Callbacks or function as an argument
// function sum(a,b,fnToCall){
//     let result = a+b;
//     fnToCall(result);
// }

// function display_data(data){
//     console.log("The data is " + data);
// }

// let ans = sum(3,5,display_data);



//SetTimeout & setInterval
// function greet(){
//     console.log("Hello World");
// }

// function greet_again(){
//     console.log("Hello World Again !");
// }
// setTimeout(greet,1 * 1000);
// setInterval(greet_again,1 * 1000);


// Q1. Create a counter in Js which counts from 30 to 0
// var key = 30;

// let ans=  setInterval(function(){
//     if(key <=0){
//         clearInterval(ans);
//     }
//     console.log(key--);
// },1*100);
// console.log(ans);

// Q2. Create a terminal clock
// let ans = setInterval(function(){
//     let curr_hour = new Date().getHours();
//     let curr_min = new Date().getMinutes();
//     let curr_sec = new Date().getSeconds();
//     console.log(curr_hour%12 + ":" + curr_min + ":" + curr_sec);
// },1*1000)


// Q3. Calculate the time it takes between a setTimeout call and the function actually running.
// function greet(){
//     let abhi = new Date().getTime();
//     console.log(abhi);
// }

// console.log(new Date().getTime() + setTimeout(greet,1000));