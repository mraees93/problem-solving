// function firstElement(arr: any[]) {
//   return arr[0];
// }

// const e = firstElement([1, '3'])
// console.log(typeof e);

//this is a problem, return type is any, TS wont help you catch errors
//if you pass a number[], you expect a number back, but TS wont enforce that


// we can use generics to preserve the type

// function firstElement<T>(arr: T[]): T {
//     return arr[0];
// }

// now when using the function TS remembers the type:

// const numbers = [1, 2, 3];
// const firstNum = firstElement(numbers); //type: number

const words = ["hello", "world"];
//const firstWord = firstElement(words); //type: string

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

const result = pair("id", 123); //type: [string, number]

//console.log(result);

// generics with constraints

// -- sometimes you would like to limit what types can be used

function logLength< T extends {length: number} >(value: T) : number {
    return value.length;
}

// the above function works with data types that have a length property
logLength('hello');
logLength([1, 2, 3]);
logLength({length: 10})

//logLength(42); //error because number has no length

// generics in interfaces

interface Box<T> {
    content: T;
}

const box1: Box<number> = { content: 42 };
const box2: Box<string> = { content: 'hello' };

// generics in classes

class Stack<T> {
    private items: T[] = [];

    push(item: T) {
        this.items.push(item)
    }

    pop(): T | undefined {
        return this.items.pop();
    }
}

const numberStack = new Stack<number>();
numberStack.push(1);
numberStack.push(2);
//console.log(numberStack.pop()); // 2

const stringStack = new Stack<string>();
stringStack.push('a');
stringStack.push('b');


//type-safe dynamic function call with generics

/*
lets say you have an object with multiple functions, and you want to create a generic wrapper that allows calling these functions safely, ensuring type safety for arguments and return values

*/

type Methods = {
    add: (a: number, b: number) => number;
    concat: (a: string, b: string) => string;
    isEven: (num: number) => boolean;
}

// generic function to safely call a method from an object
function callMethod<T extends keyof Methods> (
    method: T,
    ...args: Parameters<Methods[T]>
) : ReturnType<Methods[T]> {
    const methods: Methods = {
        add: (a, b) => a + b,
        concat: (a, b) => a + b,
        isEven: (num) => num % 2 === 0
    }

    return (methods[method] as (...args: any[]) => ReturnType<Methods[T]>)(...args);
}

//valid calls
const sum = callMethod('add', 2, 3); //number
const text = callMethod('concat', 'hello, ', 'World!'); //string
const even = callMethod('isEven', 4); //boolean

//ts will catch incorrect usage
//callMethod('add', 'hello', 5); 