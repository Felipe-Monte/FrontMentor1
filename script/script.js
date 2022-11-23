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
            }
            textSpan.innerHTML = item.value

        })
    }

    submit.addEventListener('click', function (e) {
        secondCard.style.display = 'block'
    })

    btnBack.addEventListener('click', function (e) {
        secondCard.style.display = 'none'
    })
}
myScope()
