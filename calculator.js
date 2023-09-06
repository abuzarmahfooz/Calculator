const foo = new Promise((res, rej) => {
    res(1);
 });

async function faa(){
    return foo;
}

 function res(){
     return Promise.resolve(foo);
}

console.log(foo === faa()); //statement 1
console.log(foo === res()); //statement 2