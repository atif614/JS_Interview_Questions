// let obj = {
//     name:"peter"
// };
// console.log(obj);
// let user = obj;
// console.log(user);
// user.name = "sam";
// console.log(obj);
// console.log(user);

let obj = {
    name:"peter"
};
console.log(obj);
// let user = Object.assign({},obj);
let user = {...obj};
console.log(user);
user.name = "sam";
console.log(obj);
console.log(user);
























let name = "atif";
console.log(name);
let name1 = name;
name1 = "atif raza";
console.log(name1);
console.log(name);