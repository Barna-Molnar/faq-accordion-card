console.log('something')
const questionBtn = document.querySelectorAll('.question__item__question')
// var element = document.querySelector(' … ');
const questionItem = document.querySelector('.question__item')
const answer = document.querySelectorAll('.question__item__answer')




questionBtn.forEach((btn) => {
    btn.addEventListener('click', function () {

        const closestItem = btn.closest('.question__item')
        const cloestAnswer = btn.closest('.collapse')
        closestItem.classList.toggle('height')
        btn.classList.toggle('btnActive')
        // btn.style.color = 'red'

    })
})


