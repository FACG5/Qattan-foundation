/* global document fetch */

const img = 'http://qattanfoundation.org/sites/all/themes/qf/logo.svg';

function move(icon) {
  icon.classList.toggle('change');
}

// for the add ticket page
const menu = document.getElementsByClassName('overlay')[0];
const show = () => {
  menu.classList.toggle('change');
};

const addCard = document.querySelector('.card');
const rotateSupport = document.querySelector('#rotate-support');
const rotateLoan = document.querySelector('#rotate-loan');

rotateSupport.addEventListener('click', () => {
  addCard.classList.toggle('is-flipped');
});

rotateLoan.addEventListener('click', () => {
  addCard.classList.toggle('is-flipped');
});

// sfor the animated menue bar icon

// add ticket tabs
const employeeName = document.querySelector('#employee-name');
const employeeDep = document.querySelector('#employee-department');
const probType = document.querySelector('#ptype');
const tSubject = document.querySelector('#subject');
const tType = document.querySelector('#type');
const tPriority = document.querySelector('#priority');
const tDuration = document.querySelector('#duration');
const pdesc = document.querySelector('#pdesc');
const btnAdd = document.querySelector('#btn-add');
const succMsg = document.querySelector('.msg');
const error = document.querySelector('.error');

// ADD SUPPORT TICKET

btnAdd.addEventListener('click', (e) => {
  error.textContent = '';
  e.preventDefault();
  if (employeeName && employeeDep && probType && tSubject.value.trim().length !== 0 && tType && tPriority
    && tDuration && pdesc.value.trim().length !== 0) {
    const employee = employeeName.textContent.toLowerCase();
    const department = employeeDep.textContent.toLowerCase();
    const problemType = probType.value.toLowerCase();
    const problemDesc = pdesc.value.toLowerCase();
    const subject = tSubject.value.toLowerCase();
    const duration = tDuration.value.toLowerCase();
    const type = tType.value.toLowerCase();
    const priority = tPriority.value.toLowerCase();

    const newTicket = {
      employee,
      department,
      problemType,
      problemDesc,
      subject,
      duration,
      type,
      priority,
    };
    fetch('/add-ticket', {
      method: 'POST',
      credentials: 'same-origin',
      headers: { 'Content-Type': 'application/json; charset=utf-8' },
      body: JSON.stringify(newTicket),
    })
      .then(response => response.json())
      .then((response) => {
        if (response.Error) {
          swal({
            dangerMode: true,
            title: 'فشلت العملية',
            text: response.Error,
            icon: img,
            button: 'أعد المحاولة',
          });
        } else {
          swal({
            successMode: true,
            title: 'تمت العملية',
            text: response.Result,
            icon: img,
            button: 'حسنـاً',
          });
        }
      })
      .catch((err) => {
        swal({
          dangerMode: true,
          title: 'فشلت العملية',
          text: err.message,
          icon: img,
          button: 'أعد المحاولة',
        });
      });
  } else {
    swal({
      dangerMode: true,
      title: 'فشلت العملية',
      text: 'أدخل الحقول الفارغة',
      icon: img,
      button: 'أعد المحاولة',
    });
  }
});

// ADD SUPPORT TICKET

const empName = document.querySelector('#employee-name');
const empDep = document.querySelector('#employee-department');
const pType = document.querySelector('#ptype-support');
const tSub = document.querySelector('#subject-support');
const ticketType = document.querySelector('#type-support');
const ticketPriority = document.querySelector('#priority-support');
const ticketDuration = document.querySelector('#duration-support');
const problemdesc = document.querySelector('#pdesc-support');
const btnAddSupport = document.querySelector('#btn-add-support');
const Msg = document.querySelector('.msg-support');
const errMsg = document.querySelector('.error-support');


btnAddSupport.addEventListener('click', (e) => {
  errMsg.textContent = '';
  e.preventDefault();
  if (empName && empDep && pType && tSub.value.trim().length !== 0 && ticketType && ticketPriority
    && ticketDuration && problemdesc.value.trim().length !== 0) {
    const employee = empName.textContent.toLowerCase();
    const department = empDep.textContent.toLowerCase();
    const problemType = pType.value.toLowerCase();
    const problemDesc = problemdesc.value.toLowerCase();
    const subject = tSub.value.toLowerCase();
    const duration = ticketDuration.value.toLowerCase();
    const type = ticketType.value.toLowerCase();
    const priority = ticketPriority.value.toLowerCase();
    const newTicket = {
      employee,
      department,
      problemType,
      problemDesc,
      subject,
      duration,
      type,
      priority,
    };
    fetch('/add-ticket', {
      method: 'POST',
      credentials: 'same-origin',
      headers: { 'Content-Type': 'application/json; charset=utf-8' },
      body: JSON.stringify(newTicket),
    })
      .then(response => response.json())
      .then((response) => {
        if (response.Error) {
          swal({
            dangerMode: true,
            title: 'فشلت العملية',
            text: response.Error,
            icon: img,
            button: 'أعد المحاولة',
          });
        } else {
          swal({
            successMode: true,
            title: 'تمت العملية',
            text: response.Result,
            icon: img,
            button: 'حسنـاً',
          });
        }
      })
      .catch((err) => {
        swal({
          dangerMode: true,
          title: 'فشلت العملية',
          text: err.message,
          icon: img,
          button: 'أعد المحاولة',
        });
      });
  } else {
    swal({
      dangerMode: true,
      title: 'فشلت العملية',
      text: 'أدخل الحقول الفارغة',
      icon: img,
      button: 'أعد المحاولة',
    });
  }
});