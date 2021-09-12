const listsContainer = document.querySelector('[data-list]')
const newListForm = document.querySelector('[data-new-list-form]')
const newListInput = document.querySelector('[data-new-list-input]')

const LOCAL_STORAGE_LIST_KEY = 'task.lists'
let lists = JSON.parse(localStorage.getItem(LOCAL_STORAGE_LIST_KEY)) || []



newListForm.addEventListener('submit', e => {
    e.preventDefault()
    let listName = newListInput.value
    if(listName === null || listName === '') return
    console.log(listName)
    const list = createList(listName)
    lists.push(list)
    newListInput.value = null
    saveAndRender()
})

const createList = (name) => {
    console.log(name)
    return { id: Date.now().toString(), name: name, tasks: [] }
}

const save = () => {
    localStorage.setItem(LOCAL_STORAGE_LIST_KEY,JSON.stringify(lists))
}

const render = () => {
    clearElement(listsContainer)
    lists.forEach(list => {
        const listElement = document.createElement('li')
        listElement.dataset.listId = list.id
        listElement.classList.add('list-name')
        listElement.innerText = list.name
        listsContainer.appendChild(listElement)
    })
}

const saveAndRender = () => {
    save()
    render()
}

const clearElement = (element) => {
    while (element.firstChild) {
        element.removeChild(element.firstChild)
    }
}

render()