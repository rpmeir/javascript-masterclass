
export function run(element) {
    // object data types
    console.log(typeof function(){}); // function // special type wraped by an object
    console.log(typeof {name: "Linus"}); // object
    console.log(typeof [1,2,3]); // object
    console.log(typeof /[a-zA-Z_$]/); // object
    console.log(typeof new Date()); // object
}
