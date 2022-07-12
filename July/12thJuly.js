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

Obj = {
    Name: "ABC",
    Email: "a@g",
    Address: {Name: "ABC",
    Email: "a@g",
    Address: {
        Pin: 344,
        Details: {},
    },
    Test: "Test"
    },
};

Obj = {...Obj, Address: {...Obj.Address, Address: {...Obj.Address.Address, Details: {
    ...Obj.Address.Address.Details, City: "CHD"
}}}};

console.log(Obj);

console.log(Obj.Address.Address.Details)