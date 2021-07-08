const pick = (string) => document.querySelector(string)
const newTag = (string) => document.createElement(string)
const pickAll = (string) => document.querySelectorAll(string)

document.addEventListener("DOMContentLoaded", () => {
    createForm()
    fetchAllMonsters()
})

function fetchAllMonsters() {
    fetch("http://localhost:3000/monsters")
    .then(resp => resp.json())
    .then(json => json.forEach(renderFirstPage))
}

function createForm() {
    pick("#create-monster").append((createNewMonster()))
}

function createNewMonster() {
    let newForm = newTag("form")
    let inputName = newTag("input")
    let inputAge = newTag("input")
    let inputDesc = newTag("input")
    let buttonForm = newTag("button")

    newForm.id = "create-form"
    inputName.id = "name"
    inputName.name = "name"
    inputName.placeholder = "name..."

    inputAge.id = "age"
    inputAge.name = "age"
    inputAge.placeholder = "age..."

    inputDesc.id = "description"
    inputDesc.name = "description"
    inputDesc.placeholder = "description..."

    buttonForm.textContent = "create"

    newForm.append(inputName, inputAge, inputDesc, buttonForm)
    
    // return (`
    
    // <form id="create-form">  
    //     <input id="inputName" name="name" placeholder="name..."/> 
    //     <input id="age" name="age" placeholder="age..."/>
    //     <input id="description" name="description" placeholder="description"/>
    //     <button value="Create">Create</button>
    // </form>

    // `)

    newForm.addEventListener("submit", (e) => {
        e.preventDefault()
        let newObj = {
            name: e.target.name.value,
            age: e.target.age.value,
            description: e.target.description.value
            }
        renderMonsterList(newObj)
        e.target.name.value = ""
        e.target.age.value = ""
        e.target.description.value = ""
    })
    return newForm
}

function renderFirstPage(obj) {
    if (obj.id >= 1 && obj.id <= 50) {
        renderMonsterList(obj)
    } 
}


pick("#forward").addEventListener("click", (e) => {
    const lastMonster = e.target.parentElement.children[2].children[49].id
    renderNextPage(lastMonster)
    // debugger
    // if (  ) {
    //     function renderPreviewPage
    // }
})

function renderNextPage(lastMonster) {
    fetch("http://localhost:3000/monsters")
    .then(resp => resp.json())
    .then(json => json.filter(monster => monster.id > lastMonster && monster.id <= (lastMonster + 50)).forEach(renderFirstPage))
}




function renderMonsterList(obj) { 
    let divMonster = newTag("div")
    let pAge = newTag("p")
    let pName = newTag("p")
    let pDescription = newTag("p")

    pAge.textContent = `Age: ${obj.age}`
    pName.textContent = `Name: ${obj.name}`
    pDescription.textContent = `Description: ${obj.description}`
    divMonster.id = obj.id

    divMonster.append(pName, pAge, pDescription)

    pick('#monster-container').append(divMonster)
}

//  <button id="back"><=</button>
//     <button id="forward">=></button>