/* global document fetch window */
const description = document.querySelector('.description');
const employee = document.querySelector('.employee');
const place = document.querySelector('.place');
const warranty = document.querySelector('.warranty');
const processor = document.querySelector('.processor');
const ram = document.querySelector('.ram');
const hd1 = document.querySelector('.hd1');
const hd2 = document.querySelector('.hd2');
const notes = document.querySelector('.notes');
const netport = document.querySelector('.netport');
const status = document.querySelector('.status');
const updateInventButton = document.querySelector('.updateInventButton');

const url = window.location.href;
const splitUrl = url.split('/');
const id = splitUrl[splitUrl.length - 1];

const collectData = () => ({
  description: description.value,
  employee: employee.value,
  place: place.value,
  warranty: warranty.value,
  processor: processor.value,
  ram: ram.value,
  hd1: hd1.value,
  hd2: hd2.value,
  notes: notes.value,
  netport: netport.value,
  status: status.value,
  id,
});


updateInventButton.addEventListener('click', () => {
console.log(collectData());
fetch(`/updateInventoryPage/${id}`, {
    method: 'PUT',
    credentials: 'same-origin',
    headers: { 'Content-Type': 'application/json; charset=utf-8' },
    body: JSON.stringify(collectData()),
  })
    .then(response => response.json())
    .then((response) => {
      // window.location = '/support';
      // console.log("sucess",response);
    })
    .catch((err) => {
      // error.textContent = 'THERE IS ERROR';
      // console.log("errrrror",err);
    });
});
