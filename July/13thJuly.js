var arr = [54,435,56,3,3,354,234];

// arr.map((value, index)=>{
//     console.log(value, "------", index);
// });

// arr.filter((value, index)=>{
//     console.log(value, "------", index);
// });

// arr.filter((value, index)=>{
//     if(value%2==0){
//         return value;
//     }
// });

// // Will show no output

// //We need to store data in a var to use it

// var fd = arr.filter((value, index)=>{
//     if(value%2==0){
//         return value;
//     }
// });

// console.log(fd);

// // 

// var fd = arr.map((value, index)=>{
//     if(value%2==0){
//         return value;
//     }
// });

// var fd = arr.filter((value, index)=> value%2 ===0); // Curly braces never default return while parentesis do

// console.log(fd);


// var fd = arr.map((value, index)=> value%2 ===0);

// console.log(fd);

// var fd = arr.find((value, index)=> value%2 ===0);

// console.log(fd);


// Q

// var arr = [{
//     name: "", age: 34, email: "abdsdd"
// }];

//

var email = "abc@chitkara.com";
// WAP find tghe domain of email

// WAP find if the domakin is of chitkara

if(email.indexOf("@chitkara")!= -1){
    console.log("Match");
};


