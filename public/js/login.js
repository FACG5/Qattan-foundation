/* global document */
/* global window */
const name = document.querySelector('.name');
const password = document.querySelector('.password');
const errMsg = document.querySelector('.errMsg');
const signButton = document.querySelector('.signButton');

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
          window.location = '/';
        }
      })
      .catch(() => {
        errMsg.textContent = 'هنالك خطأ ما ! ';
      });
  } else {
    errMsg.textContent = ('أرجوك املأ الحقول الفارغة ');
  }
});
