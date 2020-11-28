const addButton = document.getElementById("add");
const removeButton = document.getElementById("remove");

const input = document.getElementById("item");
const list = document.getElementById("list");

addButton.addEventListener("click", (event) => {
  createListItem(input.value);
  input.value = "";
});



function createListItem(item) {
  let listItem = document.createElement("li");
  let button = document.createElement("button");
  button.innerHTML = "Remove";
  button.id = "remove";
  listItem.innerHTML = item;
  listItem.append(button);
  list.append(listItem);

  button.addEventListener('click', event => {
    listItem.remove()
  })
}
