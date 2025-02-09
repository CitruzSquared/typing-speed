var speed = document.getElementById("speed");
var word = document.getElementById("word");
var textarea = document.getElementById("textarea");
var nextwordbox = document.getElementById("nextword");


var numcorrect = 0;
var numcorrectwords = 0;
var started = false;
var time = 0;

word.innerText = wordlist[Math.floor(Math.random() * wordlist.length)];
var nextword = wordlist[Math.floor(Math.random() * wordlist.length)];

nextwordbox.innerText = nextword;
style = window.getComputedStyle(word);
width = style.getPropertyValue('width');
textarea.style.width = width;
textarea.maxLength = word.innerText.length;


if (textarea.addEventListener) {
	textarea.addEventListener('input', function() {
		if (!started) {
		startTime = new Date();
		started = true;
		}
		if (textarea.value.charAt(textarea.value.length - 1) === ' ') {
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
		
	}, false);
} else if (textarea.attachEvent) {
	area.attachEvent('onpropertychange', function() {
		if (!started) {
		startTime = new Date();
		started = true;
		console.log(started);
		}
		if (textarea.value.charAt(textarea.value.length - 1) === ' ') {
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
		word.innerText = nextword;
		nextword = wordlist[Math.floor(Math.random() * wordlist.length)];
		nextwordbox.innerText = nextword;
		style = window.getComputedStyle(word);
		width = style.getPropertyValue('width');
		textarea.style.width = width;
		textarea.value = "";
		textarea.maxLength = word.innerText.length;
	}
}
