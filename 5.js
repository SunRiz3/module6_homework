function degree(x, n) {
    let result = x;
  
    for (let i = 1; i < n; i++) {
      result *= x;
    }
    return result;
  }
  
  let x = prompt("Введите число");
  let n = prompt("Введите степень в которую нужно возвести число");
  
  if (n < 1) {
    alert(`"Невозможно возвести число в степень " ${n} `);
  } else {
    alert(degree(x, n));
  }