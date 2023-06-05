// object
let object = {};
object["id"] = 1;
object["name"] = "sam";
object.date = new Date();

object = {
    ...object,
    email: 'sam@gmail.com',
    ts: new Date().valueOf()
}

// object data from object
delete object['date'];

console.log(object)

// check object key is exists or not
console.log(Object.keys(object).length > 0);
console.log(object.hasOwnProperty("id"));
console.log(object["id"] ? true : false);
console.log(object.date ? true : false);
console.log('date' in object);

// get values and keys from object
console.log(Object.keys(object));
console.log(Object.values(object));

// get data from object
for (const key of Object.keys(object)) console.log(key, object[key]);
for (const key in object) console.log(key, object[key]);

// -----------------------------------------------------------
// array
let arr = []; // or const arr=[1,2,4,5,67,8];

// insert into array
for (var i = 0; i < 10; i++) arr.push(i + 1);

console.log(arr);

// check data exists or not
console.log(arr.length > 0)

// get data from array
console.log(arr[1])
for (var index = 0; index < arr.length; index++) console.log(index, arr[index]);
arr.forEach((e, i) => console.log(e, i))

// others
console.log(arr.filter(e => e == 2))
console.log(arr.map((e, i) => ({ data: e, id: i + 1 })));
console.log(arr.reduce((a, b) => a + b, 0));

console.log(arr.includes(2));

console.log(arr, arr.findIndex(e => e === 3));
console.log(arr, arr.indexOf(3));
console.log(arr, arr.find(e => e === 2));

// sort
console.log(arr.sort((a, b) => b - a));
console.log(arr.sort((a, b) => a - b));

console.log(arr, arr.slice(0, 3))
// console.log(arr, arr.splice(0, 3))

console.log([[1,3],[4,5],[6,7]].flat())

// array to string
console.log(arr.toString()) 
console.log(arr.join())

// remove duplicate
console.log([...new Set([1,1,1,3,4,5,5])])