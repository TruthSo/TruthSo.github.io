window.addEventListener('load', function() {
    const boxLabels = ['test1', 'test2', 'test3', 'test4', 'test5'];
    const boxes = document.querySelectorAll('.box');
  
    for (let i = 0; i < boxes.length; i++) {
      const label = boxes[i].querySelector('label');
      label.textContent = `Box ${i + 1}: ${boxLabels[i]}`;
    }
  });
  


// Add event listener to each copy button
const copyButtons = document.querySelectorAll(".copy-button");
copyButtons.forEach(function(button, index) {
  button.addEventListener("click", function() {
    // Copy the content of the corresponding textarea to the clipboard
    const textareaEl = button.previousElementSibling;
    const range = document.createRange();
    range.selectNode(textareaEl);
    window.getSelection().removeAllRanges();
    window.getSelection().addRange(range);
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
  });
});
