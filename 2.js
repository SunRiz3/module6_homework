function isPrimeNumber(num){
    if ((num < 2) || (num > 1000)) {
        return "Данные не верны";
    } else {
        for (let i = 2; i < num; i++){
            if (num % i === 0) {
                return "Простое";
            }
        }
        return "Сложное";
    }
}

let randomNum = Math.floor(Math.random() * 2000);
let p = isPrimeNumber(randomNum);
console.log("Число " + randomNum + " - " + p);