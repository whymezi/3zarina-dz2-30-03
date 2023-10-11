//PHONE CHECKER

const pInput = document.querySelector('#phone_input')
const pButton = document.querySelector('#phone_button')
const pResult = document.querySelector('#phone_result')

const regExp = /^\+996 [2579]\d{2} \d{2}-\d{2}-\d{2}$/

pButton.addEventListener('click', () => {
    if(regExp.test(pInput.value)){
        pResult.innerHTML = 'TRUE'
        pResult.style.color = 'green'
    }else{
        pResult.innerHTML = 'FALSE'
        pResult.style.color = 'red'
    }
})

