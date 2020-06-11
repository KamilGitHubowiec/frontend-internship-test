// Elements
const popup = document.querySelector('.popup');
const form = document.querySelector('.login-form');
const email = document.querySelector('#login-form__email');
const password = document.querySelector('#login-form__password');
const passwordVisibility = document.querySelector('.password-visibility');

const buttonShowPopupForm = document.querySelector('#show-popup-form');
const buttonClosePopupForm = document.querySelector('.close-popup-form');
const successMessage = document.querySelector('.success-message');

// Show popup form
buttonShowPopupForm.addEventListener('click', () => {
  popup.classList.remove('hidden');
})

// Close popup form
buttonClosePopupForm.addEventListener('click', () => {
  popup.classList.add('hidden');
})

// Form listener
form.addEventListener('submit', e => {
  e.preventDefault();
  
  // Form validation

  // Render loader to the DOM
  // Display success message after 3 seconds
  setTimeout(() => {
    buttonShowPopupForm.classList.add('hidden');
    popup.classList.add('hidden');
    successMessage.classList.remove('hidden');
  }, 3000)
})





