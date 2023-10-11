//GMAIL

const input = document.querySelector('#gmail_input')
const checker = document.querySelector('#gmail_button')
const result = document.querySelector('#gmail_result')

const regExp = /^[a-z/\d{2, 4}]+[@]+[gmail.com]+$/ig

checker.onclick = () => {
    if(regExp.test(input.value)){
        result.innerHTML = 'true'
        result.style.color = 'green'
    }else{
        result.innerHTML = 'false'
        result.style.color = 'red'
    }
}


//BALL

const ball = document.querySelector('.child_block')

let goBall1 = 0
let goBall2 = 0

const animation = () => {
    
    if(goBall1 < 90 && goBall2 === 0){
        goBall1+=1
        ball.style.left = `${goBall1}%`
        setTimeout(animation, 1)
    }else if(goBall1 >= 90 && goBall2 < 90){
        goBall2+=1
        ball.style.top = `${goBall2}%`
        setTimeout(animation, 10)
    }else if(goBall1 > 0 && goBall2 > 0){
        goBall1-=1
        ball.style.left = `${goBall1}%`
        setTimeout(animation, 1)
    }else if(goBall1 === 0 && goBall2 > 0){
        goBall2-=1
        ball.style.top = `${goBall2}%`
        setTimeout(animation, 10)
    }
}
animation()