
const signInForm = document.getElementById('signInForm');



signInForm.addEventListener("submit", (e) => {
    e.preventDefault();
    console.log(e.target);
    let email = e.target.email.value;
    let password = e.target.password.value;
    

    let body = {
        email: email,
        password: password
        
    }

    fetch('/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(body)
    }).then(res => res.json()).then(data => {
        console.log(data)
        location.href = "/welcome"
    })
})  

function validateForm() {
    const signUpValidate = document.forms['createAccountForm']['fullname'].value;
    if (signUpValidate == "") {
        alert("Name must be filled out");
        return false;
    }
}