const input = document.querySelector('#favchap');
const button = document.querySelector('button');
const list = document.querySelector('#list');

button.addEventListener('click', function () {
    if (input.value.trim() === '') {
        input.classList.add('input-error');
        input.focus();
    } else {
        input.classList.remove('input-error');

        const li = document.createElement('li');
        const deleteBtn = document.createElement('button');

        li.textContent = input.value;
        deleteBtn.textContent = '❌';

        li.append(deleteBtn);
        list.append(li);

        input.value = '';
        input.focus();

        deleteBtn.onclick = () => li.remove();
    }
});

input.addEventListener('input', function () {
    if (input.value.trim() !== '') {
        input.classList.remove('input-error');
    }
});

input.addEventListener('keydown', function (event) {
    if (event.key === 'Enter') {
        button.click();
    }
});