var speed = document.getElementById("speed");
var word = document.getElementById("word");
var textarea = document.getElementById("textarea");
var nextwordbox = document.getElementById("nextword");
var n_nextwordbox = document.getElementById("n_nextword");
var n_n_nextwordbox = document.getElementById("n_n_nextword");


var numcorrect = 0;
var numcorrectwords = 0;
var started = false;
var time = 0;

word.innerText = wordlist[Math.floor(Math.random() * wordlist.length)];
var nextword = wordlist[Math.floor(Math.random() * wordlist.length)];
var n_nextword = wordlist[Math.floor(Math.random() * wordlist.length)];
var n_n_nextword = wordlist[Math.floor(Math.random() * wordlist.length)];

nextwordbox.innerText = nextword;
n_nextwordbox.innerText = n_nextword;
n_n_nextwordbox.innerText = n_n_nextword;
var style = window.getComputedStyle(word);
var width = style.getPropertyValue('width');
var originalwidthnumber = parseFloat(width.substring(0, width.length - 2));
textarea.style.width = width;

if (textarea.addEventListener) {
	textarea.addEventListener('input', function() {
		textarea.value = textarea.valuetoLowerCase();
		if (!started) {
		startTime = new Date();
		started = true;
		}
		if (textarea.value.charAt(textarea.value.length - 1) === ' ' || textarea.value.charAt(textarea.value.length - 1) === '\n' ) {
			textarea.value = textarea.value.substring(0, textarea.value.length - 1);
		}
		var correct = true;
		for (let i = 0; i < textarea.value.length; i++) {
			if (!(textarea.value.charAt(i) === word.innerText.charAt(i))) {
				correct = false;
				break;
			}
		}
		if (correct) {
			textarea.style.color = "#60ff60";
		}
		else {
			textarea.style.color = "#ff6060";
		}
		if (textarea.value.length >=  word.innerText.length) {
			widthnumber = parseFloat(textarea.style.width.substring(0, textarea.style.width.length - 2));
			widthnumber = originalwidthnumber * textarea.value.length/word.innerText.length;
			textarea.style.width = widthnumber.toString() + 'px';
		}
		else {
			textarea.style.width = width;
		}
	}, false);
} else if (textarea.attachEvent) {
	area.attachEvent('onpropertychange', function() {
		textarea.value = textarea.valuetoLowerCase();
		if (!started) {
		startTime = new Date();
		started = true;
		}
		if (textarea.value.charAt(textarea.value.length - 1) === ' ' || textarea.value.charAt(textarea.value.length - 1) === '\n' ) {
			textarea.value = textarea.value.substring(0, textarea.value.length - 1);
		}
		var correct = true;
		for (let i = 0; i < textarea.value.length; i++) {
			if (!(textarea.value.charAt(i) === word.innerText.charAt(i))) {
				correct = false;
				break;
			}
		}
		if (correct) {
			textarea.style.color = "#60ff60";
		}
		else {
			textarea.style.color = "#ff6060";
		}
		if (textarea.value.length >=  word.innerText.length) {
			widthnumber = parseFloat(textarea.style.width.substring(0, textarea.style.width.length - 2));
			widthnumber = originalwidthnumber * textarea.value.length/word.innerText.length;
			textarea.style.width = widthnumber.toString() + 'px';
		}
		else {
			textarea.style.width = width;
		}
	});
}

function measureSpeed() {
	if (started) {
		time = new Date();
		elapsed = (time - startTime) / 1000;
		speed.innerText = Math.round(numcorrect / elapsed * 60).toString() + " cpm  |  " + Math.round(numcorrectwords / elapsed * 60).toString() + " wpm";
	}
}

setInterval(measureSpeed, 100); 

function checkCorrect() {
	if(word.innerText === textarea.value) {
		numcorrect += word.innerText.length;
		numcorrectwords += 1;

		word.innerText = nextwordbox.innerText;
		nextwordbox.innerText = n_nextwordbox.innerText;
		n_nextwordbox.innerText = n_n_nextwordbox.innerText;
		
		var n_n_nextword = wordlist[Math.floor(Math.random() * wordlist.length)];
		n_n_nextwordbox.innerText = n_n_nextword;
		style = window.getComputedStyle(word);
		width = style.getPropertyValue('width');
		originalwidthnumber = parseFloat(width.substring(0, width.length - 2));
		textarea.style.width = width;
		textarea.value = "";
	}
}
