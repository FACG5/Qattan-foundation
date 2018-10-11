/* global document fetch swal window */
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

// Mending DOM
const MendDate = document.querySelector('.MendDate');
const type = document.querySelector('.type');
const action = document.querySelector('.action');
const part = document.querySelector('.part');
const descriptionRepair = document.querySelector('.descriptionRepair');
const mendInventButton = document.querySelector('.mendInventButton');

const date = new Date();
  const datestring = ('0000' + date.getFullYear()).slice(-4) + '-' + ('00' + (date.getMonth() + 1)).slice(-2) + '-' + ('00' + date.getDate()).slice(-2);
    MendDate.value = datestring;

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

const collectRepairData = () => ({
  id,
  MendDate: MendDate.value,
  type: type.value,
  action: action.value,
  part: part.value,
  descriptionRepair: descriptionRepair.value,
});

updateInventButton.addEventListener('click', () => {
  fetch(`/updateInventoryPage/${id}`, {
    method: 'PUT',
    credentials: 'same-origin',
    headers: { 'Content-Type': 'application/json; charset=utf-8' },
    body: JSON.stringify(collectData()),
  })
    .then(res => res.json())
    .then((res) => {
      if (res.Error) {
        swal('خطأ ما', res.Error, 'error');
      } else {
        setTimeout(() => {
          window.location = '/inventory';
        }, 3000);
        swal('تم الإضافة', res.result, 'success');
      }
    })
    .catch((error) => {
      swal('خطأ ما', error.message, 'error');
    });
});

// Mending Inventory Section

mendInventButton.addEventListener('click', () => {
  fetch(`/updateInventoryPage/${id}`, {
    method: 'POST',
    credentials: 'same-origin',
    headers: { 'Content-Type': 'application/json; charset=utf-8' },
    body: JSON.stringify(collectRepairData()),
  })
    .then(res => res.json())
    .then((res) => {
      if (res.Error) {
        swal('خطأ ما', res.Error, 'error');
      } else {
        setTimeout(() => {
          window.location = '/inventory';
        }, 3000);
        swal('تم الإضافة', res.result, 'success');
      }
    })
    .catch((error) => {
      swal('خطأ ما', error.message, 'error');
    });
});
