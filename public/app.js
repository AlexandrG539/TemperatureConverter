'use strict'

let tElem = document.getElementById('t');
let convertElem = document.getElementById('convert');
let buttonElem = document.getElementById('start');
let ansElem = document.getElementById('ans');

buttonElem.onclick = async function() {
  const t = tElem.value;
  const convert = convertElem.value;
  if (t == "") {
    alert("Введите данные");
    return;
  }

  let ToSend = {
    t: t,
    convert: convert
  };

  let response = await fetch(`${location.href}convert`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json;charset=utf-8'
    },
    body: JSON.stringify(ToSend)
  });

  let ans = await response.text();
  if (ans == 'null') {
    alert('Недопустимое значение температуры');
    ansElem.value = '';
    return;
  }
  ansElem.value = ans;
};

