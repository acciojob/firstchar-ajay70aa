function firstChar(text) {
  // your code here
	if (typeof(text) !== 'string') return ''
	text = text.trim()[0]
	return text.length() > 0 ? text[0] : ''
}

// Do not change the code below
//Uncomment the following line to show the prompt popup
const text = promp("Enter text:");
alert(firstChar(text));
