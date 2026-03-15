const hamBtn = document.querySelector('#menu');
const navigation = document.querySelector('.navigation');

hamBtn.addEventListener('click', () => {
    navigation.classList.toggle('open');
    hamBtn.classList.toggle('open');
});

const currentYearElement = document.querySelector('#currentyear');
const today = new Date();
currentYearElement.innerHTML = today.getFullYear();

const lastModifiedElement = document.querySelector('#lastModified');
lastModifiedElement.innerHTML = `Last Modification: ${document.lastModified}`;