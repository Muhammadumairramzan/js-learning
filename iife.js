// immediately Invoked Function expression, it is use because of pullution of global scope,
// Mainly to remove global scope poulution


(function chai(){
    console.log(`db connected`);
})();

( (name) =>{
    console.log(`db two ${name}`)
}) ('umair')
