const fruits = ['apple','oranges','mango','lemon'];
const copiedArray = [...fruits];
console.log(copiedArray);

const toArray = (...args) => {
    return args;
}
console.log(toArray(1,2,3,4,));