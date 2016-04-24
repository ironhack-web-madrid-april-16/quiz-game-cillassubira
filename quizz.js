
var read = require('read');

var Flashcard = function(question, answer) {
	var properties = {
		prompt: question,
		answer: answer
	};

	return {
		prompt : question,
		answer: answer
	}
};

var Quizz = function(array_of_questions){
	
	flashcards = array_of_questions;
	i =0;
	points = 0;
	randomid = Math.floor(Math.random()*(flashcards.length+1))
	console.log("Welcome to the Quizz!");
	console.log(randomid);
	start();

	function start(){
		console.log("You are on question #" + (i+1) + " Total points accumulated: " +  points);
		read(flashcards[i], displayAnswer);
	}

	function displayAnswer(err, user_answer){
    	console.log("Your answer is: " + user_answer);
    	checkAnswer(user_answer);
    }

    function checkId(){
		if (i== flashcards.length){
			console.log("This is the end. Your final punctuation is: " + points);
		}
		else{
			start();
		}
	}

	function checkAnswer(user_answer){
		if (user_answer == flashcards[i].answer){
			console.log(" and it is correct!. Let's go to next question!");
			i = i+1;
			pointCounting(true);
			checkId();
		}
		else {
			console.log("and it is incorrect! Try again!");
			pointCounting(false);
			checkId();
		}
	}

	function pointCounting(correct_incorrect){
		var increment = 10;
		var decrement = 2;
		if (i==randomid){
			console.log("That's the bonus question")
			increment = increment * 2;
			decrement = decrement * 2;
		}
		if (correct_incorrect == true){
			points = points + increment;
		}
		else{
			points = points - decrement;
		}
	}
};

flashcards = [ 
new Flashcard("Who is the author of the book 'Nineteen Eighty Four'?", "George Orwell"),
new Flashcard("Who wrote 'War and Peace'?", "Leo Tolstoy"),
new Flashcard("George Bernard Shaw, the great dramatist, was (a Welsh, an Irishman, an Englishman)?", "an Irishman"),
new Flashcard("Who wrote 'A Tale of Two Cities'?", "Charles Dickens"),
new Flashcard("Did J.D. Salinger write 'The Catcher in the Rye'? (Yes/No)", "Yes")
];

var quizz1 = new Quizz(flashcards);

