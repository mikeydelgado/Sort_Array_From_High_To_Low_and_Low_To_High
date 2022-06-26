const arrName = [.45, 92, 8.73, -400];



arrName.sort(function(a,b){return a - b});
console.log(arrName);

arrName.sort(function(a,b){return b - a});
console.log(arrName);

//I called the sorting method on a compare function
//If the return result is positive, b is sorted
//before a, but if the return result is
//negative, a is sorted before b