// Select all like buttons on the page
const likeButtons = document.querySelectorAll('.card__like-button');

// For each button, listen for a 'click' event
likeButtons.forEach((button) => {
  button.addEventListener('click', () => {
    // This toggles the 'active' class on and off automatically
    button.classList.toggle('card__like-button_active');
  });
});