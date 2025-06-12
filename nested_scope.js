// Scope level Mining

function one()
{
    const user_name = "Umair"

    function two(){
        const website = "youtube"
        console.log(user_name);

    }
    // console.log(website);
    two()
}
// one()
if(true){
    const user_name = "umair"
    if(user_name==="umair"){
        const website = "youtube"
        // console.log(user_name+" "+website);
    }
}

// ........................intresting......................... it is also call hoisting....
console.log(add_one(5))
function add_one(value){
    return value+1
}


// add_two(5)
const add_two = function(value){
    return value+2
}
console.log(add_two(5))