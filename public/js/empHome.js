
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

const probType = document.getElementsByClassName('type')[0];
const probPriority = document.getElementsByClassName('priority')[0];
const problemStat = document.getElementsByClassName('problemStat')[0];
const problemTitle = document.getElementsByClassName('title')[0];
const supportBtn = document.getElementById('submitSupport');

supportBtn.addEventListener('click', (e) => {
  e.preventDefault();
  const obj = {
    employee: 'salwa',
    department: 'qss',
    problemType: probType.value,
    subject: problemTitle.value,
    duration: 1
    technicalDesc: problemStat.value,
    type: 'support',
    priority: probPriority.value,
  };
  // fetch('/addTicket', ({
  //   method: 'POST',
  //   credentials: 'same-origin',
  //   headers: {
  //     'Content-Type': 'application/json',
  //   },
  //   body: JSON.stringify(obj),
  // })).then(res)
});
