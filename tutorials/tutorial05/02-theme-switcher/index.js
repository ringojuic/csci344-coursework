const defaultTheme = (ev) => {
  document.querySelector('body').className = '';
};

const oceanTheme = (ev) => {
  document.querySelector('body').className = 'ocean';
};

const desertTheme = (ev) => {
  document.querySelector('body').className = 'desert';
};

const highContrastTheme = (ev) => {
  document.querySelector('body').className = 'high-contrast';
};

document
  .querySelector('#default')
  .addEventListener('click', defaultTheme);
document
  .querySelector('#ocean')
  .addEventListener('click', oceanTheme);
document
  .querySelector('#desert')
  .addEventListener('click', desertTheme);
document
  .querySelector('#high-contrast')
  .addEventListener('click', highContrastTheme);

/*
    Hints: 
    1. Attach the event handlers (functions) above to the click event
       of each of the four buttons (#default, #ocean, #desert, 
        and #high-contrast) in index.html.
    2. Then, modify the  body of each function so that it
       sets the className property of the body tag based on 
       the button that was clicked.
*/
