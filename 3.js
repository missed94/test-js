const str = "/users/download/index.html";


function isHtml(path) {
let result = false;
let arr = path.split('.');

if (arr[arr.length-1] == 'html') result = true;

return result;
}


console.log(isHtml(str));