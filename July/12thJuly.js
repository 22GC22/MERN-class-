// Obj = {Details: {Name: {Address: " "}},};

// Obj = {...Obj, NewDetails: "", Details: {...Obj.Details, NewName: "",
// Name: { ...Obj.Details.Name, NewAddress: ""},}, };
// console.log(Obj);

//5 lAyered Object Editing

// Obj = {Details: {
//         Name: {
//             Address: { 
//                 Email: { 
//                     Number: 123
//                 },
//             },
//         },
//     },
// };

// Obj = {...Obj, NewDetails: "", Details: {
//     ...Obj.Details, NewName: "", Name: { 
//         ...Obj.Details.Name, NewAddress: "", Address: {
//             ...Obj.Details.Name.Address, NewEmail: "", Email: {
//                 ...Obj.Details.Name.Address.Email, NewNumber: ""
//             },
//         },
//     },
//     },
// };

// console.log(Obj);

// Copy an entire Obj in a key inside the Obj.

// Obj = {
//     Name: "ABC",
//     Email: "a@g",
//     Address: {
//         Pin: 344,
//         Details: {},
//     },
// }

// Obj = {...Obj, Address: { ...Obj, ABC: "avvc"}}

// console.log(Obj);

// Obj = {
//     Name: "ABC",
//     Email: "a@g",
//     Address: {Name: "ABC",
//     Email: "a@g",
//     Address: {
//         Pin: 344,
//         Details: {},
//     },
//     Test: "Test"
//     },
// };

// Obj = {...Obj, Address: {...Obj.Address, Address: {...Obj.Address.Address, Details: {
//     ...Obj.Address.Address.Details, City: "CHD"
// }}}};

// console.log(Obj);

// console.log(Obj.Address.Address.Details);

// Obj = { name: "React", Mobile: 2233};

// var {name} = Obj;
// console.log(name);
// Obj.name = "ABCC";
// console.log(name);
// // Obj destructing doesnt updates after changed

// // Key and Value functions
// console.log(Object.keys(Obj));
// console.log(Object.values(Obj));


//Functions

function Add(v1, v2){
    console.log (v1 + v2);
}

Add( 44, 43);
//If you add extra arguments then it will only use the required amount

// If you pass less arguments the left out will be undefined unless passing default value.

function Add(v1, v2=44){
    console.log (v1 + v2);
}

Add( 44);
// Add(43,44,55)

var Add = (x,y) => {
    console.log(x*2, y/2);
}

Add(44);

const getNumber = (v2,v1) => {

    console.log(v1,v2)

};

getNumber(44,55);

// Array

