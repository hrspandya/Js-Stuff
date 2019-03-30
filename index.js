// Import stylesheets
import './style.css';

// Write Javascript code!
const appDiv = document.getElementById('app');
appDiv.innerHTML = `<h1>Flatten Array</h1>`;


function flattenArray(arr){
  if (!arr) {
    return [];
  }

  if (arr.length === 0) {
    return [];
  }

  let result = [];

  for (let i = 0; i < arr.length; i+=1) {
    if (Array.isArray(arr[i])) {
      result = result.concat(flattenArray(arr[i]));
    } else {
      result.push(arr[i]);
    }
  }

  return result;

}


var resArray = flattenArray([[[5], 3], 0, 2, ['foo'], [], [4, [5, 6]]]); // 7

console.log(resArray);