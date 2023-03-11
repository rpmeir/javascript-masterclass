
export function run(element) {
    // local scope, respect block
    // don't allow restatement ! 
    // allow reassignment
    if(true) {
        let pi = 3.141592;
    }
    // console.log(pi); // pi is not defined
    let anotherPi = 3.141592;
    console.log(anotherPi);
    // let anotherPi = 3; // error
}
