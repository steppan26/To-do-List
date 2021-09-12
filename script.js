const listsContainer = document.querySelector('[data-list]')
const newListForm = document.querySelector('[data-new-list-form]')
const newListInput = document.querySelector('[data-new-list-input]')
const deleteListBtn = document.querySelector('[data-delete-list-btn]')

const LOCAL_STORAGE_LIST_KEY = 'task.lists'
const LOCAL_STORAGE_SELECTED_LIST_ID_KEY = 'task.selectedListId'

let lists = JSON.parse(localStorage.getItem(LOCAL_STORAGE_LIST_KEY)) || []
let selectedListId = JSON.parse(localStorage.getItem(LOCAL_STORAGE_SELECTED_LIST_ID_KEY))

listsContainer.addEventListener('click', e => {
    if(e.target.tagName.toLowerCase() === 'li'){
        selectedListId = e.target.dataset.listId
        saveAndRender()
    }
})

deleteListBtn.addEventListener('click', e => {
    lists = lists.filter(list => list.id !== selectedListId)
    selectedListId = null
    saveAndRender()
})

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
    localStorage.setItem(LOCAL_STORAGE_SELECTED_LIST_ID_KEY,JSON.stringify(selectedListId))

}

const render = () => {
    clearElement(listsContainer)
    lists.forEach(list => {
        const listElement = document.createElement('li')
        listElement.dataset.listId = list.id
        listElement.classList.add('list-name')
        listElement.innerText = list.name
        if(list.id === selectedListId){
            listElement.classList.add('active-list')
        }
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