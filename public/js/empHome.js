/* global document fetch */
// for the animated menue bar icon

function move(x) {
  x.classList.toggle('change');
}

// for the tab section
function openTab(evt, status) {
  const tabcontent = document.getElementsByClassName('content');
  for (var i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = 'none';
  }

  const tabBtn = document.getElementsByClassName('tab-btn');
  for (i = 0; i < tabBtn.length; i++) {
    tabBtn[i].className = tabBtn[i].className.replace(' active', '');
  }

  document.getElementById(status).style.display = 'block';
  evt.currentTarget.className += ' active';
}

// for the add ticket page
const menu = document.getElementsByClassName('overlay')[0];
const show = () => {
  menu.classList.toggle('change');
};

// add ticket tabs
const employeeName = 'MohAmmed';
const employeeDep = 'information technology';
const probType = document.querySelector('#ptype');
const tSubject = document.querySelector('#subject');
const tType = document.querySelector('#type');
const tPriority = document.querySelector('#priority');
const tDuration = document.querySelector('#duration');
const pdesc = document.querySelector('#pdesc');
const btnAdd = document.querySelector('#btn-add');
const succMsg = document.querySelector('.msg');
const error = document.querySelector('.error');


btnAdd.addEventListener('click', (e) => {
  e.preventDefault();
  if (employeeName && employeeDep && probType && tSubject && tType && tPriority && tDuration && pdesc) {
    const employeeC = employeeName;
    const departmentC = employeeDep;
    const problemTypeC = probType.value;
    const problemDescC = pdesc.value;
    const subjectC = tSubject.value;
    const duration = tDuration.value;
    const typeC = tType.value;
    const priorityC = tPriority.value;
    
    const employee = employeeC.toLowerCase();
    const department = departmentC.toLowerCase();
    const problemType = problemTypeC.toLowerCase();
    const problemDesc = problemDescC.toLowerCase();
    const subject = subjectC.toLowerCase();
    const type = typeC.toLowerCase();
    const priority = priorityC.toLowerCase();

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
      .then(() => {
        succMsg.textContent = 'NEW TICKET ADDED SUCCESSFULLY !';
      })
      .catch(() => {
        error.textContent = 'THERE IS ERROR';
      });
  }
});


//// Support

const empName = 'MohAmmed';
const empDep = 'information technology';
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
  e.preventDefault();
  if (empName && empDep && pType && tSub && ticketType && ticketPriority && ticketDuration && problemdesc) {
    const empC = empName;
    const depC = empDep;
    const pTypeC = pType.value;
    const pDescC = problemdesc.value;
    const subC = tSub.value;
    const duration = ticketDuration.value;
    const tTypeC = ticketType.value;
    const priorC = ticketPriority.value;
    
    const employee = empC.toLowerCase();
    const department = depC.toLowerCase();
    const problemType = pTypeC.toLowerCase();
    const problemDesc = pDescC.toLowerCase();
    const subject = subC.toLowerCase();
    const type = tTypeC.toLowerCase();
    const priority = priorC.toLowerCase();

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
      .then(() => {
        Msg.textContent = 'NEW TICKET ADDED SUCCESSFULLY !';
      })
      .catch(() => {
        errMsg.textContent = 'THERE IS ERROR';
      });
  }
});