/* global document fetch window */
const img = 'http://qattanfoundation.org/sites/all/themes/qf/logo.svg';
const updateBtn = document.getElementById('update-btn');
const updateSection = document.querySelector('.update-section');
const closeBtn = document.querySelector('#close-btn');
const doneBtn = document.querySelector('#done-btn');
const error = document.querySelector('.error');
const ticketNo = document.querySelector('#ticket-no');

const editSection = document.querySelector('.update-section');

const status = document.querySelector('#status');
const statusError = document.querySelector('#status-eroor');

const itEmployee = document.querySelector('#it-employee');
const employeeError = document.querySelector('#employee-error');

const desc = document.querySelector('#desc');
const descError = document.querySelector('#desc-error');

updateSection.style.visibility = 'hidden';

updateBtn.addEventListener('click', () => {
  updateSection.style.visibility = 'visible';
  updateBtn.style.visibility = 'hidden';
});

closeBtn.addEventListener('click', () => {
  updateSection.style.visibility = 'hidden';
  updateBtn.style.visibility = 'visible';
});

doneBtn.addEventListener('click', (e) => {
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
    fetch(`/support/${ticketNo}`, {
      method: 'PUT',
      credentials: 'same-origin',
      headers: { 'Content-Type': 'application/json; charset=utf-8' },
      body: JSON.stringify(data),
    })
      .then(response => response.json())
      .then((response) => {
        if (response.error) {
          swal({
            dangerMode: true,
            title: 'فشلت العملية',
            text: response.error,
            icon: img,
            button: 'أعد المحاولة',
          });
        } else {
          setTimeout(() => {
            window.location = '/support';
          }, 3000);
          swal({
            title: 'تمت العملية:',
            text: response.result,
            icon: img,
            button: 'حسناً',
          });
        }
      })
      .catch(() => {
        swal({
          dangerMode: true,
          title: 'فشلت العملية',
          text: 'خطأ في اﻹدخال',
          icon: img,
          button: 'أعد المحاولة',
        });
      });
  }
});
