const input = document.getElementById('inp-note')
const addBtn = document.getElementById('add-note')
const container = document.querySelector('.container')

addBtn.addEventListener('click', () => {
    const note = document.createElement('div')
    note.classList.add('note')

    const text = document.createElement('p')
    text.textContent = input.value

    const delBtn = document.createElement('button')
    delBtn.classList.add('delete')
    delBtn.textContent = 'X'

    container.appendChild(note)
    note.appendChild(text)
    note.appendChild(delBtn)
})

container.addEventListener('click', () => {
    if(event.target.classList.contains('delete')){
        event.target.parentElement.remove()
    }
})