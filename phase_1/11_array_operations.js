const checkLength = (phoneasastring) => {
      if (phoneasastring.length < 11) {
            return true;
      } else {
            return false;
      }
}

const filterLongNumbers = (phonearray) => {
      return phonearray.filter(checkLength);
}

const numbers = [
      '1763687364',
      '4763687363',
      '7867867862',
      'aaaaaaaabbbbbbbcccccdddddddd' // this element should be filtered
    ];
    
console.log(filterLongNumbers(numbers));
//[ '1763687364', '4763687363', '7867867862' ]
    
console.log(filterLongNumbers(['4763687363', '7867867862'])); // no number to filter out
//[ '4763687363', '7867867862' ]
    
console.log(filterLongNumbers([]))
//[ ]

const names = ['Anna', 'Laura', 'Josh', 'Min', 'Karla'];

const generateMessages = (array) => {
      return array.map((name) => {
            return 'Hi ' + name.name + '! ' + name.discount + ' off our best candies for you today!'
      })    
}

//console.log(generateMessages(names));

const namesAndDiscounts = [
      { name: 'Anna', discount: 50 },
      { name: 'Laura', discount: 40 },
      { name: 'Josh', discount: 30 },
      { name: 'Min', discount: 50 },
      { name: 'Karla', discount: 60 }
];

console.log(generateMessages(namesAndDiscounts));