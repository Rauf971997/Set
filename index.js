// 1-ое задание
/* function SetInterval(func, delay) {
    function interval() {
      func();
      setTimeout(interval, delay);
    }
    setTimeout(interval, delay);
  }

  function myFunction() {
    console.log("Rauf");
    console.log(233);
  }
  
 SetInterval(myFunction, 1000);  */


//  2-ое задание
/* function logArray(array) {
    let i = 0;
  
    const intervalId = setInterval(function() {
      if (i < array.length) {
        console.log(array[i]);
        i++;
      } else {
        clearInterval(intervalId);
      }
    }, 1000);
  }

  const myArray = [1, 2, 3, 4, 5];
  logArray(myArray); */
  
//   3-ое задание
/* function countdown(interval, start) {
    if (start < 0 ) {
      throw new Error("Число должно быть неотрицательным");
    }
  
    let timer = setInterval(function() {
         console.log(start);
        if (start === 0) {
        clearInterval(timer);
      }
     start--;
    }, interval);

 }
  
  countdown(1000,15);
 */
  
  

