// const func = (
//     function (a) {
//         delete a ;
//         return a;
//     }
// )(5);

// console.log(func); == 5

// const property = "firstName"

// const name = " Aayush Jha"

// const user = {
//     [property] : name,
// };

// console.log(user.firstName)

// const user = {
//     name: "Aayush",
//     age: 24,
//     isTotallyAwesome: true,
// };

// for (i in user) {
//     console.log(user[i]);
// }


//output

// const nums = {
//     a: 100,
//     b: 200,
//     title: "My nums",
// };

// func(nums);

// function func(nums) {
// for (key in nums) {
// if(typeof nums[key] === "number"){
//     nums[key] = nums[key] * 2;
// }
// }
// };

// console.log(nums);  

// const a = {};
// const b = { key: "b"};
// const c = { key: "c"};
// a[b] = 123;
// console.log(a[b]);

// JSON.stringify

// const user = {
//     name: "Aayush",
//     age: 23,
// }

// //to string
// const str = JSON.stringify(user)
// localStorage.setItem("test", str);
// console.log(str);
// //to object back
// const newObj = JSON.parse(str);
// console.log(newObj);
// // for storing it in localStorage we use this

// console.log([..."lawda"]); // spread operator
    // const user = {
    //     name: "Aayush",
    //     age: 23,
    // }

    //  const admin = {
    //     admin: true,
    //     ... user
    //  };
    // console.log(admin)

// const  settings = {
//     user: "Aayush",
//     level: 19,
//     health: 90,
// };
// const data = JSON.stringify(settings, ["level", "health"]);
// console.log(data);

// const shape = {
//     r: 10,
//     d() {
//         return this.r * 2;
//     },
//     p: ()=>
//         2 * Math.PI * this.r, 
// }
// console.log(shape.d())
// console.log(shape.p())

// let user = {
//     name: "Aayush",
//     age: 23,
// }

// const name =  "Kela"
// const { name: myName } = user;

// console.log(name) // kela
// console.log(myName) // Aayush

// NESTED DESTRUCTURING
// let user = {
//     name: "Aayush",
//     age: 23,
//     fullName: {
//         firstName: "Aayush",
//         lastName: "Jha",
//     }
// }

// const { fullName: { firstName} } = user;
// console.log(firstName)


// ...xxx in parameters called  rest parameters. they should a;ways be at the end
// ...xxx in {} or [] called  spread parameters

// function getItems(fruitList, ...args,favouriteFruit)  {
//     return [ ...fruitList, ...args, favouriteFruit]
// }

// console.log(getItems(["banana","apple"], "pear","orange"))
// ;

// let c = { greeting: "Hey!" };
// let d;
// d = c;
// c.greeting  = "Hello" ;
// console.log(d.greeting); // Hello

// console.log({ a:  1  }  ==  {  a :  1  }); // false
// console.log({ a: 1 } === { a: 1}); // false

// let p = {
//     name: "Aayush",
// };

// const m = [p];
// p=null;
// console.log(m); // Aayush
// console.log(m.p); // undefined


// const value = {
//     number: 10
// };

// const multiply = (x =  { ...value}) => {
//     console.log((x.number *= 2));
// };

// multiply();
// multiply();
// multiply(value);
// multiply(value);

// shallow copy - new holds ref to old
// deep copy - cmpletely clone no ref






// const users = {
//     Alex: {
//       email: 'alex@alex.com',
//       skills: ['HTML', 'CSS', 'JavaScript'],
//       age: 20,
//       isLoggedIn: false,
//       points: 30
//     },
//     Asab: {
//       email: 'asab@asab.com',
//       skills: ['HTML', 'CSS', 'JavaScript', 'Redux', 'MongoDB', 'Express', 'React', 'Node'],
//       age: 25,
//       isLoggedIn: false,
//       points: 50
//     },
//     Brook: {
//       email: 'daniel@daniel.com',
//       skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux'],
//       age: 30,
//       isLoggedIn: true,
//       points: 50
//     },
//     Daniel: {
//       email: 'daniel@alex.com',
//       skills: ['HTML', 'CSS', 'JavaScript', 'Python'],
//       age: 20,
//       isLoggedIn: false,
//       points: 40
//     },
//     John: {
//       email: 'john@john.com',
//       skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux', 'Node.js'],
//       age: 20,
//       isLoggedIn: true,
//       points: 50
//     },
//     Thomas: {
//       email: 'thomas@thomas.com',
//       skills: ['HTML', 'CSS', 'JavaScript', 'React'],
//       age: 20,
//       isLoggedIn: false,
//       points: 40
//     },
//     Paul: {
//       email: 'paul@paul.com',
//       skills: ['HTML', 'CSS', 'JavaScript', 'MongoDB', 'Express', 'React', 'Node'],
//       age: 20,
//       isLoggedIn: false,
//       points: 40
//     }
//   }  

// ;
//  console.log(  {Alex: {skills} } = users)


//DOM


// (function (n) {
//     console.log(n * n)
//   })(2) // 4, but instead of just printing if we want to return and store the data, we do as shown below
  
//   let squaredNum = (function (n) {
//     return n * n
//   })(10)
  
//   console.log(squaredNum)

// function sayHello() {
//     console.log('Hello Duggu')
// }
// setTimeout(sayHello, 2000);

//FOR EACH ------------------------->>>>>>>>
// used when we have to modiffy each Element in the array
// syntax in a normal or a function declaration

// function callback(item, index, arr) {}
// array.forEach(callback)

// or syntax in an arrow function
// const callback = (item, i, arr) => {}
// array.forEach(callback)

// const c = ['india', 'bhutan', 'nepal'];
// const d = [];
// c.forEach((i) => d.push(i));
// console.log(d)

//MAP ------------------------->>>>>>>>

// const countries = [1,2,3,4,5];

// const newCountries = countries.map((i)=> i*i)

// console.log(newCountries)

//Filter ------------------------->>>>>>>>

// const c = ['hindustan', 'pakistan', 'bangladesh'];
// const stan = c.filter(
//     (i) => i.includes('stan')
// )
// console.log(stan)

//reduce ------------------------->>>>>>>>
//returns a single value // concentrates items of the array
// const str = ['fuck','you', 'all'];
// const strN = str.reduce((acc,cur) => acc + ' ' + cur)
// console.log(strN)

//find ------------------------->>>>>>>>
//for first occurence
// syntax in a normal or a function declaration

// function callback(item) {
//     return // code goes here
//     }
    
//     const item = array.find(callback)
    
//     // or syntax in an arrow function
    
//     const reduced =  callback(item) => {
//     return // code goes here
//     }
//     const item = array.find(callback)

// const countries = ['Finland', 'Estonia', 'Sweden', 'Norway', 'Iceland']
// const countryWithWay = countries.find((country) => country.includes('way'))
// console.log(countryWithWay) // Norway