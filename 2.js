/* const workers = [
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
 */


/* const str = "/users/download/index.html";


function isHtml(path) {
let result = false;
let arr = path.split('.');

if (arr[arr.length-1] == 'html') result = true;

return result;
}


console.log(isHtml(str)); */



const mixedArray = [3,13,74,14,66,15,22,4];



const isEven = function(num) {
    if (num % 2 == 0) {
        return true;
    } else { 
        return false }
}


/* const isEven = num => { 
 return (num % 2 == 0) 
}; */

let resultArray = mixedArray.filter(function(i) {
if (isEven(i)) return i;
});

console.log(resultArray);