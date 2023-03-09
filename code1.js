function add(x, y) {
    return x + y;
  }
  
  function subtract(x, y) {
    return x - y;
  }
  
  function calculator(x, y, operation) {
    return operation(x, y);
  }
  
  console.log(calculator(4, 2, add)); 
  console.log(calculator(4, 2, subtract)); 