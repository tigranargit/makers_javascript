const fizzBuzz = require("./fizzBuzz")

const fizzbuzzUntil = (number) => {
      for (let i = 1 ; i <= number ; i++)
      console.log(fizzBuzz(i))
}

module.exports = fizzbuzzUntil;