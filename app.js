let buttons = document.querySelectorAll('button');
let tasks = document.querySelector('.Alltask');

buttons.forEach(btn => {
    btn.addEventListener('click', e => {
        if (e.target.id === 'add') {
            let giventask = document.querySelector('input');
            let additionalDiv = document.createElement('div');
            let span = document.createElement('span');
            additionalDiv.setAttribute('class', 'andar');
            let remove = document.createElement('button');
            remove.setAttribute('class', "fa-regular fa-trash-can");
            remove.setAttribute('id', 'remove');

            if (giventask.value === '') {
                alert("Ajeeb Banda hai😑");
            } else {
                span.textContent = giventask.value;
                console.log(giventask.value);
                additionalDiv.appendChild(span);
                additionalDiv.appendChild(remove);
                tasks.appendChild(additionalDiv);
            }
            tasks.addEventListener('click', function (e) {
                if (e.target && e.target.id === 'remove') {
                    e.target.parentNode.remove();
                }
            });
            additionalDiv.addEventListener('click', function (e) {
                if (e.target && e.target.tagName === 'SPAN') {
                    e.target.classList.toggle('completed');
                }
            });
            giventask.value = '';
        }
    });
});
