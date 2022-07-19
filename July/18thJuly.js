// 

// const getData = new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve("I am Done");
//             // reject("Error -- @");
//         }, 5000);
//     }
// );

// setTimeout(() => {
//     console.log("Hello All");
// }, 5000);


// getData
// .then((res) => {
//         console.log(res);
//     }
// ).catch();

// var a = getData();
// console.log(a);

// const getOutPut = (v1,v2) => {
//     return new Promise((res,rej) => { 
//         if (v1%v2 === 0){
//         res("no remainder");
//     }

//     else{
//         rej("Remainder");
//     }}
//     );
   
// }

// getOutPut(5,5).then((res) => 
// {console.log(res);
// })
// .catch((error) => {
//     console.log(error);
// })

// const getUser = new Promise((resolve, reject) => {
//     resolve("It's Done");
//     reject ("Error");
// });

// getUser.then(
//     (res) => {
//         console.log("Resolve", res);
//     },
//     (rej) => {
//         console.log("Reject")
//     }
// );



// const findRemaider = (v1, v2) => {
//     return new Promise((res,rej) => {
//         if(v1%v2 === 0){
//             rej("No Remainder");
//         }
//         else res(v1%v2);

//     });
// } ;


// var out = findRemaider(4,1);

// out.then(
//     (res) => {
//         console.log(res);
//     },
//     (rej ) => {
//         console.log(rej)
//     }
//     );

// JSON AP1

const getPosts = () => {
    let url = "https://jsonplaceholder.typicode.com/users";
    fetch(url).then(
        (response) => {
            console.log(response);
        }
    )
};

getPosts();