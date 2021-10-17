const form = document.getElementById('form');
const mail = document.getElementById('mail');
const usr = document.getElementById('name');
const phone = document.getElementById('phone');
const message = document.getElementById('message');

const eR = document.getElementById('er');
const eR2 = document.getElementById('er2')
// const email = document.getElementById('mail').value;

form.addEventListener('submit', (e) => {
    e.preventDefault();
    //mail 
    if (mail.value.length  <= 0) {
        eR.innerText = 'Lütfen Boş Alanları Doldurunuz';
    }
    else if(usr.value.length <=0){
        eR.innerText = 'Lütfen Boş Alanları Doldurunuz';
    }
    else if(phone.value.length <=0){
        eR.innerText = 'Lütfen Boş Alanları Doldurunuz';
    }
    else if(message.value.length <=0){
        eR.innerText = 'Lütfen Boş Alanları Doldurunuz';
    }
   
    else{
        eR.innerText = ''
        eR2.innerText = ''
    }
  

    // //Mail
    // if (document.querySelector('#mail').value.length <= 0) {
    //     mailP.innerText = 'Lütfen Bu Alanı doldurun';
    // }
    // else if (email.indexOf("@") == -1) {

    //     mailP.innerText = 'Lütfen @ Kullanın';
    // }
    // else if (email.value.length >= '0') {
    //     mailP = 'text'
    // }
    // else {
    //     mailP.innerText = '';
    // }
   
    // //User name
    // if (document.querySelector('#ad').value.length <= 0) {
    //     usrP.innerText = 'Lütfen Bu Alanı doldurun';
    // }
    // else {
    //     usrP.innerText = '';
    // }




})


