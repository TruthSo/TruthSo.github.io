window.addEventListener('load', function() {
    // const boxLabels = ['test1', 'test2', 'test3', 'test4', 'test5'];
    // const boxes = document.querySelectorAll('.box');
  
    // for (let i = 0; i < boxes.length; i++) {
    //   const label = boxes[i].querySelector('label');
    //   label.textContent = `Box ${i + 1}: ${boxLabels[i]}`;
    // }
  });
  


// Add event listener to each copy button
const copyButtons = document.querySelectorAll(".copy-button");
copyButtons.forEach(function(button, index) {
  button.addEventListener("click", function() {
    // Copy the content of the corresponding textarea to the clipboard
    const textareaEl = button.previousElementSibling;

    if (textareaEl && textareaEl.tagName.toLowerCase() === "textarea") {
      textareaEl.select();
      document.execCommand("copy");
    
      // Log the copied text to the console
      console.log(`Copied text from Box ${index + 1}: ${textareaEl.value}`);
    
      // Show a notification message
      const notification = document.createElement("div");
      notification.classList.add("show");
      notification.classList.add("notification");
      notification.textContent = `From Box ${index + 1} content has copied!`;
      document.body.appendChild(notification);

       // Remove the notification message after 2 seconds
      setTimeout(function() {
        notification.remove();
        notification.classList.remove("show");
      }, 5000);
    }
  });  
});

const table = document.querySelector('table');
const tbody = table.querySelector('tbody');

for (let i = 1; i <= 5; i++) {
  const row = document.createElement('tr');
  row.classList.add('data-row');

  // Add first column to row
  const labelCell = document.createElement('td');
  labelCell.textContent = `Box ${i+1}`;
  row.appendChild(labelCell);

  // Add empty cells to row
  const valueCell = document.createElement('td');
  valueCell.setAttribute('contenteditable', 'true');
  row.appendChild(valueCell);

  valueCell.addEventListener('input', function() {
    const boxLabel = `Box ${i}: ${valueCell.textContent}`;
    const box = document.querySelector(`.box:nth-of-type(${i}) label`);
    box.textContent = boxLabel;
  });

  
  tbody.appendChild(row);
}

