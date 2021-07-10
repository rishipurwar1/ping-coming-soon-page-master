const input = document.querySelector('input');
const btn = document.querySelector('button');
const small = document.querySelector('small');

btn.addEventListener('click', () => {
    if (input.value == '') {
        small.classList.add('error')
        input.classList.add('error')
    }
    const valid = validateEmail(input.value);
    if (!valid) {
        small.classList.add('error')
        input.classList.add('error')
    }
})

function validateEmail(email) {
    const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
}