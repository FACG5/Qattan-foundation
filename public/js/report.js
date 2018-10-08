/* global document fetch */

const periodBtn = document.querySelector('#period-button');
const statusBtn = document.querySelector('#status-button');
const typeBtn = document.querySelector('#type-button');

const periodSection = document.querySelector('.period-section');
const reportSection = document.querySelector('.filter');

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
const notSolved = document.querySelectorAll('.not');
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
});

statusBtn.addEventListener('click', () => {
  periodSection.style.display = 'none';
  switchStatus.style.display = 'block';
  switchType.style.display = 'none';
});

typeBtn.addEventListener('click', () => {
  periodSection.style.display = 'none';
  switchStatus.style.display = 'none';
  switchType.style.display = 'block';
});

loanBtn.addEventListener('click', () => {
  periodSection.style.display = 'none';
  switchStatus.style.display = 'none';
  switchType.style.display = 'block';
  reportSection.style.display = 'block';

  loans.forEach((element) => {
    element.style.display = 'block';
  });

  supports.forEach((element) => {
    element.style.display = 'none';
  });
});

supportBtn.addEventListener('click', () => {
  periodSection.style.display = 'none';
  switchStatus.style.display = 'none';
  switchType.style.display = 'block';
  reportSection.style.display = 'block';
  loans.forEach((element) => {
    element.style.display = 'none';
  });
  supports.forEach((element) => {
    element.style.display = 'block';
  });
});

solvedBtn.addEventListener('click', () => {
  periodSection.style.display = 'none';
  switchStatus.style.display = 'block';
  switchType.style.display = 'none';
  reportSection.style.display = 'block';
  solved.forEach((element) => {
    element.style.display = 'block';
  });
  notSolved.forEach((element) => {
    element.style.display = 'none';
  });
  inProgress.forEach((element) => {
    element.style.display = 'none';
  });
});

notSolvedBtn.addEventListener('click', () => {
  periodSection.style.display = 'none';
  switchStatus.style.display = 'block';
  switchType.style.display = 'none';
  reportSection.style.display = 'block';
  solved.forEach((element) => {
    element.style.display = 'none';
  });
  notSolved.forEach((element) => {
    element.style.display = 'block';
  });
  inProgress.forEach((element) => {
    element.style.display = 'none';
  });
});

inProgress.addEventListener('click', () => {
  periodSection.style.display = 'none';
  switchStatus.style.display = 'block';
  switchType.style.display = 'none';
  reportSection.style.display = 'block';
  solved.forEach((element) => {
    element.style.display = 'none';
  });
  notSolved.forEach((element) => {
    element.style.display = 'none';
  });
  inProgress.forEach((element) => {
    element.style.display = 'block';
  });
});


const filterBtn = document.querySelector('#btn-period');
const maxDate = document.querySelector('#max-date');
const minDate = document.querySelector('#min-date');
const periodResult = document.querySelector('.ticket-list');
const error = document.querySelector('.error');

const createElement = ((tagName, tagClassName, textContent) => {
  const element = document.createElement(tagName);
  element.classList.add(tagClassName);
  element.textContent = (textContent);
  return element;
});

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
        if (response.msg) {
          error.textContent = response.msg;
        } else {
          response.map((element) => {
            const myDate = element.ticket_date.split('T')[0];
            const ticketNo = createElement('h4', 'ticket-no', element.ticket_no);
            const date = createElement('h5', 'date', myDate);
            const employee = createElement('h6', 'employee', element.employee);
            const subject = createElement('h6', 'desc', element.subject);
            const desc = createElement('h6', 'desc', element.technical_desc);
            const status = createElement('h6', 'status', element.status_type);
            const type = createElement('h6', 'type', element.type);
            const problem = createElement('h6', 'problem', element.problem_type);
            periodResult.appendChild(ticketNo);
            periodResult.appendChild(date);
            periodResult.appendChild(employee);
            periodResult.appendChild(subject);
            periodResult.appendChild(desc);
            periodResult.appendChild(status);
            periodResult.appendChild(type);
            periodResult.appendChild(problem);
          });
        }
      })
      .catch((err) => {
        error.textContent = 'THERE IS AN ERROR';
      });
  }
});
