const ids = ['one','two','three','four','five','six','seven','eight','nine']
const random = Math.floor(Math.random() * ids.length);
console.log(random)
let counter = 0
function myFunction(guess) {
  myTimeout = setTimeout(function(){
  alert('You lost! Refresh the page to try again.');
  }, 30000);
  var randomclick = document.getElementById(guess).value;
  console.log(randomclick)
  if (ids[random] == randomclick) {
    alert('you won! '+ counter + ' tries');
    show()
    myStopFunction();
  } else {
    counter++;// Increment the counter
    alert('Try again! You have ' + (9 - counter) + ' guesses left.');
    if (counter == 9) {
      alert('You lost!');
      myStopFunction();
    }
  }
}
function myStopFunction() {
  clearTimeout(myTimeout);
}
function show() {
  const dialog = document.querySelector("dialog");
  const showButton = document.querySelector("dialog + button");
  const closeButton = document.querySelector("dialog button");

  // Function to open the dialog modally
  function openDialog() {
    dialog.showModal();
  }

  // "Show the dialog" button opens the dialog modally
  showButton.addEventListener("click", openDialog);

  // "Close" button closes the dialog
  closeButton.addEventListener("click", () => {
    dialog.close();
  });

  // Call openDialog() directly without a click event
  openDialog();
}