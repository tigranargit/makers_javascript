const printHello = () => {
      console.log('Hello from Tigran');
}
    
const executeAfterDelay = (seconds, greetingFunction) => {
      console.log(setTimeout(greetingFunction, seconds*1000));
}

//executeAfterDelay(5, printHello);

module.exports = printHello;
module.exports = executeAfterDelay;