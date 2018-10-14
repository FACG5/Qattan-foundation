/* global document fetch window */
const name = document.querySelector('.name');
const password = document.querySelector('.password');
const errMsg = document.querySelector('.errMsg');
const signButton = document.querySelector('.signButton');

const img = 'http://qattanfoundation.org/sites/all/themes/qf/logo.svg';

const collectData = () => ({
  username: name.value,
  password: password.value,
});

const checkName = () => {
  if (name.value.trim().length === 0) {
    errMsg.textContent = ('أرجوك أدخل اسم المستخدم');
    return false;
  }
  errMsg.textContent = ('');
  return true;
};

const checkPw = () => {
  if (password.value.trim().length === 0) {
    errMsg.textContent = ('أرجوك أدخل كلمة المرور');
    return false;
  }
  errMsg.textContent = ('');
  return true;
};

name.addEventListener('focusout', checkName);
password.addEventListener('focusout', checkPw);


signButton.addEventListener('click', () => {
  if (checkName() && checkPw()) {
    fetch('/login', ({
      method: 'POST',
      credentials: 'same-origin',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(collectData()),
    })).then(res => res.json())
      .then((res) => {
        if (res.Error) {
          errMsg.textContent = res.Error;
        } else {
          setTimeout(() => {
            window.location = res.result;
          }, 3000);
          swal({
            successMode: true,
            title: 'مرحبا',
            text: ' أهلاً بك',
            icon: img,
            button:'اهلا',
          });
        }
      })
      .catch(() => {
        errMsg.textContent = 'هنالك خطأ ما ! ';
      });
  } else {
    errMsg.textContent = ('أرجوك املأ الحقول الفارغة ');
  }
});
