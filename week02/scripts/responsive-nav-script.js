const hamBtn = document.querySelector('#menu');
const navigation = document.querySelector('.navigation');

hamBtn.addEventListener('click', () => {
    navigation.classList.toggle('open');
    hamBtn.classList.toggle('open');
});