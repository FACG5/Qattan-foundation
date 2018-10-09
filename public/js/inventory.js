/* global document fetch window */
const inventoryId = document.querySelector('.inventoryId');
const device = document.querySelector('.device');
const name = document.querySelectorAll('.name')[1];
const brand = document.querySelector('.brand');
const description = document.querySelector('.description');
const cdkey = document.querySelector('.cdkey');
const employee = document.querySelector('.employee');
const place = document.querySelector('.place');
const vendor = document.querySelector('.vendor');
const priceUsd = document.querySelector('.priceUsd');
const priceNis = document.querySelector('.priceNis');
const purchaseDate = document.querySelector('.purchaseDate');
const warranty = document.querySelector('.warranty');
const serialNo = document.querySelector('.serialNo');
const processor = document.querySelector('.processor');
const ram = document.querySelector('.ram');
const hd1 = document.querySelector('.hd1');
const hd2 = document.querySelector('.hd2');
const notes = document.querySelector('.notes');
const netport = document.querySelector('.netport');
const status = document.querySelector('.status');
const addInventButton = document.querySelector('.addInventButton');

console.log(name);

const collectData = () => ({
  inventoryId: inventoryId.value,
  device: device.value,
  name: name.value,
  brand: brand.value,
  description: description.value,
  cdkey: cdkey.value,
  employee: employee.value,
  place: place.value,
  vendor: vendor.value,
  priceUsd: priceUsd.value,
  priceNis: priceNis.value,
  purchaseDate: purchaseDate.value,
  warranty: warranty.value,
  serialNo: serialNo.value,
  processor: processor.value,
  ram: ram.value,
  hd1: hd1.value,
  hd2: hd2.value,
  notes: notes.value,
  netport: netport.value,
  status: status.value,
});

addInventButton.addEventListener('click', () => {

  fetch('/inventory', ({
    method: 'POST',
    credentials: 'same-origin',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(collectData()),
  })).then(res => res.json())
    .then((res) => {
      if (res.Error) {
        console.log(res.Error);
        // errMsg.textContent = res.Error;
      } else {
        console.log(res);
        // window.location = res.result;
      }
    })
    .catch((error) => {
      console.log(error);
      // errMsg.textContent = 'هنالك خطأ ما ! ';
    });
});
