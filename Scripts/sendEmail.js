import validateEmail from './validateEmail.js';

const sendEmail = (event) => {
    // const inputValue = event.target.parentElement.children[0];
    const inputValue = "manh@gmail.com";
    if (validateEmail(inputValue)) {
        alert(`Đã gửi đến ${inputValue}`);
    }
    else {
        alert("Please enter valid email!");
    }
}

export default sendEmail;