function rollerDice() {
  imageDice = document.getElementById("diceImages");
  numDice = document.getElementById("inputNumber").value;
  diceResult = document.getElementById("diceResult");
  console.log(imageDice);
  values = [];
  images = [];

  for (i = 0; i < numDice; i++) {
    const value = Math.floor(Math.random() * 6) + 1;

    values.push(value);
    console.log(values);
    images.push(`<img src="images/dice${value}.png"></img>`);
  }

  diceResult.textContent = `Dice numbers: ${values}`;
  imageDice.innerHTML = images;
}
