const workers = [
    {"name":"John","salary":500},
    {"name":"Mike","salary":1300},
    {"name":"Linda","salary":1500}
];




function names(workers) {
    let result = [];

    for (let i = 0; i < workers.length; i++) {
        let workItem = workers[i];
        if (workItem.salary > 1000) {
            result.push(workItem.name);
        }
    }
    return result;
}

;

console.log(names(workers));







