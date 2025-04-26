function firstChar(text) {
  // your code here
	text = text.trim()[0]
	return text.length > 0 ? text[0] : ''
}

// Do not change the code below
//Uncomment the following line to show the prompt popup
const text = prompt("Enter text:");
alert(firstChar(text));
