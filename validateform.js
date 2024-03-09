var nameError=document.getElementById('name-error')
var lnameError=document.getElementById('lname-error')
var passwordError=document.getElementById('password-error')
var CpasswordError=document.getElementById('Cpassword-error')
var emailError=document.getElementById('email-error')
var phoneError=document.getElementById('phone-error')
var messageError=document.getElementById('message-error')
var submitError=document.getElementById('submit-error')

function validatefirstName(){
    var firname=document.getElementById('fname').value;
    if(firname.length == 0){
        nameError.innerHTML='Name is required';
        return false;
    }
    if(!firname.match(/^[A-Za-z]*\s{1}[A-Za-z]*$/)){
        nameError.innerHTML='Write Full Name';
        return false;
    }
    nameError.innerHTML='<i class="fa-sharp fa-solid fa-circle-check"></i>';
    return true;
}
function validateLastName(){
    var lastname=document.getElementById('lname').value;
    if(lastname.length == 0){
        lnameError.innerHTML='Name is required';
        return false;
    }
    if(!lastname.match(/^[A-Za-z]*\s{1}[A-Za-z]*$/)){
        lnameError.innerHTML='Write Full Name';
        return false;
    }
    lnameError.innerHTML='<i class="fa-sharp fa-solid fa-circle-check"></i>';
    return true;
}
function validatephone(){
    var phoneNo=document.getElementById('phone').value;
    if(phoneNo.length == 0){
        phoneError.innerHTML='Phone no is required';
        return false;
    }
    if(phoneNo.length!==11){
        phoneError.innerHTML='Phone no should be 10 digits!';
        return false;
    }
    if(!phoneNo.match(/^[0-9]{11}$/)){
    phoneError.innerHTML='Only digits please!';
    return false;
}
phoneError.innerHTML='<i class="fa-sharp fa-solid fa-circle-check"></i>';
return true;
}
function validateemail(){
    var Email=document.getElementById('email').value;
    if(Email.length == 0){
        emailError.innerHTML='email is required';
        return false;
    }
    if(!Email.match(/^[A-Za-z\._\-[0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)){
    emailError.innerHTML='Invalid Email!';
    return false;
}
emailError.innerHTML='<i class="fa-sharp fa-solid fa-circle-check"></i>';
return true;
}
function validatemessage(){
    var Message=document.getElementById('message').value;
    var required=30;
    var left =required-Message.length;
    if(left > 0){
        messageError.innerHTML=left + 'more characters required';
        return false;
    }
messageError.innerHTML='<i class="fa-sharp fa-solid fa-circle-check"></i>';
return true;
}
function validatepassword(){
    var Password=document.getElementById('password').value;
    if(Password.length== 0){
        passwordError.innerHTML= 'password is required';
        return false;
    }
    if(Password.length <=5){
        passwordError.innerHTML='password is too short!';
        return false;
    }
    if(Password.length >15){
        passwordError.innerHTML='password is too long!';
        return false;
    }
    if(!Password.match(/^[A-Za-z]\w{7,14}$/)){
        passwordError.innerHTML='password is too easy';
        return false;
    }
passwordError.innerHTML='<i class="fa-sharp fa-solid fa-circle-check"></i>';
return true;
}
function validateconfirmpassword(){
    var Cpassword=document.getElementById('cpassword').value;
    var Password=document.getElementById('password').value;
    if(Cpassword.length== 0){
        CpasswordError.innerHTML= 'password is required';
        return false;
    }
    if(Password!=Cpassword){
        CpasswordError.innerHTML='password doesnot match!';
        return false;
    }
CpasswordError.innerHTML='<i class="fa-sharp fa-solid fa-circle-check"></i>';
return true;
}
function validateForm(){
    if(!validatefirstName() || !validateLastName() || !validatepassword() || !validateconfirmpassword() || !validateemail() || !validatemessage() || !validatephone()){
        submitError.style.display='block';
        submitError.innerHTML="Please fix error to submit!";
        setTimeout(function(){submitError.style.display='none';},3000);
        return false;
    }
}
