/* 
  See Smashing Magazine Tutorial:
  https://www.smashingmagazine.com/2021/11/dyslexia-friendly-mode-website/
*/

let x = -1;

const dyslexiaMode = (ev) => {
  x = x * -1;
  if (x == 1)
    document.querySelector('body').className = 'dyslexia-mode';
  else document.querySelector('body').className = '';
};

document
  .querySelector('#dyslexia-toggle')
  .addEventListener('click', dyslexiaMode);
