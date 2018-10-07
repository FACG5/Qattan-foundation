
//for the animated menue bar icon

function move(x) {
  x.classList.toggle('change');
}

// for the tab section
function openTab(evt, status) {

  var tabcontent = document.getElementsByClassName("content");
  for (var i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
  }

  var tabBtn = document.getElementsByClassName("tab-btn");
  for (i = 0; i < tabBtn.length; i++) {
    tabBtn[i].className = tabBtn[i].className.replace(" active", "");
  }

  document.getElementById(status).style.display = "block";
  evt.currentTarget.className += " active";
}

// for the add ticket page
const menu = document.getElementsByClassName("overlay")[0];
const show = ()=>{
 menu.classList.toggle('change');
}