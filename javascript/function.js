// Function
test()
function test() {
    console.log("test function");
}

const test1 = function (parameter) {
    console.log(parameter, "test1 function");
}
test1(10);

// self call
(function test2(parameter1 = 'test', parameter2 = 1) {
    console.log(parameter1, parameter2, "test2 function");
}('hai'));

// arrow fun
const test3 = () => {
    console.log("test3 function");
}

// fun return value
function sum(value1, value2) {
    return value1 + value2;
}

console.log(sum(10, 30));

// call back fun
function calculate(value1, value2, callBackFn) {
    const result = callBackFn(value1, value2);
    return result;
}

console.log(calculate(12,33,sum));
