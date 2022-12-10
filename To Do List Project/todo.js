const toDoForm = document.getElementById("to-do-form");
const toDoInput = document.getElementById("to-do-input");
const toDoList = document.getElementById("to-do-list");

// Add a new task
toDoForm.addEventListener("submit", (event) => {
  // Prevent form submission
  event.preventDefault();

  // Create new list item with task
  const newListItem = document.createElement("ul");
  newListItem.classList.add("list-element");

  const newTextItem = document.createElement("li");
  newTextItem.innerText = toDoInput.value.toLocaleUpperCase();
  newListItem.appendChild(newTextItem);
  newTextItem.classList.add("list-text");

  // Clear input field
  toDoInput.value = "";

  // Add "Done" button to list item
  const doneButton = document.createElement("button");
  doneButton.innerText = "Done";
  doneButton.classList.add("done-button");
  newListItem.appendChild(doneButton);

  // Handle "Done" button click
  doneButton.addEventListener("click", () => {
    if (
      newTextItem.style.textDecoration === "line-through" &&
      newTextItem.style.backgroundColor === "grey"
    ) {
      // If the text is already struck through, remove the line-through style
      newTextItem.style.textDecoration = "none";
      newTextItem.style.backgroundColor = "rgba(68, 116, 143,0.466)";
    } else {
      // If the text is not struck through, add the line-through style
      newTextItem.style.textDecoration = "line-through";
      newTextItem.style.backgroundColor = "grey";
    }
  });

  // Add "Delete" button to list item
  const deleteButton = document.createElement("button");
  deleteButton.innerText = "Delete";
  deleteButton.classList.add("delete-button");
  newListItem.appendChild(deleteButton);

  // Handle "Delete" button click
  deleteButton.addEventListener("click", () => {
    // Display an "are you sure" confirmation dialog
    if (confirm("Are you sure you want to delete this From Your List?")) {
      // If the user clicks "OK", remove the <li> element
      newListItem.remove();
    }
  });

  // Add list item to to-do list
  toDoList.appendChild(newListItem);
});
