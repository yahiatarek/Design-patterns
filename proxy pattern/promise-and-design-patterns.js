// the promise acts as a placeholder for the future result ----> Proxy Pattern
let promise = new Promise((resolve, reject) => {
  setTimeout(() => resolve(1), 1000);
});


// observer Pattern
promise.then(result => console.log(result)); // Observer

// the other results depends on the source object/result ----> chain of responsibility Pattern
promise
  .then(result => {
    console.log(result); // 1
    return result * 2;
  })
  .then(result => {
    console.log(result); // 2
    return result * 2;
  })
  .catch(error => console.error(error));

  // Promise saves the results state and change it without revealing
  //  the inner implementation----> Memento pattern