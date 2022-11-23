function myScope() {

    const list = document.querySelectorAll('li')
    const submit = document.querySelector('.btn')
    const secondCard = document.querySelector('.container-second-card')
    const btnBack = document.querySelector('.btn-second')
    const textSpan = document.querySelector('.result')

    for (let i = 0; i < list.length; i++) {
        const item = list[i]
        item.addEventListener('click', function (e) {
            for (let j = 0; j < list.length; j++) {
                const color = list[j] === item ? '#FC7614' : '#262E38'
                list[j].style.backgroundColor = color
                list[j].classList.add('clicou')
            }
            textSpan.innerHTML = item.value
        })
    }

    submit.addEventListener('click', function (e) {
        for (let f = 0; f < list.length; f++) {
            if (list[f].classList.contains('clicou')) {
                secondCard.style.display = 'block'
            } else {
                return alert('Selecione um elemento')
            }
        }
    })

    btnBack.addEventListener('click', function (e) {
        secondCard.style.display = 'none'
    })
}

myScope()
