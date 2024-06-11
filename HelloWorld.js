
const createHelloWorld = function() {
    
    return function(...args) {
        return args
    }
};


  const f = createHelloWorld();
 
 
  console.log( f("Hello world",12))

