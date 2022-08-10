let captcha;
let alphabets = "AaBbCcDdEeFfGgHhIiJjKkLlMmNnOoPpQqRrSsTtUuVvWwXxYyZz";
let status = document.getElementById('status');
status.innerText = "Gerador de Captcha";
generate = () => {
    let first = alphabets[Math.floor(Math.random() * alphabets.length)];
    let second = Math.floor(Math.random() * 10);
    let third = Math.floor(Math.random() * 10);
    let fourth = alphabets[Math.floor(Math.random() * alphabets.length)];
    let fifth = alphabets[Math.floor(Math.random() * alphabets.length)];
    let sixth = Math.floor(Math.random() * 10);
    captcha = first.toString()+second.toString()+third.toString()+fourth.toString()+
    fifth.toString()+sixth.toString();
    document.getElementById("generated-captcha").value = captcha;
    document.getElementById("entered-captcha").value = '';
    status.innerText= "Gerador de Captcha";
}

check = () => {
    let userValue = document.getElementById("entered-captcha").value;
    console.log(captcha);
    console.log(userValue);
    if(userValue == captcha){
        status.innerText = "Correto!"
    } else {
        status.innerText = "Tentar novamente!"
        document.getElementById("entered-captcha").value = '';
    }
}