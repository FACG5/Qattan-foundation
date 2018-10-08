/* global document fetch */

const filterBtn = document.querySelector('#btn-period');
const maxDate = document.querySelector('#max-date');
const minDate = document.querySelector('#min-date');

const error = document.querySelector('.error');


filterBtn.addEventListener('click', () => {
  if (maxDate && minDate) {
    const maxPeriod = maxDate.value;
    const minPeriod = minDate.value;
    const data = {
      minPeriod, maxPeriod,
    };
    fetch(`/reports`, {
      method: 'POST',
      credentials: 'same-origin',
      headers: { 'Content-Type': 'application/json; charset=utf-8' },
      body: JSON.stringify(data),
    })
      .then(response => response.json())
      .then((response) => {
          
      })
      .catch((err) => {
        error.textContent = 'THERE IS AN ERROR';
      });
  }
});
