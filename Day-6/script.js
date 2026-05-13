const input = document.getElementById('inp-note')
const addBtn = document.getElementById('add-note')
const container = document.querySelector('.container')

const notes = JSON.parse(localStorage.getItem('notes')) || []

for (let index = 0; index < notes.length; index++) {
    const note = document.createElement('div')
    note.classList.add('note')
    note.dataset.index = index

    const text = document.createElement('p')
    text.textContent = notes[index]

    const delBtn = document.createElement('button')
    delBtn.classList.add('delete')
    delBtn.textContent = 'X'

    container.appendChild(note)
    note.appendChild(text)
    note.appendChild(delBtn)
}

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
    notes.push(input.value)

    localStorage.setItem('notes', JSON.stringify(notes))
})

container.addEventListener('click', () => {
    if(event.target.classList.contains('delete')){
        event.target.parentElement.remove()
    }

    const idx = event.target.parentElement.dataset.index  
    notes.splice(idx, 1)
    localStorage.setItem('notes', JSON.stringify(notes))
})