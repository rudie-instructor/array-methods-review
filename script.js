const strArr = ["first", "second", "third", "fourth"];

const numArr = [1, 2, 3, 4];

const numStrArr = ["first", 2, 3, "fourth"];

const arrArr = [
    ["first", "second", "third", 4], 
    [1, 2, 3, "fourth"], 
    ["first", 2, "third", 4]
];

const arrObj = [
    {
        first: 1, 
        second: 2, 
        third: 3
    }, 
    {
        first: 1, 
        second: 2, 
        third: 3
    }, 
    {
        first: 1, 
        second: 2, 
        third: 3
    }
];

const arrObjArr = [
    [{first: 1, second: 2, third: 3}, {first: 1, second: 2, third: 3}, {first: 1, second: 2, third: 3}], 
    [{first: 1, second: 2, third: 3}, {first: 1, second: 2, third: 3}, {first: 1, second: 2, third: 3}], 
    [{first: 1, second: 2, third: 3}, {first: 1, second: 2, third: 3}, {first: 1, second: 2, third: 3}]
];

const objectsWithArrays = [
    {
        arr1: ["first", "second", "third"], 
        arr2: ["first", "second", "third"], 
        arr3: ["first", "second", "third"]
    }, 
    {
        arr1: ["first", "second", "third"], 
        arr2: ["first", "second", "third"], 
        arr3: ["first", "second", "third"]
    }, 
    {
        arr1: ["first", "second", "third"], 
        arr2: ["first", "second", "third"], 
        arr3: ["first", "second", "third"]
    }
];

function factorial(n) {
    if (n === 0) { 
        return 1; 
    }
    else { 
        return n * factorial( n - 1 ); 
    }
}

// The splice method
// console.log(`The splice method result: ${numStrArr.splice(1, 2, "second", "third")}`);
// console.log(numStrArr);

// The slice method
// console.log(`The slice method result: ${numStrArr.slice()}`);

// The shift method
// console.log(`The shift method result: ${strArr.shift()}`);
// console.log(strArr);

// The unshift method
// console.log(`The unshift method result: ${strArr.unshift("zero")}`);
// console.log(strArr);

// The push method
// console.log(`The push method result: ${numStrArr.push("item")}`);
// console.log(numStrArr);

// The pop method
// console.log(`The pop method result: ${numStrArr.pop()}`)
// console.log(numStrArr);

// The map method
// console.log(`The map method result: ${numArr.map(num => num += num)}`)

//  The join method
// console.log(`The join method result: ${strArr.join(", ")}`)

// The includes method
// console.log(`The includes method result: ${numStrArr.includes("third")}`)

//  The indexOf method
// console.log(`The indexOf method result: ${numStrArr.indexOf("fourth")}`)

// The forEach method
// console.log("The forEach method result:")
// numArr.forEach(num => console.log("The factorial of " + num + " is " + factorial(num)));

// Happy arrays using indexOf and forEach
// function happyArrays(arrayArray) {
//     let happyCount = 0;
//     arrayArray.forEach(array => {
//         if (array.indexOf("happy") === -1) {
//             array.push("happy");
//             happyCount++;
//             console.log("Number of arrays made happy: " + happyCount);
//         }
//     })
// }
// happyArrays(arrArr);

// Double forEach, array and object
// arrObj.forEach(object => {
//     console.log(object)
//     // We must specify that we are going to perform forEach on the values of the object
//     Object.values(object).forEach(item => {
//         console.log(item)
//     })
// })

// The concat method
// console.log(`The concat method result: ${strArr.concat(numArr)}`);

// The find method
// console.log(`The find method result: ${numArr.find(number => number > 3)}`)

// The every method
// console.log(`The every method result: ${numArr.every(number => number < 5)}`);
// const everyFind = array => {
//     array.find(item => typeof(item) == "string")
// }
// console.log(`Using every and find together result: ${arrArr.every(array => array.find(item => typeof(item) == "string"))}`)

// The filter method
// console.log(`The filter method result: ${strArr.filter(word => word.length > 5)}`)
