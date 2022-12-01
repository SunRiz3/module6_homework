function getNumber() {
    let arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 'd', null, 'e'];
    let evenNumber = 0;
    let oddNumber = 0;
    let otherData = 0;

    for (let i = 0; i < arr.length; i++){
        if ((arr[i] === 0) || (typeof(arr[i]) != 'number')) {
            otherData++;
        } else {
            if (arr[i] % 2 === 0) {
                evenNumber++;
            } else {
                oddNumber++;
            }
        }
    }

    console.log("Чётных чисел в массиве = " + evenNumber);
    console.log("Нечётных чисел в массиве = " + oddNumber);
    console.log("Число 0 или других значения в массиве = " + otherData);
}

getNumber();