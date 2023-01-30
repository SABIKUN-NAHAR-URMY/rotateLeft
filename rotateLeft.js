function rotateLeft(arr, d){
    for(let i = 0; i < d; i++){
        arr.push(arr.shift());
    }
    return arr;
}

const arr = [1,2,3,4,5,6,7];
console.log(rotateLeft(arr, 4));