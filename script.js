let userName = document.querySelector(".userName")
let lastName = document.querySelector(".lastName")
let email = document.querySelector(".email")
let password1 = document.querySelectorAll(".password")[ 0]
let password2 = document.querySelectorAll(".password")[1]



let btn = document.querySelector(".btn")

btn.addEventListener("click" , clickMe)



let userNameReg = /^[A-Za-zА-Яа-я\- ]*[^0-9][A-Za-zА-Яа-я\- ]*$/;

let lastNameReg =  /^[A-Za-zА-Яа-я\- ]*[^0-9][A-Za-zА-Яа-я\- ]*$/;

let emailReg = /^[\w\.-]+@[a-zA-Z\d\.-]+\.[a-zA-Z]{2,}$/;
let passwordReg = /^\d+$/;


function clickMe(event){
    event.preventDefault();
    validate(userNameReg, userName);
    validate(lastNameReg, lastName);
    validate(emailReg, email);
    validate(passwordReg, password1);
    validate(passwordReg, password2);
}


function validate(userReg, userValue) {
    if (!userReg.test(userValue.value)) {
        userValue.classList.add("error");
        // alert("У вас ошибка. Пожалуйста, убедитесь в том, что:\n" +
        // "1) В Имени только буквы,\n" +
        // "2) В Фамилии только буквы,\n" +
        // "3) Электронная почта написана правильно,\n" +
        // "4) Пароль состоит только из цифр.");
    } else {
        userValue.classList.remove("error");
    } 
}


