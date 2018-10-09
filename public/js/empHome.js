
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
const probType = document.querySelector('#ptype');
const subject = document.querySelector('#subject');
const type = document.querySelector('#type');
const priority = document.querySelector('#priority');
const duration = document.querySelector('#duration');
const pdesc = document.querySelector('#pdesc');
const btnAadd = document.querySelector('#btn-add');

doneBtn.addEventListener('click', (e) => {
  e.preventDefault();
  if (employee && department && problemType && problemDesc && subject&& duration &&technicalDesc &&type && priority){
    const employeeName = 'mohammed';
    const department = 'information technology';
    const problemType = probType.value;
    const textSubject = subject.value;
    const ticketType = type.value;
    const ticketP

  }
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
      .then((response) => {
        error.textContent = 'DONE !';
        window.location = '/loans';
      })
      .catch((err) => {
        error.textContent = 'THERE IS ERROR';
      });
  }
});





// const probType = document.getElementsByClassName('type')[0];
// const probPriority = document.getElementsByClassName('priority')[0];
// const problemStat = document.getElementsByClassName('problemStat')[0];
// const problemTitle = document.getElementsByClassName('title')[0];
// const supportBtn = document.getElementById('submitSupport');

// supportBtn.addEventListener('click', (e) => {
//   const obj = {
//     employee: 'salwa',
//     department: 'qss',
//     problemType: probType.value,
//     subject: problemTitle.value,
//     duration: 1,
//     technicalDesc: problemStat.value,
//     type: 'support',
//     priority: probPriority.value,
//   };
//   fetch('/addTicket', ({
//     method: 'POST',
//     credentials: 'same-origin',
//     headers: {
//       'Content-Type': 'application/json',
//     },
//     body: JSON.stringify(obj),
//   })).then(res)
// });

