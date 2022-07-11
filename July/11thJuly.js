// var let const

var a = 5;
var b = "5";

// //Data type
// console.log(typeof b);
// //Value
// console.log(a==b);
// //DataType
// console.log(a===b);

//Dynamic string

// var love = "React";
// var l1 = "Node";
// var l2 = "Express";
// var String = `I love ${love} , ${l1} and ${l2}`;

// console.log(String);

// Objects

// var Obj = {Name: "React", V: "17.x.x", Name: "Node"};
// // prints Node because a key cannot be repeated
// console.log(Obj);

// // Print value
// console.log(Obj.Name);
// console.log(Obj["Name"]);

// var Key = "V";
// console.log(Obj[Key]);

// Object inside object

// var Obj = {Details: {
//     Name: { f_name: "", l_name: "Doe"},
//     Address: {City: "", State: ""},
//     },
// };

// // console.log(Obj.Details.Name.l_name);
// Obj.Details.Name.f_name = "Java";
// console.log(Obj.Details.Name);

//Change values in obj

// var Details = {Name: ""};
// Details.Name = "React";
// console.log(Details.Name, Details);

//Object destructing

// var Details = {Name: "React", Add: "Delhi", Email: "@"};

// We can put it variables. Not useful for big objects
// var Name = Details.Name;

// var {Name, Mobile, Email } = Details;

// console.log(Name, Mobile, Email);

// How to add new Key value pair

// Details.Mobile = 99;

// Details["Mobile"]=99;

// var {Name, Mobile, Email } = Details;
// console.log(Name, Mobile, Email);

// Details = {Mobile: 1223};
// var {Name, Mobile, Email } = Details;
// console.log(Name, Mobile, Email); //undefined because the prev object is removed and a new obj is there now 


// package obj into another object

// console.log({Details});
// console.log({Asd: Details});

// Spread operator

// console.log({ ...Details, Mobile: 1234});
// Details = { ...Details, Mobile: 1234};
// var {Name, Mobile, Email } = Details;
// console.log(Name, Mobile, Email);

// var Obj = {Details: {
//     Name: { f_name: "", l_name: "Doe"},
//     Address: {City: "", State: ""},
//     },
// };

// Obj  = { ...Obj, Details: {...Obj.Details, Name: {...Obj.Details.Name, FinalName: "ABC"}, Address: {...Obj.Details.Address, Pincode: 1234}, Mobile: 0987}};
// console.log(Obj);


// Array

var arr = [1,2,3,4,5,6,7];
var a1 = [1232,43,454,454];
console.log(arr.length);
console.log(arr[arr.length-1]);

console.log(arr.slice(0,arr.length-1));

// Concat operator

var names = arr.concat(a1);
console.log(names);
//Spread operator in Arrays

arr = [...arr, ...a1];
console.log(arr);