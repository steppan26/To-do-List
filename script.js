const listsContainer = document.querySelector('[data-list]')
const newListForm = document.querySelector('[data-new-list-form]')
const newListInput = document.querySelector('[data-new-list-input]')
const deleteListBtn = document.querySelector('[data-delete-list-btn]')
const listDisplaySection = document.querySelector('[data-list-display-section]')
const listTitleElement = document.querySelector('[data-list-title]')
const listCountElement = document.querySelector('[data-list-count]')
const tasksContainer = document.querySelector('[data-tasks]')
const taskTemplate = document.getElementById('task-item-template')


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

function createList(name) {
    console.log(name)
    return { id: Date.now().toString(), name: name, tasks: [] }
}

function save() {
    localStorage.setItem(LOCAL_STORAGE_LIST_KEY,JSON.stringify(lists))
    localStorage.setItem(LOCAL_STORAGE_SELECTED_LIST_ID_KEY,JSON.stringify(selectedListId))

}

function render() {
    clearElement(listsContainer)
    renderLists()
    const selectedList = lists.find(list => list.id === selectedListId)
    if(selectedListId === null){
        listDisplaySection.style.display = 'none'
    } else {
        listDisplaySection.style.display = ''
        listTitleElement.innerText = selectedList.name
        renderTaskCount(selectedList)
        clearElement(tasksContainer)
        renderTasks(selectedList)
    }
}

function renderTasks(selectedList){
    selectedList.tasks.forEach(task => {
        const taskElement = document.importNode(taskTemplate.content, true)
        const checkbox = taskElement.querySelector('input')
        checkbox.id = task.id
        checkbox.checked = task.complete
        const label = taskElement.querySelector('label')
        label.htmlFor = task.id
        label.append(task.name)
        tasksContainer.appendChild(taskElement)
    })
}

function renderTaskCount(selectedList){
    const incompleteTasks = selectedList.tasks.filter(task => !task.complete).length
    const taskString = incompleteTasks === 1? 'task' : 'tasks' // to be used if decided for lengthier wording
    listCountElement.innerText = `${incompleteTasks} left`
}

function renderLists(){
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

function saveAndRender() {
    save()
    render()
}

function clearElement(element) {
    while (element.firstChild) {
        element.removeChild(element.firstChild)
    }
}

render()