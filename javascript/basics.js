// Variables
// let,const,var
let a = 10;
const name = 'sam';
var i = 0;

// -------------------------------
// Datatypes
const string = 'sam';
const number = 100;
const boolean = true || false;
const _null = null;
const _undefined = undefined;

const arr = [1, 2, 3];
const object = { name: 'sam', id: 1 };
const date = new Date();

// ----------------------------------------
// conditional statements
// if and else
const isTrue = true;
if (isTrue) console.log("true!");
else console.log("false!");

// switch
const _switch = 1;
switch (_switch) {
    case 1:
        console.log(_switch);
        break;
    case 2:
        console.log(_switch);
        break;
    default:
        console.log(_switch);
}

// -------------------------------------
// Loop

const loopData = [1, 3, 4, 5, 6, 3, 6];
// for
for (var i = 0; i < loopData.length; i++) {
    console.log(i, loopData[i]);
}

// for in
for (const index in loopData) {
    console.log(index)
}

// for of
for (const item of loopData) {
    console.log(item)
}

for (const [index, item] of loopData.entries()) {
    console.log(index, item)
}

// continue & break
for (const [index, item] of loopData.entries()) {
    if (index == 2) continue;
    console.log(index, item);

    if (index === 4) break;
}

// while
var _while = 1;
while (_while < 10) {
    console.log(_while)
    _while++;
}

// --------------------------------------
// spread operator
console.log([1, 3, 4, ...[5, 6, 7]]);
console.log({ id: 1, name: 'sam', ...{ ts: new Date().valueOf() } });