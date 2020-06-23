const workers = [
    {"name":"John","salary":500},
    {"name":"Mike","salary":1300},
    {"name":"Linda","salary":1500}
];

let newArray = [];


function names(workers) {
    for (let i = 0; i < workers.length; i++) {
        if (workers[i].salary > 1000) {
            newArray.push += workers[i].name
        }
    }
}

names(workers);

console.log(newArray);