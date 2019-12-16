$('.home-slider').owlCarousel({
  items: 1,
});

// -----------open/close  modal-------------

let modal = document.querySelector('.shadow__box__modal');

// Get the button that opens the modal
let btn = document.getElementById('green228');

// Get the <span> element that closes the modal
let span = document.querySelector('.close__modal__btn');

// When the user clicks the button, open the modal
btn.onclick = function() {
  modal.style.display = 'block';
};

span.onclick = function() {
  modal.style.display = 'none';
};

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = 'none';
  }
};
