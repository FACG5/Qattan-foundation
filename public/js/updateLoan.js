/* global document fetch window */

const updateBtn = document.getElementById('update-btn');
const updateSection = document.querySelector('.update-section');
const closeBtn = document.querySelector('#close-btn');
const doneBtn = document.querySelector('#done-btn');
const error = document.querySelector('.error');
const status = document.querySelector('#status');
const itEmployee = document.querySelector('#it-employee');
const desc = document.querySelector('#desc');


updateSection.style.visibility = 'hidden';

updateBtn.addEventListener('click', () => {
  updateSection.style.visibility = 'visible';
  updateBtn.style.visibility = 'hidden';
});

closeBtn.addEventListener('click', () => {
  updateSection.style.visibility = 'hidden';
  updateBtn.style.visibility = 'visible';
});

doneBtn.addEventListener('click', () => {
  if (status && itEmployee && desc) {
    const url = window.location.href;
    const splitUrl = url.split('/');
    const ticketNo = splitUrl[splitUrl.length - 1];
    const statusType = status.value;
    const description = desc.value;
    const itEmployeeName = itEmployee.value;
    const data = {
      statusType, description, itEmployeeName, ticketNo,
    };
    fetch(`/loan/${ticketNo}`, {
      method: 'PUT',
      credentials: 'same-origin',
      headers: { 'Content-Type': 'application/json; charset=utf-8' },
      body: JSON.stringify(data),
    })
      .then(response => response.json())
      .then(() => {
        error.textContent = 'DONE !';
        window.location = '/loans';
      })
      .catch(() => {
        error.textContent = 'THERE IS ERROR';
      });
  }
});
