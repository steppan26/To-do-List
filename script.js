const listsContainer = document.querySelector('[data-list]')
const newListForm = document.querySelector('[data-new-list-form]')
const newListInput = document.querySelector('[data-new-list-input]')
const deleteListBtn = document.querySelector('[data-delete-list-btn]')
const clearCompleteTasksBtn = document.querySelector('[data-clear-complete-tasks-btn]')
const listDisplaySection = document.querySelector('[data-list-display-section]')
const listTitleElement = document.querySelector('[data-list-title]')
const listCountElement = document.querySelector('[data-list-count]')
const tasksContainer = document.querySelector('[data-tasks]')
const taskTemplate = document.getElementById('task-item-template')
const newTaskForm = document.querySelector('[data-new-task-form]')
const newTaskInput = document.querySelector('[data-new-task-input]')
const listsSection = document.querySelector('[data-lists-section]')
const newListMenuBtn = document.querySelector('[data-new-list-menu-btn]')
const tasksBody = document.querySelector('[data-tasks-body]')
const themeSwitcher = document.querySelector('[data-theme-switcher]')
const htmlElement = document.querySelector('[data-html-element]')
const themesArray = [...themeSwitcher.children]






const LOCAL_STORAGE_LIST_KEY = 'task.lists'
const LOCAL_STORAGE_SELECTED_LIST_ID_KEY = 'task.selectedListId'

let lists = JSON.parse(localStorage.getItem(LOCAL_STORAGE_LIST_KEY)) || []
let selectedListId = JSON.parse(localStorage.getItem(LOCAL_STORAGE_SELECTED_LIST_ID_KEY))

newListMenuBtn.addEventListener('click', e => {
    toggleNewListMenu()
})

listsContainer.addEventListener('click', e => {
    if(e.target.tagName.toLowerCase() === 'li'){
        selectedListId = e.target.dataset.listId
        saveAndRender()
    }
})

themeSwitcher.addEventListener('click', e => {
    themeSwitcher.classList.toggle('theme-switcher-open')
})

themesArray.forEach(theme => {
    theme.className = "theme-swatch"
    theme.addEventListener('click', e => {
        console.log(e.target)
        htmlElement.className = theme.id
    })
});

tasksContainer.addEventListener('click', e => {
    if(e.target.tagName.toLowerCase() === 'input'){
        const selectedList = lists.find(list => list.id === selectedListId)
        const selectedTask = selectedList.tasks.find(task => task.id === e.target.id)
        selectedTask.complete = e.target.checked
        save()
        renderTaskCount(selectedList)
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
    const list = createList(listName)
    lists.push(list)
    newListInput.value = null
    toggleNewListMenu()
    saveAndRender()
})

newTaskForm.addEventListener('submit', e => {
    e.preventDefault()
    const taskName = newTaskInput.value
    if(taskName === null || taskName === '') return
    const task = createTask(taskName)
    newTaskInput.value = null
    const selectedList = lists.find(list => list.id === selectedListId)
    selectedList.tasks.push(task)
    saveAndRender()
})

clearCompleteTasksBtn.addEventListener('click', e => {
    const selectedList = lists.find(list => list.id === selectedListId)
    selectedList.tasks = selectedList.tasks.filter(task => !task.complete)
    saveAndRender()
})

function toggleNewListMenu(){
    newListForm.classList.toggle('hidden')
    newListMenuBtn.innerText === '＋' ? newListMenuBtn.innerText = 'Ｘ' : newListMenuBtn.innerText = '＋'

}

function createList(name) {
    return { id: Date.now().toString(), name: name, tasks: [] }
}

function createTask(name){
    return { id: Date.now().toString(), name: name, copmplete: false }

}

function save() {
    localStorage.setItem(LOCAL_STORAGE_LIST_KEY,JSON.stringify(lists))
    localStorage.setItem(LOCAL_STORAGE_SELECTED_LIST_ID_KEY,JSON.stringify(selectedListId))

}

function render() {
    clearLists(listsContainer)
    renderLists()
    const selectedList = lists.find(list => list.id === selectedListId)
    if(selectedListId === null){
        tasksBody.style.display = 'none'
        listTitleElement.innerText = 'No List Selected'
    } else {
        tasksBody.style.display = ''
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

function clearLists(element) {
    while (element.children.length > 1) {
        element.removeChild(element.lastElementChild)
    }
}

function clearElement(element) {
    while (element.firstChild) {
        element.removeChild(element.firstChild)
    }
}

render()