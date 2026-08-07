// 1. Write a Function that searchs for an element in an array and returns its index ,  if the elment is not presnet then just return -1

let arr = [1,4,8,9,4,7]
function searchElement(arr , x){
    for(let i=0 ; i<arr.length ; i++){
        if(arr[i] == x){
            return i;
        }
    }
    return -1
}
let result = searchElement(arr , 4);
console.log(result);