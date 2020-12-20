
//html reference
const startButton = document.getElementById('start');
const nextButton = document.getElementById('next');
const endButton = document.getElementById('end');
const message = document.getElementById('message');
const quizContainer = document.getElementById('quiz');

//quiz questions
let  questions = [];
let currentQuestion = 0;
let score = 0;

questions.push(new Question("where is stockholm the capital?", "Sweden", ["Iceland", "Denmark"]);
questions.push(new Question("which country have the largest population in the world?", "China", ["United States", "India"]);
questions.push(new Question("Which is the number 1 language in the world?", "English", ["Spanish", "Chinese"]);

console.log(questions);

//events
startButton.addEventListener('click', function() {
	startButton.classList.add('disable');
	message.textContent = "Choose an answer!";
	loadNextQuestion();
});

nextButton.addEventListener('click', function() {
	quizContainer.textContent = ''; //hacky way to remove quiz html
	nextButton.classList.add('disable');
		currentQuestion++;
		loadNextQuestion();
		message.textContent = "Choose an answer!";
});

endButton.addEventListener('click', function(){
	quizContainer.textContent = ''; //hacky way to remove quiz html
	endButton.classList.add('disable');
	// another way to add message message.textContent = "You got" + score  + " out of " + questions.length + "!";
	message.textContent = `You got ${score} out of ${questions.length}!`;

	//extra message
	if (score == 0) {
		//message.textContent += "Better luck next time!";

	}
});

//callback function
function loadNextQuestion() {

	let question = questions[currentQuestion].getHTML();
	quizContainer.appendChild(question);
}

function questionAnswered(isCorrect) {
	if(isCorrect) {
	   message.textContent = "Correct!";
	   score++;
	} else {
	   message.textContent = "No!";
	}

 //if there are more questions
	if (currentQuestion < questions.length - 1){
		nextButton.classList.remove('disable');
	} else {
		endButton.classList.remove('disable');
	}

function createElement(tagNamme, className, text) {
	const elem = document.createElement(tagName);
	elem.classList.ass(className);
	elem.textContent = text;
	return elem;
}
