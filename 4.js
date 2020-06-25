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