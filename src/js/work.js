const form = document.querySelector('.form-sect-work');
const modal = document.querySelector('.backdrop-sect-work');
const emailInput = form.elements.email_work;
const commentInput = form.elements.message_work;
const btnClose = document.querySelector('.btn-close-work');
const textSuccess = document.querySelector('.input-email-text');
const textInvalid = document.querySelector('.input-email-text2');
const localStorageKey = 'key';
const BASE_URL =
  'https://65ef278dead08fa78a4fefb5.mockapi.io/contacts/portfolio-js';
// const BASE_URL = 'https://portfolio-js.b.goit.study/api/requests';

function inputsPageReboot() {
  const localStorageValue = JSON.parse(localStorage.getItem(localStorageKey));
  if (localStorageValue) {
    emailInput.value = localStorageValue.email;
    commentInput.value = localStorageValue.comments;
  }
}

inputsPageReboot();

form.addEventListener('submit', submitHandler);

form.addEventListener('input', () => {
  const inputsValues = {
    email: emailInput.value.trim(),
    comments: commentInput.value.trim(),
  };
  localStorage.setItem(localStorageKey, JSON.stringify(inputsValues));

  if (emailInput.value.includes('@')) {
    emailInput.classList.add('input-email-green');
    textSuccess.style.display = 'block';
    textInvalid.style.display = 'none';
  } else if (!emailInput.value.includes('@')) {
    emailInput.classList.add('input-email-red');
    emailInput.classList.remove('input-email-green');
    textSuccess.style.display = 'none';
    textInvalid.style.display = 'block';
    if (emailInput.value === '') {
      emailInput.classList.remove('input-email-green');
      emailInput.classList.remove('input-email-red');
      textSuccess.style.display = 'none';
      textInvalid.style.display = 'none';
    }
  }
});

async function submitHandler(event) {
  try {
    event.preventDefault();
    if (emailInput.value === '' || commentInput === '') {
      return alert('All form fields must be filled in');
    }
    const inputsValue = {
      email: emailInput.value.trim(),
      comments: commentInput.value.trim(),
    };
    await postData({
      email: inputsValue.email,
      comment: inputsValue.comments,
    });

    emailInput.classList.remove('input-email-green');
    emailInput.classList.remove('input-email-red');
    textSuccess.style.display = 'none';
    textInvalid.style.display = 'none';

    modal.classList.add('is-open');
    localStorage.removeItem(localStorageKey);
    form.reset();
  } catch (error) {
    console.log(error);
  }
}

btnClose.addEventListener('click', () => {
  modal.classList.remove('is-open');
});

function postData(data) {
  try {
    return fetch(BASE_URL, {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json',
      },
    }).then(response => {
      if (!response.ok) {
        throw new Error(response.status || response.statusText);
      }
      return response.json();
    });
  } catch (error) {
    console.log(error);
    alert('Error! Please enter the data again');
  }
}
