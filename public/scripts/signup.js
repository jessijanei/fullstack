const form = document.getElementById('createAccountForm');



form.addEventListener("submit", (e) => {
    e.preventDefault();
    console.log(e.target);
    let fullname = e.target.fullname.value;
    let email = e.target.email.value;
    let password = e.target.password.value;
    let address = e.target.address.value
    let phone_number = e.target.phone_number.value
    let dob = e.target.dob.value
    

    let body = {
        fullname: fullname,
        password: password,
        email: email,
        address: address,
        phone_number: phone_number,
        dob: dob
    }

    fetch('/signup', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(body)
    }).then(res => res.json()).then(data => {
        console.log(data) 
            if (data.error) {
              let errors = data.error.map((error) => {
                  return `<p>${error}</p>`
              })
            }
        
        
    })
})  

