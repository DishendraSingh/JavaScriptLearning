const buttons = document.querySelectorAll('.button');
const body = document.querySelector('body');

buttons.forEach(function(btn) {
  btn.addEventListener('click', function(e) {
    const color = e.target.id; // get the id (color name)
    body.style.backgroundColor = color; // set it as background
  });
});
