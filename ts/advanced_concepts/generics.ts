// function firstElement(arr: any[]) {
//   return arr[0];
// }
//this is a problem, return type is any, TS wont help you catch errors
//if you pass a number[], you expect a number back, but TS wont enforce that


// we can use generics to preserve the type

function firstElement<T>(arr: T[]): T {
    return arr[0];
}

// now when using the function TS remembers the type:

// const numbers = [1, 2, 3];
// const firstNum = firstElement(numbers); //type: number

const words = ["hello", "world"];
const firstWord = firstElement(words); //type: string

// without generics, TS wouldnt know what type firstNum or firstWord should be

//basic syntax
function identity<T>(value: T): T {
    return value;
};

/*
<T> means "this function works with any type."

value: T means "the parameter has the type T."

: T means "this function returns a value of type T."
*/

// so TS infers the type when we call the function:

const num = identity(42); // type: number
const str = identity("hello"); //type: string

//generics ensure that your code is reusable

//generics ensure that your code is type-safe. You get the benefit of static typing without losing flexibility

//generic arrays
// generics are super useful when working with arrays

function getFirstElement<T>(arr: T[]): T {
    return arr[0];
}

const numbers = [1, 2, 3];
const firstaNumber = getFirstElement<number>(numbers); //type is number

const strings = ['a', 'b', 'c'];
const firstString = getFirstElement<string>(strings); //type is string


// generics with multiple types

function pair<K, V>(key: K, value: V): [K, V] {
    return [key, value];
}

const result = pair(123, "id"); //type: [string, number]

console.log(result);
