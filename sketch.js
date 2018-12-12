function generateQuiz(questions, quizContainer, resultsContainer, submitButton) {

	function showQuestions(questions, quizContainer) {
		var output = []; 
		var answers; 
		for(var i=0; i<questions.length; i++){
			answers = []; 
			for(letter in questions[i].answers){
				answers.push(
					'<label>'
						+ '<input type ="radio" name="question'+i+'" value="'+letter+'">' 
						+ letter + ': '
						+ questions[i].answers[letter]
					+ '</label>'
					);
			}
			output.push(
				'<div class="question">' + questions[i].question + '</div>'
				+ '<div class="answers">' + answers.join('') + '</div>'
			);
		}
		quizContainer.innerHTML = output.join('');
	}
}

var questions = [
{
	question: "What's Your Sign?", 
	answers: {
		a: 'Aries', 
		b: 'Taurus',
		c: 'Gemini', 
		d: 'Cancer',
		e: 'Leo',
		f: 'Virgo',
		g: 'Libra',
		h: 'Scorpio',
		i: 'Sagittarius',
		j: 'Capricorn',
		k: 'Aquarius', 
		l: 'Pisces'
	}, 
	correctAnswer: "a"
}, 
{
	question: "At What Time of Day Were You Born?", 
	answers: {
		a: 'Morning',
		b: 'Afternoon',
		c: 'Evening', 
		d: 'Night', 
	}, 
	correctAnswer: "b"
}, 
{
	question: "Where In The World Were You Born?", 
	answers: {
		a: 'Southeast Hemisphere',
		b: 'Southwest Hemisphere',
		c: 'Northeast Hemisphere',
		d: 'Northwest Hemisphere', 
	}, 
	correctAnswer: "c"
}, 
{
	question: "In What Decade Were You Born?", 
	answers: {
		a: '1970',
		b: '1980',
		c: '1990',
		d: '2000', 
	}, 
	correctAnswer: "d"
}, 
{
	question: "Pick An Element", 
	answers: {
		a: 'Air',
		b: 'Water',
		c: 'Earth',
		d: 'Fire', 
	}, 
	correctAnswer: "a"
} 
]

function showResults(questions, quizContainer, resultsContainer) {
		// gather answers from quiz
		var answerContainers = quizContainer.querySelectorAll('.answers'); 
		// keep track of users answers
		var userAnswer = ''; 
		var numCorrect = ''; 
		// for each question... 
		for (var i=0; i<questions.length; i++){
			// find selected answer
			userAnswer = (answerContainers[i].querySelector('input[name=question'+i+']:checked')||{}).value; 
			// if answer is correct 
			if(userAnswer===questions[i].correctAnswer){
				// add to the number of correct answers 
				numCorrect++;
				// color the answers green 
				answerContainers[i].style.color = 'lightgreen';
			}
			// if answer is wrong 
			else{
				// color the answers red 
				answerContainers[i].style.color = 'red';
			}
		} 
		// show number of correct answers out of total 
		resultsContainer.innerHTML = numCorrect + ' out of ' + questions.length;
	}

// when user clicks submit, show results 
	submitButton.onclick = function() {
		showResults(questions, quizContainer, resultsContainer);
	}


var quizContainer = document.getElementById('quiz'); 

var resultsContainer = document.getElementById('results'); 

var submitButton = document.getElementById('submit');

generateQuiz(myQuestions, quizContainer, resultsContainer, submitButton)

