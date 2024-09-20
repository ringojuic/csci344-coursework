const makeBigger = () => {
  let myElement = document.querySelector('p');
  myElement.style.fontSize = '30px';
  myElement = document.querySelector('h1');
  myElement.style.fontSize = '45px';
  //   alert('make bigger!');
};

const makeSmaller = () => {
  let myElement = document.querySelector('p');
  myElement.style.fontSize = '15px';
  myElement = document.querySelector('h1');
  myElement.style.fontSize = '20px';
  //   alert('make smaller!');
};

/*
Tips:
1. First, in the index.html file, add an onclick attribute to each button.
   The value of the attribute should be a call to the corresponding function
   (see class demos).

2. Then modify the body of the "makeBigger" and 
   "makeSmaller" functions (in between the curly braces)
   to target the body element and set it's font size.
*/
