let btnCreate = document.querySelector('.btn-active')
let form = document.querySelector('form')

btnCreate.addEventListener('click', () => {
    fetch('http://localhost:3000/Cards', {
    method: 'POST',
    headers: {
        'Content-Type': "application/json"
    },
    body: JSON.stringify()
}).then(res => alert('Вы удачно создали данные', res))
.catch(err => alert('Проблема создании карточки', err))

})
