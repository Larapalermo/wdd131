const input = document.querySelector('input');
const button = document.querySelector('button');
const list = document.querySelector('list');

const li = document.createElement('li');
const deleteButton = document.createElement('button');
li.textContent = input.value;
deleteButton.textContent = 'X';
li.append(deleteButton);
list.append(li);

const addChapterButton = document.getElementById('addChapterButton');

// Create a function to handle the click event  
function handleAddChapter() {
    console.log('Add Chapter button clicked');
    // You can add your logic here to add a chapter  
}

// Add the click event listener to the button  
addChapterButton.addEventListener('click', handleAddChapter);