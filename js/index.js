const pick = (string) => document.querySelector(string);
const newTag = (string) => document.createElement(string);
const pickAll = (string) => document.querySelectorAll(string);

let currentPage = 1;

document.addEventListener("DOMContentLoaded", () => {
  createForm()
  fetchLimitedDogs()
  
    pick("#create-form").addEventListener("submit", (e) => {
      e.preventDefault()
      console.log(e)
      addNewMonster(e)
    })  
  }
)

function createForm() {
  pick("#create-monster").append(createNewMonster());
}

function addNewMonster(e) {
  console.log(e.target)
  let newObj = {
    name: e.target.name.value,
    age: e.target.age.value,
    description: e.target.description.value
  }
  renderMonsterList(newObj)
  e.target.name.value = ""
  e.target.age.value = ""
  e.target.description.value = ""
}


function fetchLimitedDogs() {
  fetch(`http://localhost:3000/monsters/?_limit=50&_page=${currentPage}`)
  .then(resp => resp.json())
  .then(json => {
    pick("#monster-container").textContent = "";
    json.forEach(renderMonsterList)
  })
}

function renderMonsterList(obj) {
  let divMonster = newTag("div");
  let pAge = newTag("p");
  let pName = newTag("p");
  let pDescription = newTag("p");

  pAge.textContent = `Age: ${obj.age}`;
  pName.textContent = `Name: ${obj.name}`;
  pDescription.textContent = `Description: ${obj.description}`;
  divMonster.id = obj.id;

  divMonster.append(pName, pAge, pDescription);

  pick("#monster-container").append(divMonster);
}

pick("#forward").addEventListener("click", () => {
  currentPage++;
  fetchLimitedDogs();
})

pick("#back").addEventListener("click", () => {
  currentPage--;
  fetchLimitedDogs()
})


function createNewMonster() {
  let newForm = newTag("form");
  let inputName = newTag("input");
  let inputAge = newTag("input");
  let inputDesc = newTag("input");
  let buttonForm = newTag("button");

  newForm.id = "create-form";
  inputName.id = "name";
  inputName.name = "name";
  inputName.placeholder = "name...";

  inputAge.id = "age";
  inputAge.name = "age";
  inputAge.placeholder = "age...";

  inputDesc.id = "description";
  inputDesc.name = "description";
  inputDesc.placeholder = "description...";

  buttonForm.textContent = "create";

  newForm.append(inputName, inputAge, inputDesc, buttonForm);
  return newForm
}










// let currentPage = 1;

// document.addEventListener("DOMContentLoaded", () => {
//   createForm();
//   fetchAllMonsters();
//   pick("#forward").addEventListener("click", () => {
//     currentPage++;
//     fetchAllMonsters();
//   });
// });

// function fetchAllMonsters() {
//   fetch(`http://localhost:3000/monsters/?_limit=50&_page=${currentPage}`)
//     .then((resp) => resp.json())
//     .then((json) => {
//       pick("#monster-container").innerHTML = "";
//       json.forEach(renderFirstPage);
//     });
// }

// function createForm() {
//   pick("#create-monster").append(createNewMonster());
// }

// function createNewMonster() {
//   let newForm = newTag("form");
//   let inputName = newTag("input");
//   let inputAge = newTag("input");
//   let inputDesc = newTag("input");
//   let buttonForm = newTag("button");

//   newForm.id = "create-form";
//   inputName.id = "name";
//   inputName.name = "name";
//   inputName.placeholder = "name...";

//   inputAge.id = "age";
//   inputAge.name = "age";
//   inputAge.placeholder = "age...";

//   inputDesc.id = "description";
//   inputDesc.name = "description";
//   inputDesc.placeholder = "description...";

//   buttonForm.textContent = "create";

//   newForm.append(inputName, inputAge, inputDesc, buttonForm);

//   // return (`

//   // <form id="create-form">
//   //     <input id="inputName" name="name" placeholder="name..."/>
//   //     <input id="age" name="age" placeholder="age..."/>
//   //     <input id="description" name="description" placeholder="description"/>
//   //     <button value="Create">Create</button>
//   // </form>

//   // `)

//   newForm.addEventListener("submit", (e) => {
//     e.preventDefault();
//     let newObj = {
//       name: e.target.name.value,
//       age: e.target.age.value,
//       description: e.target.description.value,
//     };
//     renderMonsterList(newObj);
//     e.target.name.value = "";
//     e.target.age.value = "";
//     e.target.description.value = "";
//   });
//   return newForm;
// }

// function renderFirstPage(obj) {
//   if (obj.id >= 1 && obj.id <= 50) {
//     renderMonsterList(obj);
//   }
// }

// pick("#forward").addEventListener("click", (e) => {
//   const lastMonster = e.target.parentElement.children[2].children[49].id;
//   renderNextPage(lastMonster);
//   // debugger
//   // if (  ) {
//   //     function renderPreviewPage
//   // }
// });

// function renderNextPage(lastMonster) {
//   fetch("http://localhost:3000/monsters")
//     .then((resp) => resp.json())
//     .then((json) =>
//       json
//         .filter(
//           (monster) =>
//             monster.id > lastMonster && monster.id <= lastMonster + 50
//         )
//         .forEach(renderFirstPage)
//     );
// }

// function renderMonsterList(obj) {
//   let divMonster = newTag("div");
//   let pAge = newTag("p");
//   let pName = newTag("p");
//   let pDescription = newTag("p");

//   pAge.textContent = `Age: ${obj.age}`;
//   pName.textContent = `Name: ${obj.name}`;
//   pDescription.textContent = `Description: ${obj.description}`;
//   divMonster.id = obj.id;

//   divMonster.append(pName, pAge, pDescription);

//   pick("#monster-container").append(divMonster);
// }

// //  <button id="back"><=</button>
// //     <button id="forward">=></button>
