function rotateLeft(arrayOfNumber, numberInt){
    for(let i = 0; i < numberInt; i++){
        arrayOfNumber.push(arrayOfNumber.shift());
    }
    return arrayOfNumber;
}

const arrayOfNumber = [1,2,3,4,5];
console.log(rotateLeft(arrayOfNumber, 2));