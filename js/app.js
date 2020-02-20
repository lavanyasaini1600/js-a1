// Assignment 1 | COMP1073 Client-Side JavaScript

/* Variables
-------------------------------------------------- */
// Create a new speechSynthesis object
var synth = window.speechSynthesis;
// Learn more about SpeechSynthesis.speak() at https://developer.mozilla.org/en-US/docs/Web/API/SpeechSynthesis/speak
var textToSpeak = ['', '', '', '', ''];
var speakButton = document.querySelector('#speakButton');

// The first, is a list of nouns
var firstList = ['The turkey', 'Mom', 'Dad'];
// The second, is a list of verbs
var secondList = ['sat on', 'ate', 'danced with'];
// The third, is a list of adjectives
var thirdList = ['a funny', 'a scary', 'a goofy'];
// The fourth, another list of nouns
var fourthList = ['goat', 'monkey', 'fish'];
// The fifth, consists of a number of places
var fifthList = ['on the moon', 'on the chair', 'in my soup'];

/* Functions
-------------------------------------------------- */
function speakNow(string) {
	// Create a new speech object, attaching the string of text to speak
	var utterThis = new SpeechSynthesisUtterance(string);
	// Actually speak the text
	synth.speak(utterThis);
}

/* Event Listeners
-------------------------------------------------- */
// Onclick handler for the button that speaks the text contained in the above var textToSpeak
speakButton.onclick = function () {
	speakNow(textToSpeak.join(' '));
}

/* Initialize DOM
-------------------------------------------------- */
window.addEventListener('load', function () {
	[firstList, secondList, thirdList, fourthList, fifthList]
		.forEach(function (list, iList) {
			var mainEle = document.querySelector('main');
			// Create section inside main
			var section = document.createElement('section');
			// Create button to randomly choose item
			var button = document.createElement('button');
			button.appendChild(document.createTextNode('Choose'));
			button.addEventListener('click', function (event) {
				var index = Math.floor(Math.random() * Math.floor(list.length));
				textToSpeak[iList] = list[index];
				document.querySelector('#output').innerHTML = textToSpeak.join(' ');
				speakNow(list[index]);
			});
			// Add button to section
			section.appendChild(button);
			// Create div to render item
			list.forEach(function (item) {
				var div = document.createElement('p');
				div.appendChild(document.createTextNode(item));
				// Add div to section
				section.appendChild(div);
			});
			// Add section to main
			mainEle.appendChild(section);
		});
});
