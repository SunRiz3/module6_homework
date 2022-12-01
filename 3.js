function sum(x) {
    return function(y) {
        return x + y;
    };
}
let f = sum();
console.log(sum(21)(1), sum(515)(26), sum(10)(512));