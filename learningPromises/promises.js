
function fn() {
    console.log('Returning X');
    let x = 0;
    return new Promise((resolve, reject) =>
        setTimeout(() => {
            x = 20;
            resolve(x * 10);
        }, 3000)
    );
}

fn().then(x => {console.log(x);});


function doSomething(x) {
    return x * 10000;
}

const seiLa = () => {};

// promCallBack = (resolve, reject) => {

//     console.log('Rodando promise');
//     let erro = new Error('Deu pau!!!');

//     if (erro) reject(erro);
    
//     resolve(20);
// }

// const promise = new Promise();

// promise.then(console.log).catch(console.error);

// function fetchUsers() {

    // const promise = new Promise((resolve, reject) => {

    // });

    // // return promise;
//     return Promise.resolve('asdasdas');

// }

// fetchUsers().then().catch();

// function fetch() {
//     return new Promise((resolve, reject) => {
//         // do something
//     });
// }

// fetch().then(result => {
//     console.log('User ok!');
// })


// async function seila() {
//     return 20;
// }

// function seila2() {
//     return seila();
// }

// function seila3() {
//     return seila2();
// }

// try {
// seila3().then(result => {
//     console.log('Tudo bala');
// });

// await seila3();
// console.log('Tudo bala');

// } catch() {

// }

// seila().then()