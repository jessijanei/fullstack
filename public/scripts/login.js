const form = document.querySelector('formGroupExampleInput3')

function checkName(name) {
    myRegex = /[A-Za-z]+/;
    return myRegex.test(name)
}

form.addEventListener("submit", event => {
    const nameInput = document.querySelector('formGroupExampleInput3');
    if (!checkName(nameInput.value)) {
        event.preventDefault();
        alert("Only lowercase or uppercase letters are accepted");
        return;
    }
})