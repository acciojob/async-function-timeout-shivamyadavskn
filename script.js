async function displayTextWithDelay() {
  const textInput = document.getElementById("text").value;
  const delayInput = parseInt(document.getElementById("delay").value);

  const outputDiv = document.getElementById("output");
  outputDiv.textContent = "Waiting...";

  // Use a Promise to wait for the specified delay
  function delay(timeout) {
    return new Promise(resolve => setTimeout(resolve, timeout));
  }

  // Wait for the specified delay
  await delay(delayInput);

  // Display the text after the delay
  outputDiv.textContent = textInput;
}

const displayButton = document.getElementById("btn");
displayButton.addEventListener("click", displayTextWithDelay);
