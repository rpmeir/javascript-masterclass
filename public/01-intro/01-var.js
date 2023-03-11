
export function run(element) {
    var pi = 3.141592;
    console.log(pi);
    // execution context scope, don't respect block
    // allow restatement ! 
    // allow reassignment
    var pi = 3;
    console.log(pi);
}
