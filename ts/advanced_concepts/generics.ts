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

const numbers = [1, 2, 3];
const firstNum = firstElement(numbers); //type: number

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