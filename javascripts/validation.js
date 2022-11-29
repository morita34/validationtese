function emailValidation() {
  const form = document.getElementById('form');
  const mailform = document.getElementById('email_confirm');
  const element = document.createElement('p')
  const message = document.createTextNode("Eメールが一致しません")  
  const parentElement = document.getElementsByTagName("tbody")[0];
  const target = document.getElementsByTagName("tr")[3];
  mailform.addEventListener('input', e => {
    e.preventDefault();
    if(form.email.value !== form.email_confirm.value) {
      element.appendChild(message);
      element.classList.add("alert");
      mailform.classList.add("mailformbg")
      parentElement.insertBefore(element, target);
    } else {
      element.removeChild(message);
      element.classList.remove("alert");
      mailform.classList.remove("mailformbg")
      element.parentNode.removeChild(element);
      form.input();
    }
  });
};


window.onload = emailValidation();