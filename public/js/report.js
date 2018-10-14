/* global document fetch   */
/* eslint-disable file no-param-reassign */

const createElement = ((tagName, tagClassName, textContent) => {
  const element = document.createElement(tagName);
  element.classList.add(tagClassName);
  element.textContent = (textContent);
  return element;
});


const periodBtn = document.querySelector('#period-button');
const statusBtn = document.querySelector('#status-button');
const typeBtn = document.querySelector('#type-button');
const allBtn = document.querySelector('#all-button');

const all = document.querySelector('.all');
const periodSection = document.querySelector('.period-section');
const reportSection = document.querySelector('.report');

const statusSection = document.querySelector('.status-filter');
const typeSection = document.querySelector('.type-filter');

const switchType = document.querySelector('.switch-type');
const switchStatus = document.querySelector('.switch-status');

const loanBtn = document.querySelector('#loan-button');
const supportBtn = document.querySelector('#support-button');

const loans = document.querySelectorAll('.loan');
const supports = document.querySelectorAll('.support');

const solvedBtn = document.querySelector('#solved-button');
const notSolvedBtn = document.querySelector('#not-solved-button');
const inProgressBtn = document.querySelector('#in-progress-button');

const solved = document.querySelectorAll('.solved');
const notSolved = document.querySelectorAll('.notSolved');
const inProgress = document.querySelectorAll('.progress');

periodSection.style.display = 'none';
switchType.style.display = 'none';
switchStatus.style.display = 'none';
reportSection.style.display = 'none';

periodBtn.addEventListener('click', () => {
  periodSection.style.display = 'block';
  reportSection.style.display = 'none';
  switchType.style.display = 'none';
  switchStatus.style.display = 'none';
  periodBtn.classList.add('selected');
  statusBtn.classList.remove('selected');
  typeBtn.classList.remove('selected');
  allBtn.classList.remove('selected');
});


allBtn.addEventListener('click', () => {
  periodSection.style.display = 'none';
  reportSection.style.display = 'block';
  all.style.display = 'block';
  typeSection.style.display = 'none';
  statusSection.style.display = 'none';
  switchType.style.display = 'none';
  switchStatus.style.display = 'none';
  allBtn.classList.add('selected');
  periodBtn.classList.remove('selected');
  statusBtn.classList.remove('selected');
  typeBtn.classList.remove('selected');
});

statusBtn.addEventListener('click', () => {
  periodSection.style.display = 'none';
  reportSection.style.display = 'block';
  all.style.display = 'none';
  switchStatus.style.display = 'block';
  switchType.style.display = 'none';
  switchStatus.style.display = 'block';
  typeSection.style.display = 'none';
  statusSection.style.display = 'block';
  solved.forEach((element) => {
    element.style.display = 'none';
  });
  notSolved.forEach((element) => {
    element.style.display = 'none';
  });
  inProgress.forEach((element) => {
    element.style.display = 'none';
  });
  statusBtn.classList.add('selected');
  periodBtn.classList.remove('selected');
  typeBtn.classList.remove('selected');
  allBtn.classList.remove('selected');
  solvedBtn.classList.remove('btnClicked');
  inProgressBtn.classList.remove('btnClicked');
  notSolvedBtn.classList.remove('btnClicked');
});

typeBtn.addEventListener('click', () => {
  periodSection.style.display = 'none';
  reportSection.style.display = 'block';
  all.style.display = 'none';
  switchStatus.style.display = 'none';
  switchType.style.display = 'block';
  typeSection.style.display = 'block';
  loans.forEach((element) => {
    element.style.display = 'none';
  });
  supports.forEach((element) => {
    element.style.display = 'none';
  });
  statusSection.style.display = 'none';
  typeBtn.classList.add('selected');
  statusBtn.classList.remove('selected');
  periodBtn.classList.remove('selected');
  allBtn.classList.remove('selected');
  supportBtn.classList.remove('btnClicked');
  loanBtn.classList.remove('btnClicked');
});

loanBtn.addEventListener('click', () => {
  periodSection.style.display = 'none';
  switchStatus.style.display = 'none';
  switchType.style.display = 'block';
  reportSection.style.display = 'block';
  typeSection.style.display = 'block';
  statusSection.style.display = 'none';
  loans.forEach((element) => {
    element.style.display = 'block';
  });
  supports.forEach((element) => {
    element.style.display = 'none';
  });
  loanBtn.classList.add('btnClicked');
  supportBtn.classList.remove('btnClicked');
});

supportBtn.addEventListener('click', () => {
  periodSection.style.display = 'none';
  switchStatus.style.display = 'none';
  switchType.style.display = 'block';
  reportSection.style.display = 'block';
  typeSection.style.display = 'block';
  statusSection.style.display = 'none';
  loans.forEach((element) => {
    element.style.display = 'none';
  });
  supports.forEach((element) => {
    element.style.display = 'block';
  });
  supportBtn.classList.add('btnClicked');
  loanBtn.classList.remove('btnClicked');
});

solvedBtn.addEventListener('click', () => {
  periodSection.style.display = 'none';
  switchStatus.style.display = 'block';
  switchType.style.display = 'none';
  reportSection.style.display = 'block';
  typeSection.style.display = 'none';
  statusSection.style.display = 'block';
  solved.forEach((element) => {
    element.style.display = 'block';
  });
  notSolved.forEach((element) => {
    element.style.display = 'none';
  });
  inProgress.forEach((element) => {
    element.style.display = 'none';
  });
  solvedBtn.classList.add('btnClicked');
  inProgressBtn.classList.remove('btnClicked');
  notSolvedBtn.classList.remove('btnClicked');
});

notSolvedBtn.addEventListener('click', () => {
  periodSection.style.display = 'none';
  switchStatus.style.display = 'block';
  switchType.style.display = 'none';
  reportSection.style.display = 'block';
  typeSection.style.display = 'none';
  statusSection.style.display = 'block';
  solved.forEach((element) => {
    element.style.display = 'none';
  });
  notSolved.forEach((element) => {
    element.style.display = 'block';
  });
  inProgress.forEach((element) => {
    element.style.display = 'none';
  });
  notSolvedBtn.classList.add('btnClicked');
  inProgressBtn.classList.remove('btnClicked');
  solvedBtn.classList.remove('btnClicked');
});

inProgressBtn.addEventListener('click', () => {
  periodSection.style.display = 'none';
  switchStatus.style.display = 'block';
  switchType.style.display = 'none';
  reportSection.style.display = 'block';
  typeSection.style.display = 'none';
  statusSection.style.display = 'block';
  solved.forEach((element) => {
    element.style.display = 'none';
  });
  notSolved.forEach((element) => {
    element.style.display = 'none';
  });
  inProgress.forEach((element) => {
    element.style.display = 'block';
  });
  inProgressBtn.classList.add('btnClicked');
  notSolvedBtn.classList.remove('btnClicked');
  solvedBtn.classList.remove('btnClicked');
});


const filterBtn = document.querySelector('#btn-period');
const maxDate = document.querySelector('#max-date');
const minDate = document.querySelector('#min-date');
const periodResult = document.querySelector('.period-result');
const list = document.querySelector('.ticket-list');
const error = document.querySelector('.error');

periodResult.style.display = 'none';

filterBtn.addEventListener('click', () => {
  if (maxDate && minDate) {
    const maxPeriod = maxDate.value;
    const minPeriod = minDate.value;
    const data = {
      minPeriod, maxPeriod,
    };
    fetch('/report', {
      method: 'POST',
      credentials: 'same-origin',
      headers: { 'Content-Type': 'application/json; charset=utf-8' },
      body: JSON.stringify(data),
    })
      .then(response => response.json())
      .then((response) => {
        if (response.Error) {
          swal('خطأ', response.Error, 'error');
          periodResult.style.display = 'none';
        } else {
          return response.map((element) => {
            error.textContent = '';
            periodResult.style.display = 'block';
            const tablerow = document.createElement('tr');
            const myDate = element.ticket_date.split('T')[0];

            const ticketNo = createElement('td', 'ticket-no', element.ticket_no);
            const date = createElement('td', 'date', myDate);
            const employee = createElement('td', 'employee', element.employee);
            const subject = createElement('td', 'desc', element.subject);
            const desc = createElement('td', 'desc', element.technical_desc);
            const status = createElement('td', 'status', element.status_type);
            const type = createElement('td', 'type', element.type);
            const problem = createElement('td', 'problem', element.problem_type);
            const itEmployee = createElement('td', 'it_employee', element.it_employee);
            const duration = createElement('td', 'duration', element.duration);

            list.appendChild(tablerow);
            tablerow.appendChild(ticketNo);
            tablerow.appendChild(date);
            tablerow.appendChild(employee);
            tablerow.appendChild(subject);
            tablerow.appendChild(desc);
            tablerow.appendChild(status);
            tablerow.appendChild(type);
            tablerow.appendChild(problem);
            tablerow.appendChild(itEmployee);
            tablerow.appendChild(duration);
          });
        }
      })
      .catch((error) => {
        swal('Sorry', error.message, 'error');
      });
  }
});
