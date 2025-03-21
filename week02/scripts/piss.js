const input = document.querySelector('#fchapter');
const deleteButton = document.createElement('button');
deleteButton.textContent = '❌';
const list = document.querySelector('#list');
const li = document.createElement('li');
li.textContent = input.value;
li.append(deleteButton);
list.append(li);

