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

// Create loader
const renderLoader = parent => {
  const loader = `
    <i class="fas fa-spinner loader"></i>
  `
  parent.insertAdjacentHTML('beforeend', loader);
}

let validPassword = false;

// Form listener
form.addEventListener('submit', e => {
  e.preventDefault();
  
  // Form validation
  if (validPassword === false) return

  // Render loader to the DOM
  renderLoader(form);
  // Display success message after 3 seconds
  setTimeout(() => {
    buttonShowPopupForm.classList.add('hidden');
    popup.classList.add('hidden');
    successMessage.classList.remove('hidden');
  }, 3000)
})

// Check if password is 8 to 15 characters which contain one uppercase letter, one numeric digit, and one special character
password.addEventListener('keyup', () => {
  const pattern = /^(?=.*\d)(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,15}$/;
  if (password.value.match(pattern)) {
    password.classList.remove('invalid');
    validPassword = true;
  } else {
    password.classList.add('invalid');
    validPassword = false;
  }
})

// Make password visible on click
passwordVisibility.addEventListener('click', () => {
  // Change type of the password
  const type = password.getAttribute('type') === 'password' ? 'text' : 'password';
  password.setAttribute('type', type);

  // Toggle the icon
  passwordVisibility.classList.toggle('fa-eye-slash');
})