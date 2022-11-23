
const list = document.querySelectorAll('li')
const submit = document.querySelector('.btn')
const secondCard = document.querySelector('.container-second-card')
const textSpan = document.querySelector('.result')


for (let i = 0; i < list.length; i++) {
   const item = list[i]
   item.addEventListener('click' , function(){
       for (let j = 0; j < list.length; j++) {
           const color = list[j] === item ? '#FC7614' : '#262E38'
           list[j].style.backgroundColor = color
       }
       
       textSpan.innerHTML = item.value
   })
}

submit.addEventListener('click' , function(){
    secondCard.style.display = 'block' 
})