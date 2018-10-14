/* global document fetch swal window */
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

const img = 'http://qattanfoundation.org/sites/all/themes/qf/logo.svg';

// Delete Button
const deleteInventoryButtons = document.querySelectorAll('.deleteInventoryButton');

deleteInventoryButtons.forEach((button) => {
  button.addEventListener('click', (e) => {
    const obj = {
      inventoryId: button.id,
    };
    fetch('/inventory', ({
      method: 'DELETE',
      credentials: 'same-origin',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(obj),
    })).then(res => res.json())
      .then((res) => {
        if (res.Error) {
          swal({
            dangerMode: true,
            title: 'فشلت العملية',
            text: res.Error,
            icon: img,
            button: 'أعد المحاولة',
          });
        } else {
          setTimeout(() => {
            window.location = '/inventory';
          }, 3000);
          swal({
            sucessMode: true,
            title: 'النتيجة',
            text: res.result,
            icon: img,
            button: 'حسـناً',
          });
        }
      })
      .catch((error) => {
        swal('خطأ ما', error.message, 'error');
      });
  });
});
// search classes
const searchBrand = document.querySelector('.searchBrand');
const searchDevice = document.querySelector('.searchDevice');

const date = new Date();
const datestring = `${(`0000${date.getFullYear()}`).slice(-4)}-${(`00${date.getMonth() + 1}`).slice(-2)}-${(`00${date.getDate()}`).slice(-2)}`;
purchaseDate.value = datestring;

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
// SEARCH Section was terminated BECAUSE Of Time 
// searchBrand.addEventListener('click', (e) => {
//   console.log(searchBrand.value);
// });
// searchDevice.addEventListener('click', (e) => {
//   console.log(e.target.value);
// });

// Add Inventory Button Event Listener
addInventButton.addEventListener('click', () => {
  if (purchaseDate.value == '' || inventoryId.value == '')  swal({
    dangerMode: true,
    title: 'فشلت العملية',
    text: 'أرجوك أدخل القيم الفارغة ',
    icon: img,
    button: 'أعد المحاولة',
  });

  else {
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
          swal({
            dangerMode: true,
            title: 'فشلت العملية',
            text: res.Error,
            icon: img,
            button: 'أعد المحاولة',
          });
        } else {
          setTimeout(() => {
            window.location = '/inventory';
          }, 3000);
          swal({
            title: 'تمت العملية:',
            text: res.result,
            icon: img,
            button: 'حسناً',
          });
        }
      })
      .catch((error) => {
        swal({
          dangerMode: true,
          title: 'فشلت العملية',
          text: error.message,
          icon: img,
          button: 'أعد المحاولة',
        });
      });
  }
});
